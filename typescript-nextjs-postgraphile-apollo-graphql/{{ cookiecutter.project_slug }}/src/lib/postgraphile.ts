import pool from '@/lib/pg'
import { postgraphile, makePluginHook } from 'postgraphile'
import PgPubsub from '@graphile/pg-pubsub'

const pluginHook =  makePluginHook([PgPubsub])

export default postgraphile(pool, 'public', {
  pluginHook,
  graphiql: true,
  watchPg: process.env.NODE_ENV === 'development',
  retryOnInitFail: process.env.NODE_ENV === 'production',
  extendedErrors: process.env.NODE_ENV === 'production' ? ['errcode'] : ["hint", "detail", "errcode"],
  disableQueryLog: process.env.NODE_ENV === 'production',
  dynamicJson: true,
  subscriptions: true,
  simpleSubscriptions: true,
  enableQueryBatching: true,
  legacyRelations: 'omit',
  enhanceGraphiql: true,
  graphqlRoute: '/api/graphql',
  eventStreamRoute: '/api/graphql/stream',
  graphiqlRoute: '/api/graphiql',
  pgSettings: async (req) => ({
    'role': process.env.NODE_ENV === 'production' ? 'visitor' : 'app',
    'http.url': `${req.url}`,
  }),
})
