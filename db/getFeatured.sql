select stories.id as story_id,stories.name, blurbs.blurb
from stories
join featured on featured.story_id = stories.id
join blurbs on blurbs.story_id = stories.id
