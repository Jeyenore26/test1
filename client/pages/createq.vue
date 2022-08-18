<template>
  <main>
    <createqnav/>
    <createq/>
    <slide/>
  </main>
</template>

<script>
import Createqnav from '~/components/createqnav.vue'
export default {
  middleware: 'auth',
  components: {  Createqnav },

}
</script>

<style>

</style>