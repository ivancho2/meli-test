import React from 'react'
import Head from 'next/head'

import '../src/styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        {/* Icons */}
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/favicon.svg"
          rel="icon"
          data-head-react="true"
        />
        <link
          href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.5/mercadolibre/180x180.png"
          rel="apple-touch-icon"
          crossOrigin="anonymous"
        />
        {/* Fonts Preload: only woff2 */}
        <link
          rel="preload"
          href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://http2.mlstatic.com/ui/webfonts/v3.0.0/proxima-nova/proximanova-semibold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta
          property="og:image"
          content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
          crossOrigin="anonymous"
        />
        {/* SEO */}
        <title>Mercado Libre</title>
        <meta
          name="description"
          content="La comunidad de compra y venta online más grande de América Latina."
        />
        {/* TODO: PDN Canonical URL  */}
        {/* <link rel="canonical" href="https://www.mercadolibre.com.ar" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
