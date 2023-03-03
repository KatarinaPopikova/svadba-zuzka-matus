<template>
  <section>
    <div class="h-[100vh] flex justify-between items-center">
      <div @click="beforeImg">
        <img class="icon" src="@/assets/img/left.png" alt="left arrow icon" />
      </div>
      <div @click="afterImg">
        <img class="icon" src="@/assets/img/next.png" alt="right arrow icon" />
      </div>
    </div>
    <div class="bg-[#222] py-9">
      <ImageCard
        v-for="(card, index) in cardsData['card'].slice(0, 3)"
        :card-data="card"
        :key="index"
      />
    </div>
  </section>
  <div
    class="relative bg-cover bg-center bg-fixed bg-no-repeat"
    :style="`background-image: url(${bgImg.url}); background-position: ${bgImg.bg_x}% ${bgImg.bg_y}%`"
  >
    <section class="pt-[100vh]">
      <div class="bg-[#222] py-12">
        <ImageCard
          v-for="(card, index) in cardsData['card'].slice(3)"
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
import json from "@/assets/json/card-data.json";

export default defineComponent({
  name: "CardSection",
  components: { ImageCard },
  data() {
    return {
      cardsData: json,
      bgImg: { url: "", bg_x: 0, bg_y: 0 },
      index: 0,
    };
  },
  mounted() {
    this.bgImg = json["bg"][1];
  },
  methods: {
    //make GLOBAL EMIT
    beforeImg() {
      this.$emit("before");
      console.log("aa");
    },
    afterImg() {
      this.$emit("after");
      console.log("bb");
    },
  },
});
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
