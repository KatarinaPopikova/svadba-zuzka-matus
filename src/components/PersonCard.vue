<script lang="ts">
import { defineComponent } from "vue";
import AOS from "aos";

export default defineComponent({
  name: "PersonCard",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  mounted() {
    AOS.init();
  },
});
</script>

<template>
  <div
    class="flex flex-col items-center rounded-2xl h-full bg-white overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-delay="200"
  >
    <div class="object-cover">
      <img class="w-full" :src="this.imageSrc" alt="person" />
    </div>
    <div class="p-3">
      <h2 class="text-6xl">{{ this.name }}</h2>
      <div class="mt-2 text-2xl">{{ this.description }}</div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-family: "Meow Script", cursive;
}
</style>
