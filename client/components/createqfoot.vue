<template>
  <v-main>
    <div>
    
  </div>
  </v-main>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed : 
{
...mapState(['history','lang','langnum']),
},
    data (){
        return{
            dialog: false,   
            items: ['Math', 'Science', 'Language', 'Computer'], 
            slides : {
          title:'',
          description:'',
          answers: [
            {
              content:"",
              CW: ''
            },
            {
              content:"",
              CW: ''
            },
            {
              content:"",
              CW: ''
            },
            {
              content:"",
              CW: ''
            }
          ]
        } 
      };
    }
}
</script>

<style>

</style>