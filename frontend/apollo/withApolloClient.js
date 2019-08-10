import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { BACKEND } from '../config'

function createClient({ headers, initialState }) {
  return new ApolloClient({
    uri: BACKEND,
    cache: new InMemoryCache().restore(initialState || {}),
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      })
    },
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        )
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }
  })
}

export default withApollo(createClient)
