require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    session = require('express-session'),
    massive = require('massive'),
    app = express();
    path = require('path'),
    // app.use( express.static(path.resolve(__dirname,'..','build')));
    app.use( express.static(`${__dirname}/../build`) );

    

    app.use(bodyParser.json());
    app.use(cors());
    app.use(session({
        secret: 'password',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());


    let activeUser

    passport.use(new Auth0Strategy({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.AUTH_CALLBACK,
      }, function(accessToken, refreshToken, profile, done) {
        const db = app.get('db');
        
          db.findUser([ profile.identities[0].user_id ])
          .then( user => {
           if ( user[0] ) {
            activeUser = user[0]
            console.log(activeUser)
             return done( null, { id: user[0].id } );
        
           } else {
        
             db.createUser([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id])
             .then( user => {
                return done( null, { id: user[0].id } );
             })
        
           }
          })
      }
    ));

    //------------MASSIVE-------------//

    massive({
        host: process.env.MASSIVE_HOST,
        port: 5432,
        database: process.env.MASSIVE_DATABASE,
        user: process.env.MASSIVE_USER,
        password: process.env.MASSIVE_PASSWORD,
        ssl: true,
    }).then(function(db){
        app.set('db',db);
    })

    //------------STORY ENDPOINTS-----------//
    app.get('/stories', (req,res)=>{
        var db = req.app.get('db');
        db.getAllStories().then(stories=>{
           
            res.status(200).send(stories)
        })
    })

    app.get('/stories/:id', (req,res)=>{
        var db = req.app.get('db');
        console.log(req.params.id)
        db.getFilteredStories(req.params.id).then(stories=>{
            console.log(stories)
            res.status(200).send(stories)
        })
    })

    //------------FAVORITES-----------------//
    app.get('/favorites',(req,res)=>{
        var db = req.app.get('db');
        if(activeUser){
            db.getFavorites(activeUser.id).then(favorites=>{
                res.status(200).send(favorites)
            })
        } else res.status(200).send(['no favorites'])
    })
    app.post('/addFavorites/:story_id',(req,res)=>{
        var db = req.app.get('db');
        if(activeUser){
            db.addFavorites(activeUser.id,req.params.story_id).then(favorites=>{
                console.log(favorites)
                res.status(200).send(favorites)
            })
        }
    })
    app.delete('/deleteFavorites/:story_id',(req,res)=>{
        var db = req.app.get('db');
        if(activeUser){
            db.deleteFavorites(activeUser.id,req.params.story_id).then(favorites=>{
                console.log(favorites)
                res.status(200).send(favorites)
            })
        }
    })

    //-----------Featured-----------//
    app.get('/featured',(req,res)=>{
        var db = req.app.get('db');
            db.getFeatured().then(featured=>{
                res.status(200).send(featured)
            })
        }
    )

    //------------Coordinates----------//
    app.get('/coordinates',(req,res)=>{
        var db = req.app.get('db');
            db.getCoordinates().then(results=>{
                res.status(200).send(results)
            })
    })

    //------------AUTH0-------------//

    app.get('/auth', passport.authenticate('auth0'));

    app.get('/auth/callback', passport.authenticate('auth0', {
        successRedirect: '/',
        failureRedirect: '/'
    }))
      
    passport.serializeUser(function(user, done) {
        done(null,user)
    })

    passport.deserializeUser(function(obj, done) {
        app.get('db').findSessionUser([obj.id])
        .then( user => {
          return done(null, user[0]);
        })
    })

    app.get('/auth/me', (req, res, next) => {
        if (!req.user) {
          return res.status(404).send('User not found');
        } else {
          return res.status(200).send(req.user);
        }
    })
    app.get('/auth/logout', (req, res) => {
        req.logOut();
        activeUser=null;
        console.log(activeUser)
        return res.redirect(302, '/');
    })

    //------------- END AUTH0 --------------//


    // const path = require('path')
    // app.get('*', (req, res)=>{
    //   res.sendFile(path.join(__dirname, '..','build','index.html'));
    // })
    
    const port = 3030;

    app.listen(port,()=>{console.log(`Port ${port} is ouchea`)})
