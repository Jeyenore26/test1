<template>
  <v-app dark>
    <v-container class="fill-height">
      <v-row justify = 'center'>
        <v-col cols = '10'>
          <h3 class="display-4">
            N00b
          </h3 >
          <p class="display-2">
           let me guess skill issue  u better get gud
          </p>
          <h2>
            error: {{error.message}}
          </h2>
          <v-btn nuxt to="/">
            Go home and get gud
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
