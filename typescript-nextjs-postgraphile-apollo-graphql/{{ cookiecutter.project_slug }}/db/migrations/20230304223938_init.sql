-- migrate:up
create role app;
create role visitor;

-- migrate:down
drop role visitor;
drop role app;
