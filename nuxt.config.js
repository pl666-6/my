const { config } = require(`./config/config.${process.env.NODE_ENV}`)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon33.ico' }],
    script:[
      {src: "https://map.qq.com/api/gljs?v=1.exp&key=3VXBZ-JHRW3-TCC3V-YXBNT-GVS7F-O7FB5",  type: 'text/javascript', mode: 'client'},
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // 'quill/dist/quill.snow.css',
    // 'quill/dist/quill.bubble.css',
    // 'quill/dist/quill.core.css',
    'element-ui/lib/theme-chalk/index.css',
    'swiper/css/swiper.css',
    {src: '~/assets/sass/main.scss', lang: 'scss'},
    '~/assets/css/my-global.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/assets/js/common', ssr: false },
    '@/plugins/element-ui',
    '~/plugins/axios',
    // { src: '~/plugins/vue-quill-editor', ssr: false },
    '~/plugins/moment',
    '~/plugins/lodash',
    '~/plugins/config',
    '~/plugins/common',
    '~/plugins/filter'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    //    host: config.httpBaseUrl,
    //    port: '8181',
    //    prefix: '/api',
    baseURL: config.httpBaseUrl,
    // browserBaseURL
    // https
    // progress
    // proxy: false,
    // retry
    credentials: true
    // debug
    // proxyHeaders
    // proxyHeadersIgnore
  },
  // proxy: {
  //   '/api': 'http://jjhpx.fyxmt.com'
  // },
  // proxy: {
  //   '/api': 'http://jjhpx.fyxmt.com',
  //   '/upload': 'http://jjhpx.fyxmt.com',
  //   '/oss': 'http://jjhpx.fyxmt.com',
  //   '/ossverfiy': 'http://jjhpx.fyxmt.com'
  // },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  router: {
    base: '/home_page_pc/'
  }
}
