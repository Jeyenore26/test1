<template>
  <main>
    <v-app-bar color = 'bg elevation-0 mt-5'>
      <v-toolbar-title color = 'bg'>
      <v-img
      max-height="100"
      max-width="80"
      :src="require('~/assets/LOGO3.png')" />
      </v-toolbar-title>
       <h2 class="mr-3 " color="text">kaboot</h2>  
       <h5 
       class="pointer ml-12   hidden-xs-only " color = 'text'
       >Blog</h5>
       <h5
       color="text"
       class="pointer ml-8   hidden-xs-only"
       >Content</h5>
       <v-spacer>
       

       </v-spacer>
        <v-btn x-small  fab color = 'bg' class="mr-4 ml-4 elevation-0" @click="toggleDarkTheme()"> 
        <v-icon>mdi-theme-light-dark</v-icon>
       </v-btn>
       <v-app-bar-nav-icon color = 'drawer' @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
       

        <v-btn class="ma-2 hidden-xs-only round"
          outlined
          small
          color="primary">
          
          <v-icon class="mr-1 " small>mdi-play</v-icon>
          Play
        </v-btn>
        <v-btn small class="secondary mr-5 elevation-0 hidden-xs-only round" >
          Join us
        </v-btn>

     
    </v-app-bar>
   <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <v-btn class=" mr-3 elevation-0 mt-7 font-weight-bold" color = 'wt' 
              >
              
          Join us
        </v-btn>
            </v-list-item-title>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-title>
                <v-btn class="mr-3 elevation-0  mt-4 font-weight-bold" color = 'wt' >
                Play
                </v-btn>

            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn class="mr-3 elevation-0  mt-4 font-weight-bold" color = 'wt' >Blog</v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn class="mr-3 elevation-0  mt-4 font-weight-bold" color = 'wt' >Content</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </main>
</template>

<script>
export default {

}
</script>

<style>

</style>