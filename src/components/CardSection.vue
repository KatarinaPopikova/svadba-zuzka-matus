<template>
  <div>
    <section>
      <FixedBgDiv :bg-start-position="bgStartPosition" />
      <div class="bg-[#222] py-9 w-screen">
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
  components: { FixedBgDiv, ImageCard },
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
    };
  },
});

import json from "@/assets/json/card-data.json";
import FixedBgDiv from "@/components/FixedBgDiv.vue";
</script>

<style scoped></style>
