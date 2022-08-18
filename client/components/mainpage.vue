<template>
  <main
    :class="{
      'mx-120': $vuetify.breakpoint.mdAndUp,
      'mx-2': $vuetify.breakpoint.smAndDown,
    }"
  >
    <v-row class="mt-12 game" align="center" justify="center">
      <v-card
        v-for="game in games"
        :key="game.Subject"
        class="mx-20 my-12 elevation-6"
        max-width="344"
      >
       <v-img
          :src="require('~/assets/shutterstock_749071444.jpg')"
        />
        <v-row justify="center">
          <v-card-title>
            {{ game.title }}
          </v-card-title>
        </v-row>
        <v-row justify="center">
          <v-card-subtitle>
            <h3 class="mb-n3"><v-row justify = 'center'>
              {{ lang[langnum].Quiz_category }}
            </v-row></h3>
            <br />
           <v-row justify = 'center'>
             {{ game.category }}
           </v-row>
          </v-card-subtitle>
        </v-row>
        <v-row justify="center">
          <v-card-subtitle>
            <h3 class="mt-n4"><v-row justify = "center">{{ lang[langnum].Students_attend }}</v-row></h3>
            <br />
            <v-row justify="center">{{ game.joinNumber }}</v-row>
          </v-card-subtitle>
        </v-row>
        <v-row justify="center">
          <v-card-subtitle>
            <h3 class="mt-n4">
              {{lang[langnum].JoinCode}}
            </h3>
            <br />
            <v-row justify="center">{{ game.joiningCode }}</v-row>
          </v-card-subtitle>
        </v-row>
        <v-card-actions>
          <v-row justify="center" class="py-4">
            <v-btn
              color="orange lighten-2 "
              text
              @click="JoinQuiz(game.joiningCode)"
            >
              {{ lang[langnum].Play }}
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-row>
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
    <v-bottom-navigation
      v-model="value"
      :background-color="color"
      dark
      fixed
      shift
    >
      <v-btn @click="Filter('Language')">
        <span color=" bg--text">{{ lang[langnum].language }}</span>

        <v-icon>mdi-alphabetical</v-icon>
      </v-btn>
      <v-btn @click="Filter('Computer')">
        <span color=" bg--text">{{ lang[langnum].Computer }}</span>

        <v-icon>mdi-language-javascript</v-icon>
      </v-btn>
      <v-btn @click="Filter('None')">
        <span color=" bg--text">{{ lang[langnum].All }}</span>
        <v-icon color="bg">mdi-bucket</v-icon>
      </v-btn>

      <v-btn @click="Filter('Math')">
        <span color=" bg--text">{{ lang[langnum].Math }}</span>

        <v-icon>mdi-sigma</v-icon>
      </v-btn>

      <v-btn @click="Filter('Science')">
        <span color=" bg--text">{{ lang[langnum].Science }}</span>

        <v-icon>mdi-flask</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </main>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data: () => ({
    langnum: 0,
  }),
  computed: {
    ...mapState(["lang"]),

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
  async created() {
    this.page = 1;
    try {
      const ar = localStorage.getItem("lang");
      this.langnum = ar;
      const accesstoken = localStorage.getItem("accesstoken");
      const res = await axios({
        url:
          `http://localhost:9000/mainpage?page=1&limit=9&filter=` + this.filter,
        headers: {
          Authorization: `Bearer ` + accesstoken,
        },
        method: "GET",
      });
      if (res.data.quizzes.next == undefined) {
        this.EndIndex = true;
      }

      this.games = res.data.quizzes.results;
    } catch (e) {
      console.log(e);
    }
  },
  
  data() {
    return {
      filter: "None",
      dialog: false,
      value: 2,
      page: 1,
      games: [],
      EndIndex: false,
      StartIndex: true,
    };
  },

  methods: {
    async Filter(Type) {
      this.page = 1;
      this.dialog = false;
      this.filter = Type;
      try {
        const accesstoken = localStorage.getItem("accesstoken");
        const res = await axios({
          url:
            `http://localhost:9000/mainpage?page=` +
            this.page +
            `&limit=9&filter=` +
            this.filter,
          headers: {
            Authorization: `Bearer ` + accesstoken,
          },
          method: "GET",
        });
        this.games = res.data.quizzes.results;
        console.log(res.data.quizzes);
        if (res.data.quizzes.next == undefined) {
          this.EndIndex = true;
        } else {
          this.EndIndex = false;
        }
        if (res.data.quizzes.previous == undefined) {
          this.StartIndex = true;
        } else {
          this.StartIndex = false;
        }
      } catch (e) {
        console.log(e);
      }
    },
    async JoinQuiz(joiningCode) {
      this.$store.commit("joinroom", joiningCode);
      this.$router.push("/play");
    },
    async next() {
      if (!this.EndIndex) {
        console.log(11);
        this.page += 1;
        try {
          const accesstoken = localStorage.getItem("accesstoken");
          const res = await axios({
            url:
              `http://localhost:9000/mainpage?page=` +
              this.page +
              `&limit=9&filter=` +
              this.filter,
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
            method: "GET",
          });
          this.games = res.data.quizzes.results;
          if (res.data.quizzes.next == undefined) {
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
              `http://localhost:9000/mainpage?page=` +
              this.page +
              `&limit=9&filter=` +
              this.filter,
            headers: {
              Authorization: `Bearer ` + accesstoken,
            },
            method: "GET",
          });
          this.games = res.data.quizzes.results;
          if (res.data.quizzes.previous == undefined) {
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
.mb-20 {
  margin-bottom: 100px;
}
.mx-20 {
  margin-right: 50px;
  margin-left: 50px;
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
