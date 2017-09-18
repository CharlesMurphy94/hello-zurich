select stories.id,stories.name, blurbs.blurb
from stories
join blurbs on blurbs.story_id = stories.id
join categorystory on categorystory.story_id = stories.id
join categories on categories.id = categorystory.category_id
where categories.name = $1;