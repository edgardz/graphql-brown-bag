import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from '@apollo/react-hooks'

import Page from './Page'

import './styles.scss'

const apolloClient = new ApolloClient({ uri: '/graphql', cache: new InMemoryCache({ addTypename: false }) })

class App extends React.PureComponent {
  render() {
    return (
      <section>
        <Page />
      </section>
    )
  }
}

class AppRoot extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<AppRoot />, document.getElementById('root'))
