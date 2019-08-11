import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'
import { BACKEND } from '../../config'

let apolloClient = null

function create(initialState, headers) {
  const isBrowser = typeof window !== 'undefined'
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: BACKEND,
      credentials: 'include',
      fetch: !isBrowser && fetch,
      headers: headers || {}
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState, headers) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState, headers)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, headers)
  }

  return apolloClient
}
