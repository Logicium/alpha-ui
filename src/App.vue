<script setup lang="ts">

import { ref } from 'vue';

let translateX = ref(0);

setInterval(() => {
  if (translateX.value <= -100) {
    translateX.value = 0;
  } else {
    translateX.value -= 2;
  }
}, 100);

</script>

<template>
  <div class="webapp">

    <RouterView/>

  </div>
</template>

<style scoped>

@keyframes colorChange {
   0% { background-color: #3578f4; }
   33% { background-color: #02a88e; }
   66% { background-color: #5d24ff; }
   100% { background-color: #3578f4; }
}

.webapp{
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  font-weight: 500;
  background-color: #3578f4;
  animation: colorChange 10s infinite;
}

@media (min-width: 1024px) {
}

</style>
