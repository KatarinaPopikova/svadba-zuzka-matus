<template>
  <div>
    <div
      class="fixed w-screen h-screen bg-cover bg-center bg-no-repeat -z-20"
      :style="`background-image: url(${bgImg.url}); background-position: ${bgImg.bg_x}% ${bgImg.bg_y}%`"
    ></div>
    <CardSection @bg="saveBgImg" :bg-start-position="0" :card-range="[0, 3]" />
    <CardSection @bg="saveBgImg" :bg-start-position="1" :card-range="[3, 6]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardSection from "@/components/CardSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CardSection,
  },
  data() {
    return {
      bgImg: { url: "", bg_x: 0, bg_y: 0 },
    };
  },
  methods: {
    saveBgImg(bgImg: { url: string; bg_x: number; bg_y: number }) {
      this.bgImg = bgImg;
    },
  },
});
</script>

<style scoped></style>
