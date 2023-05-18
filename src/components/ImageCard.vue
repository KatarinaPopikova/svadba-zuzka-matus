<template>
  <div
    class="flex justify-center"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-delay="200"
  >
    <div class="my-3 flex max-md:flex-col flex-wrap w-full">
      <div
        v-if="odd"
        class="bg-white md:w-1/2 w-full flex flex-col justify-evenly items-center md:rounded-l-lg max-md:rounded-t-lg"
        style="height: 30rem"
      >
        <h2 class="card-header py-0">{{ cardData.title }}</h2>
        <p
          class="text-2xl w-full p-2 px-6 md:px-10"
          v-html="cardData.text.replace(/\n/g, '&lt;br&gt;')"
        ></p>
      </div>
      <div
        class="md:w-1/2 w-full overflow-hidden"
        style="clip-path: inset(0); height: 30rem"
      >
        <img
          :src="require('@/assets/img/' + cardData.img + '')"
          class="h-full w-full object-cover"
          :class="{
            'md:rounded-l-lg  max-md:rounded-t-lg': !odd,
            'md:rounded-r-lg  max-md:rounded-b-lg': odd,
          }"
          :alt="cardData.img"
        />
      </div>
      <div
        v-if="!odd"
        class="bg-white md:w-1/2 w-full flex flex-col justify-evenly items-center md:rounded-r-lg max-md:rounded-b-lg"
        style="height: 30rem"
      >
        <h2 class="card-header py-0">MŮJ ROK 2022 NA ENDURU</h2>
        <p
          class="text-2xl w-full p-2 px-6 nd:px-10"
          v-html="cardData.text.replace(/\n/g, '&lt;br&gt;')"
        ></p>
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
  font-size: 2.5em;
  line-height: 1.6;
  font-family: "Amatic SC", cursive;
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
