<template>
  <main>
    <v-card-text style="height: 200px; position: relative">
      <v-speed-dial
        v-model="fab"
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
        fixed
        class="mb-12"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="card text--text" dark fab >
            <v-icon v-if="fab"> mdi-chevron-down </v-icon>
            <v-icon v-else> mdi-chevron-up </v-icon>
          </v-btn>
        </template>
        <v-btn fab dark small color="secondary" to="/createq">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-col class="mr-5">
           <v-btn
                fab
                dark
                small
                color="secondary"
                to = '/profile'
              >
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            
        </v-col>
        <v-col class="mr-5 mb-n5">
           <v-btn
                fab
                dark
                small
                color="secondary"
                @click ='logOut'
              >
                <v-icon>mdi-export</v-icon>
              </v-btn>
            
        </v-col>
      </v-speed-dial>
    </v-card-text>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  
  data: () => ({
    user : {},
    games: [],
   
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
  }),
  methods: {
    toggleprofile() {
      this.profile  = true
    },
    logOut(){
    localStorage.removeItem('accesstoken')
    localStorage.removeItem('refreshtoken')
    this.$router.push('/')
  },
  },
  
    async created() {
      try {
        const accesstoken = localStorage.getItem('accesstoken')
        const res = await axios({
          url: `http://localhost:9000/user/profile`,
           headers: {
            Authorization: `Bearer ` + accesstoken,
          },
          method: "GET",
        });

      this.user = res.data.user
      this.games = res.data.Joinedquiz
      console.log(this.games)
      console.log(this.user)
      } catch (e) {
        console.log(e);
      }
    },
};

</script>

<style></style>
