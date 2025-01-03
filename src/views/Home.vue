<script setup lang="ts">

import { ref } from 'vue';
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

const translateX = ref(0);

setInterval(() => {
  if (translateX.value <= -100) {
    translateX.value = 0;
  } else {
    translateX.value -= 2;
  }
}, 100);



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
