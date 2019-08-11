import App, { Container } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { DefaultSeo } from 'next-seo'
import GlobalHead from '../components/GlobalHead'
import GlobalStyle from '../components/GlobalStyle'
import withApolloClient from '../apollo/withApollo'
import SEO from '../next-seo.config'
import Layout from '../components/Layout'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query
    pageProps.pathname = ctx.pathname
    return { pageProps }
  }
  render() {
    const { Component, apolloClient, pageProps } = this.props

    return (
      <Container>
        <GlobalHead />
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <ApolloProvider client={apolloClient}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
