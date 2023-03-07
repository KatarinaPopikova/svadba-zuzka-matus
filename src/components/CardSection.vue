<template>
  <div>
    <div
      class="fixed w-screen h-screen bg-cover bg-center bg-no-repeat -z-10"
      :style="`background-image: url(${bgImg.url}); background-position: ${bgImg.bg_x}% ${bgImg.bg_y}%`"
    ></div>
    <section>
      <div class="h-[100vh] flex justify-between items-center">
        <div @click="moveUp">
          <img class="icon" src="@/assets/img/left.png" alt="left arrow icon" />
        </div>
        <div @click="moveDown">
          <img
            class="icon"
            src="@/assets/img/next.png"
            alt="right arrow icon"
          />
        </div>
      </div>
      <div class="bg-[#222] py-9">
        <ImageCard
          v-for="(card, index) in cardsData['card'].slice(
            cardRange[0],
            cardRange[1]
          )"
          :card-data="card"
          :key="index"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageCard from "@/components/ImageCard.vue";
export default defineComponent({
  name: "CardSection",
  components: { ImageCard },
  props: {
    cardRange: {
      type: Array,
    },
    bgStartPosition: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cardsData: json,
      bgImg: { url: "", bg_x: 0, bg_y: 0 },
      index: 0,
      bgJson: json["bg"],
      bgLength: 0,
    };
  },
  mounted() {
    this.bgImg = json["bg"][this.bgStartPosition];
    this.index = this.bgStartPosition;
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

import json from "@/assets/json/card-data.json";
</script>

<style scoped>
.icon {
  filter: invert(100%);
  @apply sm:h-16 hover:cursor-pointer h-10;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
