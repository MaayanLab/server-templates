import type { Kysely } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
	// For more info, see: https://kysely.dev/docs/migrations
  db.schema
    .createSchema('app')
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
	// For more info, see: https://kysely.dev/docs/migrations
  db.schema
    .dropSchema('app')
    .cascade()
    .execute()
}
