<template>
  <div class="h-[100vh] flex justify-between items-center">
    <div @click="moveUp">
      <img class="icon" src="@/assets/img/left.png" alt="left arrow icon" />
    </div>
    <div @click="moveDown">
      <img class="icon" src="@/assets/img/next.png" alt="right arrow icon" />
    </div>
  </div>
</template>

<script lang="ts">
import json from "@/assets/json/card-data.json";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FixedBgDiv",
  props: {
    bgStartPosition: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cardsData: json,
      index: 0,
      bgJson: json["bg"],
      bgLength: 0,
      isInView: false,
    };
  },
  watch: {
    isInView(newQuestion) {
      if (newQuestion === true) {
        this.sendBgImg(this.index);
      }
    },
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      this.isInView = isIntersecting;
    });
    observer.observe(this.$el);

    this.sendBgImg(this.bgStartPosition);
    this.index = this.bgStartPosition;
    this.bgLength = this.bgJson.length;
  },
  methods: {
    sendBgImg(index: number) {
      this.$parent?.$emit("bg", json["bg"][index]);
    },
    moveUp() {
      this.index = (this.index - 1 + this.bgLength) % this.bgLength;
      this.sendBgImg(this.index);
    },

    moveDown() {
      this.index = (this.index + 1) % this.bgLength;
      this.sendBgImg(this.index);
    },
  },
});
</script>

<style scoped>
.icon {
  filter: invert(100%);
  @apply sm:h-16 hover:cursor-pointer h-10;
}
</style>
