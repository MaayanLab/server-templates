# {{ cookiecutter.project_name }}

{{ cookiecutter.project_description }}

### Development
This app uses [Next.js](https://nextjs.org/), a framework for jointly developing the server side and client side of a web application using react and server side rendering.

```bash
# creates the database if it doesn't already exist, launches and provisions it
make ensure-db
# install dependencies with npm
npm i
# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages defined in `src/pages/*`. The page auto-updates as you edit the code base. For more information, see the [Next.js Documentation](https://nextjs.org/docs).

This app uses [Prisma](https://www.prisma.io/) for managing the database in a typesafe manner. Please consult their documentation for usage instructions, the schema is constructed in `prisma/schema.prisma` and the type-safe client is available for use in `src/lib/prisma.ts`.

## Database
This application uses a postgres database. A `docker-compose` file can be used to run it and a `Makefile` exists to assist with quick auto-provisioning. The `.env.example` file contains the environment variables which need to be specified, the Makefile will copy it to `.env` which is purposely not in version control.

### Add tables
```bash
dbmate n migration_name
# modify generated file in db/migrations/*.sql
#  both up (apply) & down (un-apply)
# once ready, it can be added to the database with
dbmate up
# and if necessary, reverted with `dbmate down`
```

### Manual inspection
```bash
make pg-shell
```
