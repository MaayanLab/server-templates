import { db } from "@/lib/database"
import { sql } from 'kysely'

import { procedure, router } from "@/lib/trpc";
import { z } from 'zod'


export default router({
  testQuery: procedure.query(async (props) => {
    const { rows: [{ value }] } = await sql<{ value: number }>`
      select random() as value;
    `.execute(db)
    // the type (number) here is also known client-side
    return value
    
    // the raw query can be typed explicitly, but kysely query helpers
    //  can also derive the type automatically based on the table definition itself
    // return await db.selectFrom('app.example').selectAll().executeTakeFirst()
  }),
  testMutation: procedure.input(z.object({
    value: z.number(),
  })).mutation(async (props) => {
    // the runtime zod-codec both asserts that the API params are formatted properly
    //  and also gives props.input the correct types for typescript autocompletion
    return props.input.value + 1
  })
})
