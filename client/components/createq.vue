0<template>
  <main
              :class="{'mx-120': $vuetify.breakpoint.mdAndUp, 'mx-16': $vuetify.breakpoint.smAndDown}"
              

  >

   <v-row justify = 'center' align = 'center'>
        <div id = "app">
          <v-sheet class="p-100 mt-12" color = 'bg'>
             
             <v-row justify = 'center' align = 'center' class="mt-12">
             <v-text-field
             v-model=slides.description
            label= "quesiton"
            placeholder="Slide question"
            class= "mx-16 text-center font-weight-bold"
          ></v-text-field>
         
</v-row>
             <v-container
        :class="{'mx-auto': $vuetify.breakpoint.mdAndUp, 'mr-14': $vuetify.breakpoint.smAndDown}"
       >
    <v-row no-gutters class="mx-n16 mt-6">
      <v-col order="First" class="mx-12 mt-12">

          <v-btn class="px-16 py-12 my-5 mx-4" 
         outlined
         
         color="primary"
          block>
                    <v-icon class="mr-2">mdi-cards-heart</v-icon>
                    <v-text-field
            v-model=slides.answers[0].content
            label="answer one"
            class="mx-6"
          ></v-text-field>
           <v-checkbox
      v-model="slides.answers[0].CW"
    ></v-checkbox> 
                </v-btn>

      </v-col>
      <v-col  class="mx-12  mt-12">

         <v-btn class="px-16 py-12 my-5 mx-4" 
          outlined
         color="primary"
          block
         >
                   <v-icon class="mr-2">mdi-cards-diamond</v-icon>
                    <v-text-field
                                v-model=slides.answers[1].content

            label="answer two"
            class="mx-6"
          ></v-text-field>
           <v-checkbox
      v-model="slides.answers[1].CW"
    ></v-checkbox> 
                </v-btn>

      </v-col>
    </v-row>
  </v-container
  >
             <v-container class=''
         :class="{'mx-auto': $vuetify.breakpoint.mdAndUp, 'mr-14': $vuetify.breakpoint.smAndDown}"
        >
    <v-row no-gutters class="mx-n16">
      <v-col order="First" class="mx-12 mt-12">

          <v-btn class="px-16 py-12 my-5 mx-4"  outlined
         color="primary"
          block>
                    <v-icon class="mr-2">mdi-checkbox-blank-outline</v-icon>
                    <v-text-field
                                v-model=slides.answers[2].content

            label="answer three"
            class="mx-6"
          ></v-text-field>
           <v-checkbox
      v-model="slides.answers[2].CW"
    ></v-checkbox> 
                </v-btn>

      </v-col>
      <v-col  class="mx-12 mt-12">

         <v-btn class="px-16 py-12 my-5 mx-4"  outlined
         color="primary"
          block>
                   <v-icon class="mr-2">mdi-hexagon-outline</v-icon>
                    <v-text-field
                                v-model=slides.answers[3].content

            label="answer four"
            class="mx-6"
          ></v-text-field> 
          <v-checkbox
      v-model="slides.answers[3].CW"
    ></v-checkbox> 
                </v-btn>

      </v-col>
    </v-row>
  </v-container>
            <v-row justify = 'center' align = 'center' class="mt-12">
                  <v-btn
      color="secondary"
      class="ma-2 white--text"
      fab
      @click="upload"
    >
      <v-icon dark>
        mdi-cloud-upload
      </v-icon>

    </v-btn>
            </v-row>
            
        </v-sheet>
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
          {{lang[langnum].close}}
        </v-btn>
      </template>
    </v-snackbar>
        </div>
   </v-row>
  </main>
</template>


<script>
import { mapState } from 'vuex';
export default {
   computed : 
{
...mapState(['history', 'lang', 'langnum']),
},
   
    data (){
      
        return{
          truefalse:false,
          state1:false,
          state2:false,
          state3:false,
            snackbar: false,
            text: ``,
            dialog: false,   
            items: ['Math', 'Science', 'Language', 'Computer'], 
            slides : {
          description:null,
          answers: [
            {
              content:null,
              CW: false
            },
            {
              content:null,
              CW: false
            },
            {
              content:null,
              CW: false
            },
            {
              content:null,
              CW: false
            }
          ]
        }, 
      };
    }, 

    methods: {
        trufalse(){
                    this.truefalse = !this.truefalse

          this.slides.answers[0].content = null
          this.slides.answers[1].content = null
          this.slides.answers[2].content = null
          this.slides.answers[3].content = null
           this.slides.answers[0].CW = false
          this.slides.answers[1].CW = false
          this.slides.answers[2].CW = false
          this.slides.answers[3].CW = false

        },
        upload() {
          if(this.slides.answers[0].content != null || this.slides.answers[1].content == null || this.slides.answers[2].content == null || this.slides.answers[3].content == null){
                   this.state1 = true
                }
                 else {
                this.state1=false
                this.state2=false
                this.state3=false
                 this.snackbar = true
              this.text = 'You cant add slide with empty answers'
              
              }


              
                if(this.slides.answers[0].CW == true || this.slides.answers[1].CW == true || this.slides.answers[2].CW == true || this.slides.answers[3].CW == true){
                   this.state2 = true
                }
                 else {
                this.state1=false
                this.state2=false
                this.state3=false
                 this.snackbar = true
              this.text = 'You cant add slide without any correct answers'
              
              }
               if(this.slides.description != null){
                this.state3 = true
                console.log('hh')
               }
                else {
                this.state1=false
                this.state2=false
                this.state3=false
                this.snackbar = true
                              this.text = 'Question field must be filled'

              }
              if(this.state1 == true && this.state2 == true && this.state3 == true){
                try{    
                  this.$store.commit("ADD_SLIDE", this.slides);
                  this.slides = {
                    title:'',
                    description:'',
                    answers: [
                      {
                        content:"",
                        CW: false
                      },
                      {
                        content:"",
                        CW: false
                      },
                      {
                        content:"",
                        CW: false
                      },
                      {
                        content:"",
                        CW: false
                      }
                    ]
                  };
                }
               catch (e) {
                console.log(e)
               }
               
             }
              
                
              
        }
    },
  
   
}
</script>


<style>
.border-homar{
        border-color: rgb(233, 5, 5);
        border-width: 2px;
        border-style: groove;
        margin-right: 8px;
        margin-left: 8px;
    }
.prl{
    padding-right: 200px;
    padding-left: 100px;
}
.p-200{
    padding: 100px;
}
.mt-120{
  margin-top: 14rem;
}
</style>