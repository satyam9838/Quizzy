<template>
  <navbar/>
  <banner/>
  <services/>
  <statistics/>
  <team/>
  <testimonial/>
  <upcoming/>
  <contactUs/>
  <Futer/>

</template>

<script>
import navbar from '../components/navbar.vue';
import banner from './banner.vue';
import middle from './middle.vue';
import services from './services.vue';
import statistics from './statistics.vue';
import team from './team.vue';
import testimonial from './testimonial.vue';
import upcoming from './upcoming.vue';
import contactUs from './contactUs.vue';
import Futer from '../components/Footer.vue';
export default {
    name:'home',

    components:{
      navbar,
      banner,
      services,
      statistics,
      team,
      testimonial,
      upcoming,
      contactUs,
      Futer
    }
}
</script>


<style>








</style>
