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

This app uses [Postgraphile](https://www.graphile.org/postgraphile/) to construct a graphql endpoint directly based on the database schema. Data can then manipulated using graphql queries and mutations.

After initializing the database (`make ensure-db`) and starting the app (`npm run dev`), manipulation of the database will be reflected in the graphql endpoint. The graphql schema can be inspected through the interactive graphql endpoint at http://localhost:3000/api/graphiql -- this endpoint can be used to construct templated queries or mutations for any given page. Once your query/mutations for a given page are outlined there, you can copy it into a file under `src/graphql/*` and you'll have access to type-safe react hooks which actually perform your baked query/templates server side and client side. In this way, each page/component can make a single request and efficiently obtain all the data necessary to render/update it.

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
