module.exports = {
  images: { domains: ['http2.mlstatic.com'] },
  serverRuntimeConfig: {
    // Will only be available on the server side
    EXTERNAL_API_URL: process.env.EXTERNAL_API_URL,
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
}
