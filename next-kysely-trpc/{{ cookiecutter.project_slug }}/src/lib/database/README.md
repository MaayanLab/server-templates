# kysely

Kysely provides type-safe database querying without overhead.

To learn more about kysely, take a look at <https://kysely.dev/docs/intro>

## migrations

```bash
# create a new migation file
npx kysely-ctl migrate:make some-db-migration

# migrate active db (DATABASE_URL)
npx kysely-ctl migrate:latest

# for more command line options
npx kysely-ctl --help
```

## kysely use in this project

```ts
import { db } from '@/lib/database'
import { sql } from 'kysely'

async function query() {
  const limit = 10

  const helper_results = await db
    .selectFrom('some_table')
    .selectAll()
    .limit(limit)
    .execute()
  
  const custom_results = await sql`
    select *
    from ${db.table('some_table')}
    limit ${limit}
  `.execute(db)
}
```
