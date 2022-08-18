import colors from 'vuetify/es5/util/colors'

export default {
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - client',
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: './plugins/aos',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: "#4453F9",
          secondary: "#5865F2",
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          bg : "#ffffff",
          background : "#F6F7F9",
          btn_hover:"#DADDF9",
          text:"#151325",
          drawer:"#151325",
          wt:'#ffffff',
          card: '#ffffff',
          signup:'#F6F7F9',
          black:'#bbbbbb',
        },
        dark: {
          primary: "#ffffff",
          secondary: "#393A5A",
          info: colors.teal,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          bg : '#121212',
          text:"#ffffff",
          background : "#151325",
          card: '#212036',
          drawer : '#ffffff',
          signup:'#ffffff',
          black:'#bbbbbb',

        }
      }
    },
  },
  build: {
    vendor:["aos"]

  }

  // Build Configuration: https://go.nuxtjs.dev/config-build
  
}
