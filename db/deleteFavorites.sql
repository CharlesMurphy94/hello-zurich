delete from favorites
where user_id = $1 
and story_id = $2
RETURNING *;