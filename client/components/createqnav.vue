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
       <h2 class="mr-3 pointer " color="text" @click='$router.push("/")'>TestZone</h2>  
       
       <v-spacer>
       

       </v-spacer>
        
       <v-row  justify = 'end'>
        <v-btn x-small  fab color = 'bg' class="mx-10 elevation-0" @click="toggleDarkTheme()"> 
        <v-icon>mdi-theme-light-dark</v-icon>
       </v-btn> 
       <v-app-bar-nav-icon color = 'drawer ' @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
        >
<v-icon>mdi-checkbox-marked-circle-outline</v-icon>
        </v-btn>
      </template>
      <v-card>
        
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col>
                 <v-list-item>
            <v-list-item-content>
               <v-text-field
            label="Quiz Title"
            v-model=title

          ></v-text-field>
            </v-list-item-content>
          </v-list-item>
                <v-autocomplete
            :items="items"
            outlined
            dense
            label="Subject"
            v-model=catagory
            class="mx-3"

          ></v-autocomplete>
         
              </v-col>
              
             
             
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            {{lang[langnum].close}}
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="savequiz"
            
          >
            {{lang[langnum].save}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
  </v-row>


     
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
              <v-btn class="mr-3 elevation-0  mt-4 font-weight-bold" color = 'bg' >Blog</v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn class="mr-3 elevation-0  mt-4 font-weight-bold" color = 'bg' >Content</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <div class="text-center ma-2">
     
    <v-snackbar
      v-model="snackbar"
    >
      'title and catagory must be filled'

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="close"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>

  </main>
</template>

<script>
import { mapState } from 'vuex';
  export default {
     computed : 
{
...mapState([ 'lang', 'langnum']),
},
   
    data (){
        return{   
          title:null,
          catagory : null,
          catagoryf:false,
          titlef:false,
          btn: true,
         
        } 
      
    },
    
    methods : {
      
       toggleDarkTheme() {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          console.log(this.$vuetify.theme.dark);
        
    },
        
          savequiz(){
            if(this.title != null){
              this.titlef = true
            }
            else{
              this.titlef = false
              this.catagoryf = false
            }
            if(this.catagory != null){
              this.catagoryf = true
            }
             else{
              this.titlef = false
              this.catagoryf = false
            }
          if( this.titlef == true && this.catagoryf == true)
          
          {
            this.dialog = !this.dialog
            this.$store.commit("create_title", this.title);
            this.$store.commit("create_catagory", this.catagory);
            this.$store.commit('create_quiz')


        }
        else {
          this.dialog = !this.dialog
          this.snackbar = true
        }
        },
        close(){
        this.snackbar = false
      },
        
    },
    data: () => ({
snackbar : false,
      dialog: false,   
    items: ['Math', 'Science', 'Language', 'Computer'], 
      drawer: false,
      group: null,
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
.mx-120{
  margin-left: 8rem;
  margin-right: 8rem;
}
</style>