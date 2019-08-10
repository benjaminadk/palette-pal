import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import { DefaultSeo } from 'next-seo'
import GlobalHead from '../components/GlobalHead'
import GlobalStyle from '../components/GlobalStyle'
import withApolloClient from '../apollo/withApolloClient'
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
    const { Component, apollo, pageProps } = this.props
    return (
      <Container>
        <GlobalHead />
        <DefaultSeo {...SEO} />
        <GlobalStyle />
        <ApolloProvider client={apollo}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
