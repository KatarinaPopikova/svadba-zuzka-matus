<template>
  <div
    class="relative bg-cover bg-center bg-fixed bg-no-repeat -z-10"
    :style="`background-image: url(${bgImg.url}); background-position: ${bgImg.bg_x}% ${bgImg.bg_y}%`"
  >
    <CardSection @before="moveDown" @after="moveUp" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardSection from "@/components/CardSection.vue";
import json from "@/assets/json/card-data.json";

export default defineComponent({
  name: "HomeView",
  components: {
    CardSection,
  },
  data() {
    return {
      bgJson: json["bg"],
      bgImg: { url: "", bg_x: 0, bg_y: 0 },
      index: 0,
      bgLength: 0,
    };
  },
  mounted() {
    this.loadBg();
    this.bgLength = this.bgJson.length;
  },
  methods: {
    moveUp() {
      this.index = (this.index - 1 + this.bgLength) % this.bgLength;
      this.loadBg();
    },

    moveDown() {
      this.index = (this.index + 1) % this.bgLength;
      this.loadBg();
    },
    loadBg() {
      this.bgImg = this.bgJson[this.index];
    },
  },
});
</script>

<style scoped></style>
