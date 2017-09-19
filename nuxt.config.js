const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
  css: [
    {src: '~assets/index.scss', lang:'scss'}
  ],
  build: {
    vendor: ['axios','element-ui']
  },
  plugins: ['~plugins/element-ui'],

  router: {
    middleware: ['auth']
  },
  /*
  ** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    }),
    // Api middleware
    // We add /api/login & /api/logout routes
    '~/api'
  ]
}