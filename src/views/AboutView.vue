<template>
  <div class="about">
    <Navbar/>
    <div class="aboutTitle">{{"We Create Modern Digital Experiences".toUpperCase()}}</div>
    <div class="aboutRow">
      <div class="aboutImg"></div>
      <div class="aboutText">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="aboutItems">
          <div class="item active"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.about {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.aboutTitle{
  width: 70%;
  align-self: center;
  text-align: center;
  font-size: 7vw;
}

.aboutRow{
  display: flex;
  justify-content: space-between;
  margin: 2vw;
}

.aboutItems{
  display: flex;
  width: 100%;
  margin-top: 2vw;
}

.item{
  margin-right: 1vw;
  border-bottom: 2px solid black;
  width: 100%;
  cursor: pointer;
}

.item.active{
  border-bottom: 4px solid black;
}

.aboutText{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 30vh;
  width: 50%;
}

.aboutImg{
  width: 40%;
  height: 100%;
  background-image: url("../../assets/arch1.jpg");
  background-size: cover;
  background-position: 100% 100%;
}

@media (min-width: 1024px) {

}
</style>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
</script>
