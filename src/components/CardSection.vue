<template>
  <section class="pt-[100vh]">
    <div class="bg-[#222] py-9">
      <ImageCard
        v-for="(card, index) in cardsData['card']"
        :card-data="card"
        :key="index"
      />
    </div>
  </section>
  <div id="bg2">
    <section class="pt-[100vh]">
      <div class="bg-[#222] py-12">
        <ImageCard
          v-for="(card, index) in cardsData['card']"
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
    };
  },
});
</script>

<style scoped>
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

#bg2 {
  position: relative;
  background-image: url("@/assets/img/bg3.png");
  background-size: cover;
  background-position: center 20%;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
</style>
