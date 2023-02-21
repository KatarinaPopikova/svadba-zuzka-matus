<template>
  <div class="flex justify-center" data-aos="fade-up">
    <div class="mx-9 my-3 flex flex-wrap max-w-7xl">
      <div
        v-if="odd"
        class="bg-white sm:w-1/2 h-96 flex flex-col justify-evenly items-center sm:rounded-l-lg max-sm:rounded-t-lg"
      >
        <h2 class="card-header">MŮJ ROK 2022 NA ENDURU</h2>
        <p class="p-2">{{ cardData.text }}</p>
      </div>
      <div class="sm:w-1/2 h-96 overflow-hidden" style="clip-path: inset(0)">
        <img
          :src="require('@/assets/img/' + cardData.img + '')"
          class="h-full w-full object-cover"
          :class="{
            'sm:rounded-l-lg  max-sm:rounded-t-lg': !odd,
            'sm:rounded-r-lg  max-sm:rounded-b-lg': odd,
          }"
          :alt="cardData.img"
        />
      </div>
      <div
        v-if="!odd"
        class="bg-white sm:w-1/2 h-96 flex flex-col justify-evenly items-center sm:rounded-r-lg max-sm:rounded-b-lg"
      >
        <h2 class="card-header">MŮJ ROK 2022 NA ENDURU</h2>
        <p class="p-2">{{ cardData.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getCurrentInstance } from "vue";
import AOS from "aos";

export default defineComponent({
  name: "ImageCard",
  props: {
    cardData: {
      type: Object,
    },
  },

  computed: {
    odd() {
      return getCurrentInstance().vnode.key % 2 === 0;
    },
  },
  mounted() {
    AOS.init();
  },
});
</script>

<style scoped>
.card-header {
  letter-spacing: 0.04em;
  font-size: 1.875em;
  line-height: 1.6;
  font-family: sans-serif;
}
.card-header::after {
  content: "";
  display: block;
  border: 3px solid #4d4d4d;
  margin-top: 10px;
  width: 4.5em;
  margin-left: auto;
  margin-right: auto;
}
</style>
