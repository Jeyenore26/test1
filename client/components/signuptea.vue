<template>
        <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-row justify="center">
        <v-toolbar-title class="text--text">
          <v-img
            max-height="100"
            max-width="80"
            class="mx-auto mt-4 mb-n12"
            :src="require('~/assets/LOGO3.png')"
          />
          <v-row class="py-16 mb-12 px-5" justify="center">
            <h4 class="font-weight-regular" color="text--text ">
              {{lang[langnum].teacher}}
            </h4>
          </v-row>
        </v-toolbar-title>
        <v-tabs
          v-model="tab"
          show-arrows
          icons-and-text
          dark
          grow
          class="mx-16 mb-10"
        >
          <v-tabs-slider color="bg"></v-tabs-slider>

          <v-tab>{{lang[langnum].signup}}</v-tab>
          <v-tab>{{lang[langnum].login}}</v-tab>
          <v-tab-item class="py-8 elevation-0">
            <v-card class=" py-8 elevation-0">
              <v-card-text>
                <v-form  v-model="signup">
                  <v-row>
                    <v-col cols="12">
                      <v-row class="py-2 px-5">
                        <v-icon class="mx-4"> mdi-account-box-outline </v-icon>

                        <v-text-field
                          v-model="name"
                          label="Name"
                          type="text"
                          class="mr-6"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                      <v-row class="py-2 px-5">
                        <v-icon class="mx-4"> mdi-gmail </v-icon>
                        <v-text-field
                          v-model="email"
                          label="Email"
                          type="email"
                          class="mr-6"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
                    <v-col cols="12">
                      <v-row class="py-1 mt-n7 px-5 mb-8">
                        <v-icon class="mx-4"> mdi-server-security </v-icon>
                        <v-text-field
                          id="password"
                          v-model="password"
                          label="Password"
                          type="password"
                          class="mr-6"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="secondary"
                      justify="centers"
                      class="mx-auto mb-4"
                      block
                      @click="SubmitData"
                      >{{lang[langnum].signup}}</v-btn
                    >
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form v-model="valid">
                  <v-row>
                    <v-col cols="12">
                      <v-row class="py-2 px-5">
                        <v-icon class="mx-4"> mdi-box </v-icon>
                        <v-text-field
                        v-model = 'loginname'
                          label="name"
                          type="name"
                          class="mr-6"
                        ></v-text-field>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                      <v-row class="py-2 px-5">
                        <v-icon class="mx-4"> mdi-server-security </v-icon>
                        <v-text-field
                                                v-model = 'loginpass'

                          label="password"
                          type="password"
                          class="mr-6"
                        ></v-text-field>
                      </v-row>
                    </v-col>

                    <v-btn
                      color="secondary"
                      class="mx-auto mb-4"
                      block
                      @click="Login"
                      >{{lang[langnum].login}}</v-btn
                    >
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </v-flex>
    <v-snackbar v-model ='snackbar'>
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
  </v-layout>
</template>

<script>  
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  computed: {
...mapState(['lang'])
  },
  data : () => {
    tabs: [
        {name:"Login", },
        {name:"Register",}
    ]
  },
    data(){
      return {
        loginname:null,
        loginpass:null,
        text:'',
        snackbar:false,
        valid : false,
        email:null,
        name:null,
        password:null,
        langnum:0,
      }
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
    methods: {
    async SubmitData() {
      try {
        const res = await axios({
          url: `http://localhost:9000/register/tea`,
          data: {
            name: this.name,
            email: this.email,
            password: this.password,
            passwordConfirm: this.password,
          },
          method: "POST",
        });
        console.log("11");
        localStorage.setItem("accesstoken", res.data.accesstoken);
        localStorage.setItem("refreshtoken", res.data.refreshToken);
        this.$router.push("/mainpage");
        
      } catch (e) {
        this.snackbar = true
        this.text = e.response.data.msg
        console.log(e.response.data.msg)
      }
    },
    async Login(){
       try{
      const res = await axios({
        url:'http://localhost:9000/sign/login',
        method: 'POST',
        data: {
            name:this.loginname,
            password:this.loginpass
        }
      })
     
        localStorage.setItem("accesstoken", res.data.accesstoken);
          localStorage.setItem("refreshtoken", res.data.refreshToken);
          this.$router.push("/mainpage");
        
      }
      catch (e) {
        this.snackbar = true;
        this.text = e.response.data.msg;
        console.log(e.response.data.msg);
      }
    }
  },
}
</script>
<style>
.py-120{
  padding-top: 8rem;
    padding-bottom: 8rem;

}
</style>