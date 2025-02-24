# tRPC

To learn more about tRPC, take a look at <https://trpc.io/docs/>

## tRPC use in this project

We opted to dynamically resolve `tRPC` routers anywhere in the `app` directory by the special file ``router.ts` (not to be confused with, but inspired by, NextJS's `route.ts` files). `router.ts` is expected to have a trpc router default export.

A router defines type safe procedures which can be executed client or server side.

After adding a new router, be sure to run `npm run codegen:trpc`.

## API Router

```ts
// /app/**/*/router.ts
import { procedure, router } from '@/lib/trpc'
import packageJson from '@/package.json'

export default router({
  version: procedure.query(() => packageJson.version),
})
```

## Client API Request

```ts
// /app/**/*/page.ts
'use client'
import trpc from "@/lib/trpc/client"

export default function Page() {
  const version = trpc.version.useQuery()
  if (!version.data) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <p>{version.data}</p>
    </div>
  )
}
```
