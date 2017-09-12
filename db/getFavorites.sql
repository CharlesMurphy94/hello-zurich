select stories.id as story_id,stories.name, blurbs.blurb
from stories
join favorites on favorites.story_id = stories.id
join users on users.id = favorites.user_id
join blurbs on blurbs.story_id = stories.id
where users.id = $1;
