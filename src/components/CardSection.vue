<template>
  <div>
    <FixedBgDiv :bg-start-position="bgStartPosition" />

    <section>
      <div class="bg-[#222] py-16 w-full">
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-rows-1 md:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] max-md:grid-cols-1 gap-20 mb-16"
          >
            <PersonCard
              name="Zuzka"
              :image-src="require('@/assets/img/usb/IMG_2864-Edit.jpg')"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      "
            />
            <PersonCard
              name="Matúš"
              :image-src="require('@/assets/img/usb/IMG_2850-Edit.jpg')"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industrys standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only
      "
            />
          </div>
          <ImageCard
            v-for="(card, index) in cardsData['card'].slice(
              cardRange?.[0],
              cardRange?.[1]
            )"
            :card-data="card"
            :key="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageCard from "@/components/ImageCard.vue";
export default defineComponent({
  name: "CardSection",
  components: { PersonCard, FixedBgDiv, ImageCard },
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
import PersonCard from "@/components/PersonCard.vue";
</script>

<style scoped></style>
