<template>
  <main v-if="show">
    <v-footer
    
      color="bg"
      padless
      class="mt-12 hidden-sm-and-down"
      :class="{
        'mx-120': $vuetify.breakpoint.mdAndUp,
        'mx-16': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-row>
        <v-row>
          <v-col>
            <v-card class="pa-2 elevation-0" color="bg">
              <v-row class="mt-4 ml-1">
                <v-img
                  max-height="100"
                  max-width="80"
                  :src="require('~/assets/LOGO3.png')"
                />
                <h1
                  class="mr-3 font-weight-black mt-2 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
                  color="text"
                >
                  TestZone
                </h1>
              </v-row>
              <h3
                class="mt-5 ml-6 font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
              >
                {{ lang[langnum].Welcome_to_Kaboot }} <br />
                {{ lang[langnum].Have_fun_using_our_website }}<br />
                {{
                  lang[langnum].If_you_face_any_problem_dont_hesitate_to_mail_us
                }}
              </h3>
            </v-card>
          </v-col>
          <v-col order="1">
            <v-card class="pa-2 mb-6 elevation-0" color="bg">
              <v-row class="mt-6 ml-2">
                <p
                  class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
                >
                  {{ lang[langnum].Links }}
                </p>
              </v-row>
              <v-row class="mt-3 py-2">
                 <v-btn @click="scrolltoup" class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2" text><p>{{lang[langnum].Home}}</p></v-btn>
              </v-row>
              <v-row class="mt-3 py-2">
                 <v-btn class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2" text><p>{{lang[langnum].Blog}}</p></v-btn>
              </v-row>
              <v-row class="mt-3">
                <v-btn
                                              @click="scrolltoplay"

              class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2" text><p>{{lang[langnum].Play}}</p></v-btn>
              </v-row>

            </v-card>
          </v-col>
          <v-col order="3">
            <v-card class="pa-2 elevation-0" color="bg">
              <v-row class="mt-6">
                <h2
                  class="font-weight-bold mr-12 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
                >
                  {{ lang[langnum].Info }}
                </h2>
              </v-row>
              <v-row class="mt-6">
                <v-icon class="ml-1">mdi-at</v-icon>
                <h3
                  class="font-weight-regular ml-1 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
                >
                  synjatteam@gmail.com
                </h3>
              </v-row>
              <v-row class="mt-6">
                <v-icon class="ml-1">mdi-home-account</v-icon>
                <h3
                  class="font-weight-regular ml-1 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
                >
                  new damiata
                </h3>
              </v-row>
              <v-row class="mt-6">
                <v-icon class="ml-1">mdi-phone</v-icon>
                <h3
                  class="font-weight-regular ml-1 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
                >
                  01129885260
                </h3>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-footer>
    <v-footer
      color="bg"
      padless
      class="mt-12 hidden-md-and-up"
      :class="{
        'mx-120': $vuetify.breakpoint.mdAndUp,
        'mx-16': $vuetify.breakpoint.smAndDown,
      }"
    >
      <v-row justify="center">
        <v-card class="pa-2 elevation-0">
          <v-row class="mt-4 ml-1">
            <v-img
              max-height="100"
              max-width="80"
              :src="require('~/assets/LOGO3.png')"
            />
            <h1
              class="mr-3 font-weight-black mt-2 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
              color="text"
            >
              TestZone
            </h1>
          </v-row>
          <h3
            class="mt-5 ml-6 font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
          >
            {{ lang[langnum].Welcome_to_Kaboot }} <br />
            {{ lang[langnum].Have_fun_using_our_website }}<br />
            {{ lang[langnum].If_you_face_any_problem_dont_hesitate_to_mail_us }}
          </h3>
        </v-card>
      </v-row>
      <v-row class="my-8 mx-8">
        <v-card class="pa-2 elevation-0">
         <v-row class="ml-5">
           <p
            class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
          >
            {{ lang[langnum].Links }}
          </p>
         </v-row>
         <v-row class="py-2">
                                <v-btn 
                                @click="scrolltoup"
                                class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2" text>{{lang[langnum].Home}}</v-btn>

                </v-row>
                <v-row class="py-2">
                  <v-btn class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2" text>{{lang[langnum].Blog}}</v-btn>

                </v-row>
                <v-row class="py-2">
                                <v-btn
                                @click="scrolltoplay"
                                class="font-weight-regular text-lg-h6 text-md-h6 text-sm-h6 subtitle-2" text>{{lang[langnum].Play}}</v-btn>

                </v-row>
        </v-card>
      </v-row>

      <v-row class="my-8" justify="center">
        <v-card class="pa-2 elevation-0">
          <v-row class="mt-6">
            <h2
              class="font-weight-bold mr-12 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
            >
              {{ lang[langnum].Info }}
            </h2>
          </v-row>
          <v-row class="mt-6">
            <v-icon class="ml-1">mdi-at</v-icon>
            <h3
              class="font-weight-regular ml-1 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
            >
              synjatteam@gmail.com
            </h3>
          </v-row>
          <v-row class="mt-6">
            <v-icon class="ml-1">mdi-home-account</v-icon>
            <h3
              class="font-weight-regular ml-1 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
            >
              new damiata
            </h3>
          </v-row>
          <v-row class="mt-6">
            <v-icon class="ml-1">mdi-phone</v-icon>
            <h3
              class="font-weight-regular ml-1 text-lg-h6 text-md-h6 text-sm-h6 subtitle-2"
            >
              01129885260
            </h3>
          </v-row>
        </v-card>
      </v-row>
    </v-footer>
    <v-divider></v-divider>
    <v-col class="bg lighten-2 text-center" cols="12">
      <v-row
        :class="{
          'mx-200': $vuetify.breakpoint.mdAndUp,
          'mx-1': $vuetify.breakpoint.smAndDown,
        }"
      >
        <div class="text-start mr-12 ml-12">
          <v-btn
            v-for="(b, i) in sm"
            :key="[i]"
            color="bg"
            class="mr-5 ml-5"
            fab
            depressed
          >
            <v-icon>{{ b.icon }}</v-icon>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <h3 class="mt-4">© {{ lang[langnum].All_Rights_Reserved }}</h3>
      </v-row>
    </v-col>
  </main>
</template>
<script>
import { mapState } from "vuex";

export default {
  mounted (){
    this.showtoggle()
  },
  methods : {
        showtoggle(){
          setTimeout(() => {
            this.show = true
          }, 2500);
        },
        scrolltoup(){
                    window.scrollTo({
                      top: 0,
                      behavior:'smooth'
                    })

        },
        scrolltoplay(){
          window.scrollTo({
                    top:1300,
                    behavior:'smooth'
                  })
        }
      },
  async created() {
    try {
      const ar = localStorage.getItem("lang");
      this.langnum = ar;
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    ...mapState(["lang", "langnum"]),
  },
  data: () => ({
    show : false,
    langnum: 0,
    group: null,
    model: "caption",
    sizes: [
      ["mdi-devices", "all", "caption"],
      ["mdi-cellphone", "sm", "h5"],
      ["mdi-laptop", "md", "h4"],
      ["mdi-monitor", "lg", "h3"],
      ["mdi-television", "xl", "h2"],
    ],

    links: ["Home", "Blog", "Play", "Explore"],
    sm: [
      {
        icon: "mdi-facebook",
        link: "#",
      },
      {
        icon: "mdi-twitter",
        link: "#",
      },
      {
        icon: "mdi-gmail",
        link: "#",
      },
      {
        icon: "mdi-instagram",
        link: "#",
      },
    ],
  }),
};
</script>

<style>
.mx-120 {
  margin-left: 8rem;
  margin-right: 8rem;
}
.mx-200 {
  margin-left: 4rem;
  margin-right: 16rem;
}
</style>
