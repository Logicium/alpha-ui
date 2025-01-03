<script setup lang="ts">

import { ref } from 'vue';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <Navbar title="ALPHA"/>

  <div class="appIcon"/>

  <Footer :images="true"/>


</template>

<style scoped>

.appIcon{
  background-image: url("../../assets/alpha-icon.svg");
  align-self: center;
  height: 8vw;
  width: 8vw;
  background-size: cover;
  z-index: 10;
}



</style>
