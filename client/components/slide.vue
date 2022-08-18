<template>
  <main>
    <h1></h1>
    <v-window
      show-arrows
      :class="{
        'mt-120': $vuetify.breakpoint.mdAndUp,
        'mt-16': $vuetify.breakpoint.smAndDown,
      }"
    >
      <template v-slot:prev="{ on, attrs }" class="mt-12">
        <v-btn color="secondary" v-bind="attrs" v-on="on">
          <v-icon> mdi-chevron-left</v-icon>
        </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="secondary" v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>

      <v-window-item v-for="slide in history" :key="slide">
        <v-row justify="center" class="pt-5">
          <v-btn
            color="error"
            v-bind="attrs"
            v-on="on"
            fab
            small
            @click="removeslide"
          >
            <v-icon> mdi-close</v-icon>
          </v-btn>
        </v-row>

        <v-card color="bg" height="200" class="border-homar mt-12 mb-20">
          <v-card class="elevation-0" color="bg">
            <v-row class="fill-height" align="center" justify="center">
              <h1 style="font-size: 2rem" class="text--text">
                {{ slide.description }}
              </h1>
            </v-row>
            <v-row class="fill-height" align="center" justify="center">
              <v-btn
                class="px-16 py-12 my-5 mx-4"
                outlined
                color="primary"
                disabled
              >
                <v-icon class="mr-2">mdi-cards-heart</v-icon>
                <v-text-field
                  v-model="slide.answers[0].content"
                  label="answer one"
                  class="mx-6"
                ></v-text-field>
                <v-checkbox v-model="slide.answers[0].CW"></v-checkbox>
              </v-btn>
              <v-btn
                class="px-16 py-12 my-5 mx-4"
                outlined
                color="primary"
                disabled
              >
                <v-icon class="mr-2">mdi-cards-diamond</v-icon>
                <v-text-field
                  v-model="slide.answers[1].content"
                  label="answer two"
                  class="mx-6"
                ></v-text-field>
                <v-checkbox v-model="slide.answers[1].CW"></v-checkbox>
              </v-btn>
            </v-row>
            <v-row class="fill-height" align="center" justify="center">
              <v-btn
                class="px-16 py-12 my-5 mx-4"
                outlined
                color="primary"
                disabled
              >
                <v-icon class="mr-2">mdi-checkbox-blank-outline</v-icon>
                <v-text-field
                  v-model="slide.answers[2].content"
                  label="answer three"
                  class="mx-6"
                ></v-text-field>
                <v-checkbox v-model="slide.answers[2].CW"></v-checkbox>
              </v-btn>
              <v-btn
                class="px-16 py-12 my-5 mx-4"
                outlined
                color="primary"
                disabled
              >
                <v-icon class="mr-2">mdi-hexagon-outline</v-icon>
                <v-text-field
                  v-model="slide.answers[3].content"
                  label="answer four"
                  class="mx-6"
                ></v-text-field>
                <v-checkbox v-model="slide.answers[3].CW"></v-checkbox>
              </v-btn>
            </v-row>
          </v-card>
        </v-card>
      </v-window-item>
    </v-window>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    removeslide() {
      this.$store.commit("remove_slide", this.slide);
    },
  },

  computed: {
    ...mapState(["history"]),
  },
  data: () => ({
    model: null,
  }),
  created() {
   this.$store.commit('reset' , this.slide)
    
  },
};
</script>

<style>
.mb-20 {
  margin-bottom: 130px;
}
.mt-120 {
  margin-top: 100px;
}
</style>
