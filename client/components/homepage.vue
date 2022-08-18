 <template> 
 <main>
  <div 
          :class="{'mx-120': $vuetify.breakpoint.mdAndUp, 'mx-8': $vuetify.breakpoint.smAndDown}"

  >
    
    <p class="mt-12 display-1 text-center font-weight-bold text-sm-h3 text-md-h3 text-lg-h1 text-xl-h1 game" v-if="wlc">
      {{lang[langnum].Welcome_to_kaboot}}
    </p>
    <p class="mt-6 text-center  text-sm-h7 text-md-h6 text-lg-h5 text-xl-h4 game" v-if="toge">
     {{lang[langnum].Lets_Play_and_Test_ourselves_together}}

    </p>
     <v-row align = 'center' justify = 'center'>
        <v-col cols="auto" v-if="join"
        class="game">
      <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        class="game"
        
        
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn  class="secondary mr-5 elevation-0 round px-5 py-5 game"
          
            v-bind="attrs"
            v-on="on" >
          {{lang[langnum].joinus}}
        </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
              <v-toolbar

              color = 'bg'
            >
           <h2 class="mr-3 " color="text">{{lang[langnum].joinus}}</h2>
            </v-toolbar>
            <v-card-text>
            <v-row justify="center" align = "center" class="px-5 py-5 mt-12">
               <v-btn class="ma-2  round"
          outlined
          medium
          @click ='ToTeacher'
          color="primary">

          <v-icon class="mr-1 " small>mdi-account-box </v-icon>
          <h3>
            {{lang[langnum].teacher}}
          </h3>
        </v-btn>
             <v-btn class="ma-2 round"
          outlined
          medium
         @click ='ToStudent'
          color="primary">

          <v-icon class="mr-1 " small>mdi-account-child </v-icon>
          <h3>
            {{lang[langnum].student}}
          </h3>
          </v-btn>
            </v-row>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
         <v-btn class="ma-2 round px-5 py-5 game"
         v-if="play"
          outlined
          @click = 'check'
          to = '/mainpage'
          color="primary">
          
          <v-icon class="mr-1 " >mdi-play</v-icon>
          {{lang[langnum].Play}}
        </v-btn>
     </v-row>
     <v-row align="center"
      v-if="show1"
      justify="center"
      class="px-5 game">
      <v-img 
      class="mt-8 border-1 hidden-md-and-down px-12 "
      max-width="1000"
      max-height = '600'
      :src="require('~/assets/kid.jpg')" />
      <v-img 
      class="mt-8 border-1 hidden-sm-and-down hidden-lg-and-up px-12 "
      max-width="650"
      max-height = '550'
      :src="require('~/assets/kid.jpg')" />
      <v-img 
      class="mt-8 border-1 hidden-md-and-up"
      max-width="350"
      max-height = '250'
      :src="require('~/assets/kid.jpg')" />
       
      
     </v-row>
      <h1 class="mt-124   display-5 text-center font-weight-bold" data-aos="zoom-in"   data-aos-duration="3000" v-if="show"
      >
        {{lang[langnum].How_kaboot_works}}
    </h1>
      <v-row class="mt-8 "  justify = 'center' align = 'center' data-aos="zoom-in"   data-aos-duration="3000" v-if="show">
           
           <v-card
           
    class="mx-auto mt-8"
    max-width="400"
    color = 'card'
    v-if="show"
  >
    <v-img 
    v-if="show"
      max-width="350"
      max-height = '250'
      :src="require('~/assets/Create.png')" />

      <v-card-title class="font-weight-bold" >{{lang[langnum].Create}}</v-card-title>
    <v-card-text class="text--primary">
      <div>{{lang[langnum].You_can_create_your_own_quiz_with_alot_of_questions_and_in_minutes}}</div>
    </v-card-text>
  </v-card> 
           <v-card
    class="mx-auto mt-8"
    max-width="400"
        color = 'card'
        v-if="show"

    
  >
    <v-img 
      max-width="350"
      max-height = '250'
      :src="require('~/assets/host.png')" />

      <v-card-title class="font-weight-bold" >{{lang[langnum].Share}}</v-card-title>
    <v-card-text class="text--primary">
      <div>{{lang[langnum].You_can_hare_your_quiz_to_all_your_students_friends_and_children_to_engage_them_when_you_are_together}} </div>
    </v-card-text>
  </v-card>
  <v-card
    class="mx-auto mt-8"
    max-width="400"
        color = 'card'
        v-if="show"

  >
    <v-img 
      max-width="350"
      max-height = '250'
      :src="require('~/assets/play.png')" />

      <v-card-title class="font-weight-bold" >{{lang[langnum].Play}}</v-card-title>
    <v-card-text class="text--primary">
      <div>{{lang[langnum].Explore_our_communitys_quizzes_and_have_fun_playing_it_and_get_your_score_instantly}}</div>
    </v-card-text>
  </v-card>
      </v-row>
      
      <v-list-item justify = 'center' align = 'center' class="mt-12  mx-auto  " data-aos="fade-up"   data-aos-duration="3000"  v-if="show">
         <v-list-item-avater class="ml-12 ">
              <v-img 
      class="mt-8 ml-12 mb-12 hidden-md-and-down mr-12 py-20"
      max-width="350"
      max-height = '350'

      :src="require('~/assets/guest.png')" />
          
          </v-list-item-avater>
          
          <v-list-item-content  >            
               <h1 class="mt-12 display-5 text-lg-left text-xl-left font-weight-bold text-sm-center text-xs-center text-md-center">
                {{lang[langnum].Wanna_play_without_creating_an_account}}
            </h1>
            <h2 class="mt-12 display-7 text-left font-weight-regular text-lg-left text-xl-left font-weight-regular text-sm-center text-xs-center text-md-center">
                {{lang[langnum].Go_on_and_type_the_generated_code_your_friends_shared_with_you}} <br>{{lang[langnum].A_temporary_account_with_the_name_guest_is_made_for_this_need}}<br> {{lang[langnum].Now_You_can_play_with_your_friends_without_the_need_of_an_account}}
                </h2>
            <v-col class="text-lg-left text-xl-left font-weight-bold text-sm-center text-xs-center text-md-center  ">
            <v-dialog
        transition="dialog-top-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class=" mr-3 elevation-0 mt-7 font-weight-bold" outlined
          small
          color="primary" large rounded-lg
          v-bind="attrs"
          v-on="on"
          >

          <v-icon class="mr-1 " small>mdi-play </v-icon>
         {{lang[langnum].play_as_a_guest}}
        </v-btn>
        </template>
        <template v-slot:default="">
          <v-card>
            <v-toolbar
              color="secondary"
              dark

            >
            <v-row justify = 'center'>
              <v-icon>mdi-walk</v-icon>
            <h2
                            class="mx-130"

            >{{lang[langnum].Join_room_as_guest}}</h2>
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
  </v-row>
                <v-row justify = 'center'>
                  <h7 class="display-2">{{lang[langnum].kaboot}}</h7>
                  </v-row>
                  <v-row>
                    <v-text-field 
                    outlined
                    v-model="code"
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
                @click="JoinQuiz"
              >{{lang[langnum].joinus}}</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
            </v-col>     
             
          </v-list-item-content> 
      </v-list-item>
      <v-list-item justify = 'center' align = 'center' class="mt-12 ml-12 " data-aos="fade-up"   data-aos-duration="3000" v-if="show">
         
          
          <v-list-item-content >            
               <h1 class="mt-12 display-5 text-lg-right text-xl-right font-weight-bold text-sm-center text-xs-center text-md-center">
              {{lang[langnum].The_News}}
            </h1>
            <h2 class="mt-12 display-7 text-left font-weight-regular text-lg-right text-xl-right font-weight-regular text-sm-center text-xs-center text-md-center">
                 {{lang[langnum].Any_Important_New_we_will_post_it_here}}   <br>  {{lang[langnum].Better_to_check_every_time_you_join_kaboot}}
            </h2>   
            <v-col class=" text-lg-right text-xl-right font-weight-bold text-sm-center text-xs-center text-md-center ">
             <v-btn class="  elevation-0 mt-7 font-weight-bold" outlined
          small
          color="primary" large rounded-lg 
              >
              
         <h3> {{lang[langnum].blog}}</h3>
        </v-btn>
            </v-col>     
             
          </v-list-item-content> 
          <v-list-item-avater class="mr-12" >
              <v-img 
      class="mt-8 mr-12 mb-12 ml-12 hidden-md-and-down px-20 py-15"
      max-width="450"
      max-height = '450'

      :src="require('~/assets/news.png')" />
          
          </v-list-item-avater>
      </v-list-item>
     



       <p class="mt-20 text-center  text-sm-h5 text-md-h4 text-lg-h3 text-xl-h2 font-weight-bold" data-aos="fade-up"   data-aos-duration="3000"  v-if="show">
        {{lang[langnum].We_Have_Alot_Of_Games}}
</p>
    <h3 class="mt-6 text-center  " data-aos="fade-up"   data-aos-duration="3000"  v-if="show">
      {{lang[langnum].Everyday_more_teachers_students_and_guests_join_kaboot}}
</h3>
          <v-row class="mt-6 "  justify = 'center' align = 'center' data-aos="fade-up"   data-aos-duration="3000"  v-if="show">

            <v-card
    class="mx-12 mb-6"
    max-width="344"
  >
        <v-row  justify = 'center' align = 'center'>
          <v-icon  class="mt-4 pt-4">
          mdi-account-box
        </v-icon>
        </v-row>

    <v-card-text rounded>
      <div class="text--primary mb-6 px-12 pb-3">
       {{lang[langnum].As_a_teacher_Create_and_share}}
 <br>
        {{lang[langnum].to_all_your_students_and_have_fun_together}}

      </div>
    </v-card-text>
  </v-card>
  <v-card
    class="mx-12 mb-6"
    max-width="344"
  >
        <v-row  justify = 'center' align = 'center'>
          <v-icon  class="mt-4 pt-4">
          mdi-account-child

        </v-icon>
        </v-row>

    <v-card-text rounded>
      <div class="text--primary mb-6 px-12 pb-3" >
        {{lang[langnum].As_a_student_Join_quizzes}} <br>
{{lang[langnum].And_fill_Your_profile_with_high_marks}}
      </div>
    </v-card-text>
  </v-card>
  <v-card
    class="mx-12 mb-6"
    max-width="344"
  >
        <v-row  justify = 'center' align = 'center'>
          <v-icon  class="mt-4 pt-4">
mdi-account-remove        </v-icon>
        </v-row>

    <v-card-text rounded>
      <div class="text--primary mb-6 px-12 pb-3" >
       {{lang[langnum].As_a_guest_Join_and_a_play}} <br>
        {{lang[langnum].BUT_dont_expect_to_store_any_marks}}

      </div>
    </v-card-text>
  </v-card>
          </v-row>  
  </div>
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
    <v-snackbar
      v-model="snackbar2"
    >
      {{ text2 }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar2 = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </main>

  
</template>

<script>
import aosMixin from '~/plugins/aos'

import { mapState } from 'vuex';
  export default {
  mixins: [aosMixin],

    computed : 
{
...mapState(['lang']),
},
async created(){
  try{
      const ar = localStorage.getItem("lang")
      this.langnum = ar
  }
  catch(e){
    console.log(e)
  }
},
mounted(){
  this.showtoggle()
  this.showwlc()
  this.showtoge()
  this.showjoin()
  this.showplay()
  this.showplay1()
},
    methods : {
      showtoggle(){
        setTimeout(() => {
          this.show = true
        }, 2500);
      },
      showwlc(){
        setTimeout(() => {
        this.wlc = true  
        }, 1500);
      },
      showtoge(){
        setTimeout(() => {
          this.toge = true
        }, 1750);
      },
      showjoin(){
        setTimeout(() => {
          this.join = true
        }, 2000);
      },
      showplay(){
        setTimeout(() => {
          this.play = true
        }, 2000);
      },
      showplay1(){
        setTimeout(() => {
          this.show1 = true
        }, 2250);
      },
      check(){
        try{
          if(localStorage.getItem('accesstoken'))
          {
            this.$router.push('/mainpage')
          }
          else{
            this.text2 = 'You should have an account to see the content of this page'
            this.snackbar2 = true
          }
        }
        catch(e){
          console.log(e)
        }
      },
       toggleDarkTheme() {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          console.log(this.$vuetify.theme.dark);
    },
    JoinQuiz(){
      console.log(this.code)
      this.$store.commit("joinroom", this.code);
      this.$router.push("/play");
      this.dialog = false
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
      }
    },
    data: () => ({
      wlc:false,
      toge:false,
      join:false,
      play:false,
      show :false,
      show1:false,
      code: '',
      snackbar:false,
      snackbar2:false,
      langnum : 0,
      text2:'',
      otp: '',
      length: 10,
      drawer: false,
      text:'',
      group: null,
      model: 'caption',
      sizes: [
        ['mdi-devices', 'all', 'caption'],
        ['mdi-cellphone', 'sm', 'h5', 'h7', 'h6', 'h8'],
        ['mdi-laptop', 'md', 'h4', 'h6', ,'h5', 'h7'],
        ['mdi-monitor', 'lg', 'h3', 'h5', 'h4', 'h6'],
        ['mdi-television', 'xl', 'h2', 'h4', 'h3', 'h5','h6','h7'],
      ],
      sm : [
            {
                icon : 'mdi-facebook',
                link : '#'
            },
             {
                icon : 'mdi-twitter',
                link : '#'
            },
             {
                icon : 'mdi-discord',
                link : '#'
            },
             {
                icon : 'mdi-instagram',
                link : '#'
            }
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
.pointer{
  cursor: pointer;
}
.round{
  border-radius: 8px;
}
.mt-20{
  margin-top: 120px;
}
.mr-20{
  margin-right: 200px;
}
.ml-20{
  margin-left: 150px;
}
.px-20{
  padding-top: 20px;
  padding-right: 90px;
  padding-left:0px;
  padding-bottom: 10px;
}
.px-25{
  padding-top: 20px;
  padding-right: 110px;
  padding-left:110px;
  padding-bottom: 10px;
}
.border-1{
  border-style: solid;
  border-width: 5px;
  border-radius: 15px;
  border-color: #4453F9;
  padding: 10px;
  border-spacing: 1000px;
}
.rounded-1{
  border-radius: 100px;
}
.py-20{
  padding-bottom: 60px;
  padding-top: 60px;
}
.mx-120{
  margin-left: 8rem;
  margin-right: 8rem;

}
.mt-124{
  margin-top: 10rem;
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