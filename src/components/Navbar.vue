<script setup lang="ts">

defineProps(['title'])

</script>

<template>

  <div class="navWrap">
    <div class="navbar">
      <RouterLink to="/"><div class="navItem">HOME</div></RouterLink>
      <RouterLink to="/about"><div class="navItem">ABOUT</div></RouterLink>
      <RouterLink to="/contact"><div class="navItem">CONTACT</div></RouterLink>
    </div>
    <div v-if="title" class="appTitle">{{title}}</div>
  </div>

</template>

<style scoped>

.navWrap{
  display: flex;
  flex-direction: column;
}

.navbar{
  display: flex;
  justify-content: space-between;
  margin: 1vh;
}

.navItem{
  cursor: pointer;
}

a{
  color: black;
  text-decoration: none;
}

.appTitle{
  text-align: center;
  font-size: 18vw;
  width: 100%;
  font-family: "Montserrat Underline", serif;
}

</style>
