<script setup lang="ts">

defineProps(['images']);

</script>

<template>

  <div class="footerWrap">

    <div v-if="images" class="imageRow">
      <div class="imageRow" :style="{ transform: 'translateX(' + translateX + '%)' }">
        <div class="imgWrap" v-for="i in 4" :key="i" :class="'img' + i" />
        <div class="imgWrap" v-for="i in 4" :key="i + 3" :class="'img' + i" />
      </div>
    </div>

    <div class="footer">
      <div>@ALPHA 2025</div>
      <div>ALL RIGHTS RESERVED</div>
    </div>

  </div>

</template>


<style scoped>

.footer{
  margin: 1vh;
  display: flex;
  justify-content: space-between;
}

.imgWrap{
  margin-right: 2vw;

}

.imageRow{
  margin-top: auto;
  display: flex;
  overflow-x: visible;
  animation: scroll 30s linear infinite;
}

.img1,.img2,.img3,.img4{
  background-size: cover;
  height: 20vh;
  width: 33vw;
  background-image: url("../../assets/color1.jpg");
}
.img2{
  background-image: url("../../assets/color2.avif");
}

.img3{
  background-image: url("../../assets/color3.avif");
}

.img4{
  background-image: url("../../assets/color4.avif");
}


@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

</style>
