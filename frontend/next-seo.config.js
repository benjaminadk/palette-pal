const { FRONTEND } = require('./config')

export default {
  title: 'Palette Pal',
  titleTemplate: '%s | Home',
  description: 'A free and open source destination for color palettes',
  canonical: FRONTEND,
  defaultOpenGraphImageHeight: 1200,
  defaultOpenGraphImageWidth: 1200,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: FRONTEND,
    title: 'Palette Pal',
    description: 'A free and open source destination for color palettes',
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: ''
      }
    ],
    site_name: 'Palette Pal'
  },
  twitter: {
    handle: '@bendoyendo',
    site: '',
    cardType: 'summary_large_image'
  },
  facebook: {
    appId: '1234567890'
  }
}
