# {{ cookiecutter.project_name }}

{{ cookiecutter.project_description }}

## Development
This app uses [Next.js](https://nextjs.org/), a framework for jointly developing the server side and client side of a web application using react and server side rendering.

Additionally, we use Kysely, a type-safe API for making SQL database queries. It's not quite an ORM, it focuses on enabling you to write SQL and get type-safe results for improved developer experience.

Finally, we use tRPC, a mechanism for building type-safe APIs. You write the server-side routes and can query them client-side, preserving type safety.

### Getting Started

```bash
cp .env.example .env
# configure POSTGRES_PASSWORD/DATABASE_URL in .env

# create db
docker compose up -d postgres
npx kysely migrate:latest

# start app in development
npm i
npm run dev
```
