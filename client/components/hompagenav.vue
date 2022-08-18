<template>
  <main>
    <v-app-bar
      color="bg"
      class="elevation-0 mt-5"
      :class="{
        'mx-120': $vuetify.breakpoint.mdAndUp,
        'mx-16': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-toolbar-title color="bg">
        <v-img
          max-height="100"
          max-width="80"
          class="hidden-sm-and-down"
          :src="require('~/assets/LOGO3.png')"
        />
      </v-toolbar-title>
      <h1 class="font-weight-black" color="text" 
      :class="{
        'mr-3': $vuetify.breakpoint.mdAndUp,
        'ml-n12': $vuetify.breakpoint.smAndDown,
      }"
      
      >TestZone</h1>
      <v-btn class="ml-8 mt-1 hidden-sm-and-down game" text v-if="blog">
        <h3 class="font-weight-black">{{ lang[langnum].blog }}</h3>
      </v-btn>
      <v-spacer> </v-spacer>
      <v-btn
        x-small
        fab
        color="bg"
        class=" game mr-4 ml-4 elevation-0"
        @click="toggleDarkTheme()"
        v-if="trans"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-menu offset-y v-if="trans">
        <template v-slot:activator="{ on, attrs }" >
          <v-btn v-bind="attrs" v-on="on" fab x-small text class="hidden-sm-only game"  >
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list class="py-4 px-4">
          <v-row class="py-2 px-2">
            <v-btn @click="arabic" color = 'primary' text>Arabic</v-btn>
          </v-row>
          <v-row class="py-2 px-1">
            <v-btn @click="english"  color = 'primary' text>English</v-btn>
          </v-row>
        </v-list>
      </v-menu>
      <v-col cols="auto">
        <v-dialog transition="dialog-top-transition" max-width="600" v-if="join">
          <template v-slot:activator="{ on, attrs }" >
            <v-btn
              small
              class="secondary mr-5 elevation-0 hidden-sm-and-down round px-5 py-4 game"
              v-bind="attrs"
              v-on="on"
              ><h3>
                {{ lang[langnum].joinus }}
              </h3></v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="bg">
                <h2 class="mr-3" color="text">{{ lang[langnum].joinus }}</h2>
              </v-toolbar>
              <v-card-text>
                <v-row justify="center" align="center" class="px-5 py-5 mt-12">
                  <v-btn
                    class="ma-2 hidden-xs-only round"
                    outlined
                    medium
                    @click ='ToTeacher'
                    color="primary"
                  >
                    <v-icon class="mr-1" small>mdi-account-box </v-icon>
                    {{ lang[langnum].teacher }}
                  </v-btn>
                  <v-btn
                    class="ma-2 hidden-xs-only round"
                    outlined
                    medium
                    @click="ToStudent"
                    color="primary"
                  >
                    <v-icon class="mr-1" small>mdi-account-child </v-icon>
                    {{ lang[langnum].student }}
                  </v-btn>
                </v-row>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
      <v-app-bar-nav-icon
        color="drawer "
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up mr-3 game"
        v-if="play"
      ></v-app-bar-nav-icon>

      <v-btn
        class="ma-2 hidden-sm-and-down round px-5 py-4 game"
        outlined
        small
        to="/mainpage"
        color="primary"
        @click="play2"
        v-if="play"
      >
        <v-icon class="mr-1" small>mdi-play </v-icon>
        <h3>
          {{ lang[langnum].Play }}
        </h3>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute left temporary color="bg">
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <v-btn
                class="mr-3 elevation-0 mt-4 font-weight-bold"
                color="bg"
                to="/mainpage"
              >
                {{ lang[langnum].Play }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <v-btn class="mr-3 elevation-0 mt-4 font-weight-bold" color="bg"
                >{{ lang[langnum].blog }}</v-btn
              >
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </main>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    mounted(){
      this.showblog()
      this.showtrans()

      this.showjoin()
      this.showplay()
    },
    computed :
{
...mapState(['lang']),
},
async created() {
 try{
      const ls =  localStorage.getItem('lang')
      if(ls){
      const ar = localStorage.getItem('lang')
      this.langnum = ar
      }
      else{
        localStorage.setItem('lang', 0)
        location.reload()
      }

  }
  catch(e){
    console.log(e)
  }
  
},

    methods : {
      play2(){
        try{
          const token = localStorage.get('refreshtoken')
          if(token == undefined){
            this.snackbar = true
          }
        }
        catch(e){
          this.snackbar = true
        }
          
      },
      ToStudent() {
        try{
          const accesstoken = localStorage.getItem('accesstoken')
          if(accesstoken){
            this.snackbar = true
            this.text = 'You already logged in'

          }
          else{
            this.$router.push('/signupstd')
          }
        }
        catch(e){
          console.log(e)
        }
      },
      ToTeacher() {
        try{
          const accesstoken = localStorage.getItem('accesstoken')
          if(accesstoken){
            this.snackbar = true
            this.text = 'You already logged in'
          }
          else{
            this.$router.push('/signuptea')
          }
        }
        catch(e){
          
        }
      },
        showplay(){
          setTimeout(() => {
            this.play = true
          }, 750);
        },
        showjoin(){
          setTimeout(() => {
            this.join = true
          }, 1000);
        },
        showtrans(){
          setTimeout(() => {
            this.trans = true
          }, 1250);
        },
        showblog(){
          setTimeout(() => {
            this.blog = true
          }, 500);
        },
       toggleDarkTheme() {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          console.log(this.$vuetify.theme.dark);
    },
   arabic(){
    try{
      const ar = localStorage.getItem('lang')
      if(ar == 0){
        localStorage.setItem('lang', 1)
        this.langnum = 1
        location.reload();
      }
    }
    catch(e){

    }
     },
    english(){
      try{
      const ar = localStorage.getItem('lang')
      if(ar == 1){
       
        localStorage.setItem('lang', 0)
         this.langnum = 0
         this.$router.go('/')
      }
    }
    catch(e){
      
    }

     }
    },

    data: () => ({
     snackbar: false,
      text: `You should have an account to see the content of this page`, 
      play:false,
      join:false,
      trans:false,
      blog:false,
      langnum : 0,
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

    watch: {
      group () {
        this.drawer = false
      },
    },

  }
</script>

<style>
.mx-120 {
  margin-left: 8rem;
  margin-right: 8rem;
}
.mr-120 {
  margin-right: 8rem;
}
.game{
  animation: start 2s;

}
@keyframes start {
  0%{
    opacity: 0;
    bottom:30px ;
  }
  100%{
    opacity: 1;
     bottom: 0px;
  }


}
</style>
