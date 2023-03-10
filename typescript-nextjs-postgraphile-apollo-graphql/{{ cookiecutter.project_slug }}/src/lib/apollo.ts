import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import cache from '@/utils/cache'

export default cache('apollo', () => new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: createHttpLink({
    uri: 'http://localhost:3000/api/graphql',
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
}))
