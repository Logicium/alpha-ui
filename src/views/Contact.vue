<script setup lang="ts">

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="contact">
    <Navbar/>
    <div class="contactInfo">
      <div class="contactText">{{"Connect with Us".toUpperCase()}}</div>
      <div class="contactTextSmall">
        <div>+1 720 010 0101</div>
        <div>sales@alphaindustries.co</div>
        <div>256 1st Street, Trinidad, CO 81082</div>
      </div>
      <div class="appIcon"></div>
    </div>

    <Footer :images="true"/>
  </div>

</template>

<style scoped>

.contact{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.contactInfo{
  display: flex;
  font-size: 8vw;
  flex-direction: column;
  text-align: center;
}

.contactTextSmall{
  margin-top: 4vw;
  font-size: 3vw;
  font-weight: 500;
  font-style: italic;
}

.appIcon{
  margin-top: 4vw;
  background-image: url("../../assets/alpha-icon.svg");
  align-self: center;
  height: 8vw;
  width: 8vw;
  background-size: cover;
  z-index: 10;
}

</style>
