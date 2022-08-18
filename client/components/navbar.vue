<template>
  <main>
    <v-app-bar color = 'bg elevation-0 mt-5'
            :class="{'mx-120': $vuetify.breakpoint.mdAndUp, 'mx-16': $vuetify.breakpoint.smAndDown}"

    >
      <v-toolbar-title color = 'bg'>
      <v-img
      max-height="100"
      max-width="80"
      class="hidden-sm-and-down"

      :src="require('~/assets/LOGO3.png')" />
      </v-toolbar-title>
       <h1 class="mr-3 font-weight-black pointer" @click='$router.push("/")' color="text">TestZone</h1>  
      <v-btn class="ml-8 mt-1 hidden-sm-and-down" text>
        <h3 class="font-weight-black"> {{ lang[langnum].blog }}</h3>
       </v-btn>
       <v-spacer>
       

       </v-spacer>
        <v-btn x-small  fab color = 'bg' class="mr-4 ml-4 elevation-0" @click="toggleDarkTheme()"> 
        <v-icon>mdi-theme-light-dark</v-icon>
       </v-btn> 
       <v-app-bar-nav-icon color = 'drawer ' @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
       


     
    </v-app-bar>
   <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      color="bg"
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
              <v-btn class="mr-3 elevation-0  mt-4 font-weight-bold" color = 'bg' >{{ lang[langnum].blog }}</v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn class="mr-3 elevation-0  mt-4 font-weight-bold" color = 'bg' to = '/'>{{ lang[langnum].content }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </main>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    computed : 
{
...mapState(['lang']),
},async created(){
  try{
      const ar = localStorage.getItem("lang")
      this.langnum = ar
  }
  catch(e){
    console.log(e)
  }
},
    
    data: () => ({
      langnum:0,
      drawer: false,
      group: null,
      model: 'caption',
      sizes: [
        ['mdi-devices', 'all', 'caption'],
        ['mdi-cellphone', 'sm', 'h5', 'h7', 'h6', 'h8'],
        ['mdi-laptop', 'md', 'h4', 'h6', ,'h5', 'h7'],
        ['mdi-monitor', 'lg', 'h3', 'h5', 'h4', 'h6'],
        ['mdi-television', 'xl', 'h2', 'h4', 'h3', 'h5','h6','h7'],
      ],
        links: [
        'Home',
        'Blog',
        'Play',
        'Explore',
      ],

    }
    ),
    

   
    
    methods : {
       toggleDarkTheme() {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          console.log(this.$vuetify.theme.dark);
    }
    
    },
    
    watch: {
      group () {
        this.drawer = false
      },
    },
    
    
  }
</script>

<style>
.mx-120{
  margin-left: 8rem;
  margin-right: 8rem;
}
</style>