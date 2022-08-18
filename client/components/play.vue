<template >
  <v-main
    class="mt-12"
    :class="{
      'mx-120': $vuetify.breakpoint.mdAndUp,
      'mx-16': $vuetify.breakpoint.smAndDown,
    }"
  >
    <v-card class=" elevation-0" rounded  >
      <v-row justify="center" align="center" class="py-12">
        <h4
          class="
            mb-120
            mt-4
            font-weight-regular
            text-sm-center text-xs-center text-md-center
            text-sm-h3 text-md-h3 text-lg-h2 text-xl-h2
          "
        >
          {{
            this.slides[
              this.Page >= this.slides.length ? (this.Page -= 1) : this.Page
            ].description
          }}
        </h4>

      </v-row>
      <v-container
        :class="{
          '': $vuetify.breakpoint.mdAndUp,
          'mr-16': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-row no-gutters justify = 'center'
        :class="{
      'mx-n10': $vuetify.breakpoint.mdAndUp,
      'mx-auto': $vuetify.breakpoint.smAndDown,
    }"
        >
          <v-col class=" mt-10"
          :class="{
      '': $vuetify.breakpoint.mdAndUp,
      'mr-16 ml-n3 mt-n14': $vuetify.breakpoint.smAndDown,
    }"
          >
            <v-btn
              :class="{
      'px-16 py-16': $vuetify.breakpoint.mdAndUp,
      'px-5 py-6  mt-4 mb-10': $vuetify.breakpoint.smAndDown,
    }"
              class="my-5 answer-1 text--text"
              outlined
              color="primary"
              block
              @click="answer(slides[Page].answers[0].content)"
              active-class="answers"
            >
              <v-icon class="mr-2">mdi-cards-heart</v-icon>
              <h7 class="text-sm-h7 text-md-h6 text-lg-h6 text-xl-h6 mx-4">{{ this.slides[this.Page].answers[0].content }}</h7>
            </v-btn>
          </v-col>
          <v-col class=" mt-10"
          :class="{
      '': $vuetify.breakpoint.mdAndUp,
      'mr-16 ml-n3 mt-n14': $vuetify.breakpoint.smAndDown,
    }">
            <v-btn
                :class="{
      'px-16 py-16': $vuetify.breakpoint.mdAndUp,
      'px-5 py-6 mt-4': $vuetify.breakpoint.smAndDown,
    }"
              class="my-5 answer-2 text--text"
              outlined
              color="primary text--text"
              block
              @click="answer(slides[Page].answers[1].content)"
              active-class="answers"
            >
              <v-icon class="mr-2">mdi-cards-diamond</v-icon>
              <h7 class="text-sm-h7 text-md-h6 text-lg-h6 text-xl-h6 mx-4">{{ this.slides[this.Page].answers[1].content }}</h7>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-container
        :class="{
          '': $vuetify.breakpoint.mdAndUp,
          'mr-14': $vuetify.breakpoint.smAndDown,
        }"
      >
        <v-row no-gutters
        
        justify = 'center'
        :class="{
      'mx-n10': $vuetify.breakpoint.mdAndUp,
      'mx-auto': $vuetify.breakpoint.smAndDown,
    }">
          <v-col class=" mt-n14 "
          :class="{
      '': $vuetify.breakpoint.mdAndUp,
      'mr-16 ml-n3 mt-n14': $vuetify.breakpoint.smAndDown,
    }">
            <v-btn
             :class="{
      'px-16 py-16': $vuetify.breakpoint.mdAndUp,
      'px-5 py-6  mt-4 mb-10': $vuetify.breakpoint.smAndDown,
    }"
              class="my-5 answer-3 text--text"
              outlined
              color="primary"
              @click="answer(slides[Page].answers[2].content)"
              block
              active-class="answers"
            >
              <v-icon class="mr-2">mdi-checkbox-blank-outline</v-icon>
              <h7 class="text-sm-h7 text-md-h6 text-lg-h6 text-xl-h6 mx-4">{{ this.slides[this.Page].answers[2].content }}</h7>
            </v-btn>
          </v-col>
          <v-col class=" mt-n14"
          :class="{
      '': $vuetify.breakpoint.mdAndUp,
      'mr-16 ml-n3 mt-n14': $vuetify.breakpoint.smAndDown,
    }">
            <template> </template>
            <v-btn
             :class="{
      'px-16 py-16': $vuetify.breakpoint.mdAndUp,
      'px-5 py-6  mt-4': $vuetify.breakpoint.smAndDown,
    }"
              class="my-5 answer-4 text--text"
              outlined
              color="primary"
              block
              @click="answer(slides[Page].answers[3].content)"
              active-class="answers"
            >
              <v-icon class="mr-2">mdi-hexagon-outline</v-icon>
              <h7 class="text-sm-h7 text-md-h6 text-lg-h6 text-xl-h6 mx-4">{{ this.slides[this.Page].answers[3].content }}</h7>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-dialog v-model="dialog" max-width="300">
      <v-row justify="center">
        <v-dialog v-model="dialog" max-width="500">
          <v-card>
            
            <v-card-title class="text-h5">
              
             <v-row justify = 'center' class="mt-2 mb-2">
               <h1 class="display-1 font-weight-bold">Submit</h1>
             </v-row>
            </v-card-title>

            <v-card-text>
              <h2 class="font-weight-regular text-center">
               You can redo the quiz and if you are sure you can accept
              </h2>
            </v-card-text>

            <v-card-actions>
              <v-btn color="red darken-1" text @click="RedoIt"> 
              <v-icon>mdi-autorenew</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="submit">
               <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-dialog>
    <v-row class="mt-16">
      <div>
        <h2 class="mr-3 pointer" color="text"> {{lang[langnum].Roomcode}} <br> {{this.joinincode}}</h2>
      </div>
      <v-spacer></v-spacer>
      <div>
        <h2>{{lang[langnum].youcompleted}}<br>
        <v-progress-circular class='mb-1 ml-6' :value="completion"></v-progress-circular>
         </h2>
      </div>
    </v-row>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {


  async created() {
    console.log(this.joinincode)
    if (this.joinincode !== undefined) {
      try {
        const res = await axios({
          url: `http://localhost:9000/quiz/join/` + this.joinincode,
          method: "GET",
        });
        console.log("every this is Ok");
        this.quiz = res.data.slides;
        this.slides = this.quiz.slides;
        console.log(this.slides);
      } catch (e) {
        console.log("hi" + e);
      }
    } else {
      this.$router.push("/");
    }
  },
  methods: {
    timerloop(){
      this.count++
      this.now = Math.trunc(new Date().getTime() / 1000)
      this.count < 200 && setTimeout(this.timerloop, 1000)
    },
    answer(contentAnswer) {
      if (this.Page < this.slides.length) {
        this.Page += 1;
        this.completion = this.completion + 100/this.slides.length
        this.QuizAnswers.push(contentAnswer);
      } else {
        console.log(this.QuizAnswers);
      }
      console.log(this.QuizAnswers);
    },
    RedoIt() {
      this.Page = 0;
      this.completion = 0
      this.QuizAnswers = [];
      this.dialog = false
    },
    async submit() {
      try {
        const quiz = this.QuizAnswers;
        const accesstoken = localStorage.getItem("accesstoken") || undefined;
        if (accesstoken) {
          const res = await axios({
            url: "http://localhost:9000/quiz/hand/" + this.joinincode,
            data: {
              handedQuiz: quiz,
            },
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
            method: "POST",
          });
          console.log(res.data.message);
        } else {
          const res = await axios({
            url: "http://localhost:9000/quiz/guest/hand/" + this.joinincode,
            data: {
              handedQuiz: quiz,
            },
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
            method: "POST",
          });
          console.log(res.data.message);
          
        }
        this.$router.push('/mainpage')
      } catch (e) {
        const quiz = this.QuizAnswers;
        const res = await axios({
          url: "http://localhost:9000/quiz/guest/hand/" + this.joinincode,
          data: {
            handedQuiz: quiz,
          },
          method: "POST",
        });
        console.log(res.data.message);
        this.$router.push('/')
      }
    },
  },
  watch: {
    Page: function (val) {
      if (val === this.slides.length) {
        this.dialog = true;
      }
    },
  },
  mounted(){
    this.timerloop()
  },

  computed: {
    seconds(){
      return ((this.modifiedDate - this.now)/60) % 60
    },
    minutes(){
            return (this.modifiedDate - this.now) % 60

    },
    modifiedDate: function(){
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    ...mapState(["joinincode", 'lang', 'langnum']),
  },
  data: () => ({
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  data() {
    return {
      now:0,
      count:0,
       completion: 0,
      dialog: false,
      QuizAnswers: [],
      quiz: {},
      slides: [
        {
          description: "",
          answers: [
            {
              content: "",
              CW: false,
            },
            {
              content: "",
              CW: false,
            },
            {
              content: "",
              CW: false,
            },
            {
              content: "",
              CW: false,
            },
          ],
        },
      ],
      Page: 0,
      toggle: "",
      a1: false,
      a2: false,
      a3: false,
      a4: false,
    };
  },
};
</script>

<style>
.py-120 {
  padding-bottom: 8rem;
}
.height-1 {
  min-height: fit-content;
  height: 800px;
}
.answer {
  background: #5C7728 !important;
}
.answer-1{
  background-color: red !important;
}
.answer-2{
  background-color: goldenrod !important;
}
.answer-3{
  background-color: #86B049  !important;
}
.answer-4{
  background-color: lightskyblue !important;
}
.mx-120{
   margin-left: 8rem;
  margin-right: 8rem;
}
.body {
  background-image: linear-gradient(#dde0fa, white) !important;
}
.mb-120{
  margin-bottom: 12rem;
}
</style>
