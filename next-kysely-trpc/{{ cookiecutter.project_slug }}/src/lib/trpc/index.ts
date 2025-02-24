import { initTRPC } from '@trpc/server';
export const {
  router,
  procedure,
  mergeRouters,
} = initTRPC.create()