select stories.id,stories.name, blurbs.blurb
from stories
join blurbs on blurbs.story_id = stories.id;