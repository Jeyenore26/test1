<template>
  <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      fixed
      shift
    >
      <v-btn @click="dialog = false">
        <span color=" bg--text">Language</span>

        <v-icon>mdi-alphabetical</v-icon>
      </v-btn>
<v-btn @click="dialog = false">
        <span color=" bg--text">Computer</span>




        <v-icon>mdi-language-javascript</v-icon>
      </v-btn>
      <v-btn @click.stop = 'dialog = true'>

        <span color=" bg--text">Join</span>
       <v-icon class="mb-6" color = 'bg'>mdi-run-fast</v-icon>
      </v-btn>
      





      <v-btn @click="dialog = false">
        <span color=" bg--text">math</span>

        <v-icon>mdi-sigma</v-icon>
      </v-btn>

      <v-btn @click="dialog = false">
        <span color=" bg--text">Science</span>

        <v-icon>mdi-flask</v-icon>
      </v-btn>
      <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template>
          <v-card>
            <v-toolbar
              color="secondary"
              dark

            >
            <v-row justify = 'center'>
              <v-icon>mdi-walk</v-icon>
            <h2
                            class="mx-130"

            >Join room as guest</h2>
            </v-row>
            </v-toolbar>
             
            <v-card-text>
              
              <div class="text-h2 pa-12">
                  <v-row justify = 'center mt-2 mx-16'>
                               <v-img
      max-height="180"
      max-width="160"
      class="mt-n5"

      :src="require('~/assets/LOGO3.png')" />    
    <h7 class="display-2">Kaaboot</h7>
                
                
                  </v-row>
                  <v-row>
                    <v-text-field 
                    outlined
                    placeholder="Game Code"
                    style="font-size : 2rem"
                    class="mx-5 mt-6 text-center">

                    </v-text-field>
                  </v-row>
              </div>
            </v-card-text>
            <v-card-actions class="justify-center mx-16 mt-n10">
              <v-btn
                
                color="primary"
                block
                class="mx-16 py-7 mt-n8"
                @click="dialog.value = false"
              >Join</v-btn>
            </v-card-actions>
          </v-card>
        </template>
    </v-dialog>
    </v-bottom-navigation>
    
</template>
<script>
  export default {
    data(){
        return{
            dialog : false,
        }
    },
    data: () => ({ value: 2 }),

    computed: {
      color() {
      switch (this.value) {
        case 0:
          return "secondary";
        case 1:
          return "info";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        case 4:
          return "gray";
        default:
          return "red";
      }
    },
    },
  }
</script>