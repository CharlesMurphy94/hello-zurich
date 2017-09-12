insert into favorites
(user_id,story_id) 
values($1,$2)
RETURNING *;