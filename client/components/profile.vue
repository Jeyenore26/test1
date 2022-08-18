<template>
  <v-main class="body">
    <template>
      <v-row justify="center" class="mb-16">
        <v-card class="pt-1 overflow-x-hidden px-20 mt-16 transperant">
          <v-row align="center" justify="center" class="mt-4">
            <v-img
              max-height="100"
              max-width="80"
              class="hidden-sm-and-down"
              :src="require('~/assets/LOGO3.png')"
            />
          </v-row>
          <v-row align="center" justify="center" class="mt-8">
            <h3>{{ user.name }}</h3>
          </v-row>
          <v-row align="center" justify="center" class="mt-8">
            <h3>{{ user.email }}</h3>
          </v-row>
          <v-row align="center" justify="center" class="mt-8">
            <h3></h3>
          </v-row>
          <v-row align="center" justify="center" class="mt-n12">
            <v-btn text x-small class="ml-4 mt-12" color="primary">
              <v-icon>mdi-account-edit</v-icon>
            </v-btn>
          </v-row>
          <v-divider class="mx-4 my-5"></v-divider>
          <v-tabs
            v-model="tab"
            show-arrows
            grow
            justify="center"
            class="mb-10 bg"
          >
            <v-tabs-slider color="bg"></v-tabs-slider>

            <v-tab>{{lang[langnum].Quizzes_attended}}</v-tab>
            <v-tab>{{lang[langnum].Quizzes_created}}</v-tab>
            <v-tab-item class="py-8 elevation-0">
              <v-card class="py-4 elevation-0">
                <v-card-text>
                  <v-form ref="registerform" v-model="signup">
                    <v-row>
                      <v-row align="center" justify="center">
                        <v-card
                          v-for="game in games.results"
                          :key="game.Subject"
                          class="mx-20 my-12"
                          max-width="344"
                        >
                          <v-card-title>
                            {{ game.quiz.title }}
                          </v-card-title>
                          <v-card-subtitle>{{ game.category }}</v-card-subtitle>
                          <v-card-subtitle>
                            {{lang[langnum].TotalMarks}} : {{ game.userMark }} /
                            {{ game.totalMark }}
                          </v-card-subtitle>
                          <v-card-subtitle>
                            {{lang[langnum].Students_attend}} : {{ game.quiz.joinNumber }}
                          </v-card-subtitle>
                          <v-card-actions>
                            <v-row justify="center" class="mb-3 mt-2">
                              <v-btn @click ='JoinQuiz(game.quiz.joiningCode)'>
                                <v-icon>mdi-autorenew</v-icon>
                              </v-btn>
                            </v-row>
                          </v-card-actions>
                        </v-card>
                      </v-row>
                    </v-row>
                    <v-row justify="center">
                      <div class="text-center">
                        <v-row justify="center" class="mt-4">
                          <v-btn
                            :disabled="StartIndex === true"
                            fab
                            x-small
                            @click="previous"
                            color="secondary"
                          >
                            <v-icon>mdi-arrow-left</v-icon>
                          </v-btn>
                          <h7 class="mx-6 mt-2">{{ page }}</h7>
                          <v-btn
                            :disabled="EndIndex === true"
                            fab
                            x-small
                            @click="next"
                            color="secondary"
                          >
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-row>
                      </div>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="py-4 elevation-0">
                <v-card-text>
                  <v-form ref="loginForm" v-model="valid" class="pb-5">
                    <v-row align="center" justify="center">
                      <v-card
                        v-for="game in quizzes.results"
                        :key="game.Subject"
                        class="mx-20 my-12"
                        max-width="344"
                      >
                        <v-card-title>
                          {{ game.title }}
                        </v-card-title>
                        <v-card-subtitle>{{ game.category }}</v-card-subtitle>
                        <v-card-subtitle>
                          <v-row justify = 'center'>
                            {{lang[langnum].JoinCode}} <br> {{ game.joiningCode }}
                          </v-row>
                        </v-card-subtitle>
                        <v-card-subtitle>
                           {{lang[langnum].Students_attend}} : {{ game.joinNumber }}
                        </v-card-subtitle>
                        <v-card-actions>
                          <v-row justify="center" class="mb-3 mt-2">
                            <v-btn
                              @click="deleteQuiz(game.joiningCode)"
                              color="red"
                              fab
                              text
                            >
                              <v-icon>mdi-bucket</v-icon>
                            </v-btn>
                          </v-row>
                        </v-card-actions>
                      </v-card>
                    </v-row>
                    <v-row justify="center">
                      <div class="text-center">
                        <v-row justify="center" class="mt-4">
                          <v-btn
                            :disabled="StartIndex === true"
                            fab
                            x-small
                            @click="previous"
                            color="secondary"
                          >
                            <v-icon>mdi-arrow-left</v-icon>
                          </v-btn>
                          <h7 class="mx-6 mt-2">{{ page }}</h7>
                          <v-btn
                            :disabled="EndIndex === true"
                            fab
                            x-small
                            @click="next"
                            color="secondary"
                          >
                            <v-icon>mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-row>
                      </div>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>

          <v-card-actions class="justify-center">
            <v-btn text color="primary" to="/mainpage">{{lang[langnum].To_main_page}}</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </template>
  </v-main>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed : 
{
...mapState([ 'lang']),
},
  data: () => ({
    user: {},
    games: {},
    langnum:0,
    page: 1,
    quizzes: {},
    dialog: false,
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
    dia: false,
    EndIndex: false,
    StartIndex: true,
  }),
  async created() {
    try {
      const ar = localStorage.getItem("lang")
      this.langnum = ar
      const accesstoken = localStorage.getItem("accesstoken");
      const res = await axios({
        url: `http://localhost:9000/user/profile?page=1&limit=3`,
        headers: {
          Authorization: `Bearer ` + accesstoken,
        },
        method: "GET",
      });

      this.user = res.data.user;
      this.games = res.data.Joinedquiz;
      this.quizzes = res.data.quiz;
      console.log(this.games.results);
      if (res.data.Joinedquiz.next == undefined) {
        this.EndIndex = true;
      }
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async deleteQuiz(joiningID) {
      const joiningCode = joiningID;
      try {
        const accesstoken = localStorage.getItem('accesstoken')
        const res = await axios({
           url: `http://localhost:9000/delete/quiz/` + joiningCode,
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
          method: "POST",
        });
        this.$router.go()
      } catch (e) {
        console.log(e)
      }
    },
    async JoinQuiz(joiningCode) {
      this.$store.commit("joinroom", joiningCode);
      this.$router.push("/play");
    },
    async next() {
      if (!this.EndIndex) {
        this.page += 1;
        try {
          const accesstoken = localStorage.getItem("accesstoken");
          const res = await axios({
            url:
              `http://localhost:9000/user/profile?page=` +
              this.page +
              `&limit=3`,
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
            method: "GET",
          });
          this.games = res.data.Joinedquiz;
          if (res.data.Joinedquiz.next == undefined) {
            this.EndIndex = true;
          }
          this.StartIndex = false;
        } catch (e) {
          console.log(e);
        }
      }
    },
    async previous() {
      if (!this.StartIndex) {
        this.page -= 1;

        try {
          const accesstoken = localStorage.getItem("accesstoken");
          const res = await axios({
            url:
              `http://localhost:9000/user/profile?page=` +
              this.page +
              `&limit=3`,
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
            method: "GET",
          });
          this.games = res.data.Joinedquiz;
          if (res.data.Joinedquiz.previous == undefined) {
            this.StartIndex = true;
          }
          this.EndIndex = false;
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>

<style>
.px-20 {
  padding-left: 8rem !important;
  padding-right: 8rem !important;
}
.body {
  background-image: linear-gradient(#d1d4f8, white) !important;
}
</style>
