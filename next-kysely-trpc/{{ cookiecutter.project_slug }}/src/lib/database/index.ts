import { DB } from 'kysely-codegen'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import Cursor from 'pg-cursor'

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
  }),
  cursor: Cursor,
})

export const db = new Kysely<DB>({
  dialect,
})

