<template>
  <main>
    <navbar/>
    <mainpage/>
    <mainfooter/>
  </main>
</template>

<script>


import Mainfooter from '../components/mainfooter.vue'
import mainpage from '../components/mainpage.vue'
import Navbar from '../components/navbar.vue'
export default {
  middleware: 'auth',
  components: { mainpage, Mainfooter },

}
</script>

<style>


</style>