<template>
  <div
    class="px-5"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-delay="50"
  >
    <img
      v-if="path"
      :src="path"
      class="rounded-full sm:w-40 sm:h-40 w-24 h-24 object-cover"
      alt="dulezity clovek"
    />
    <font-awesome-icon
      v-else
      class="w-24 h-24 text-amber-900"
      icon="fa-solid fa-car"
    />
    <p class="pt-1">
      <strong>{{ name }}</strong>
    </p>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  name: "ContactPerson",
  props: {
    path: {
      type: String,
      default: null,
    },
    name: {
      type: String,
    },
    text1: {
      type: String,
    },
    text2: {
      type: String,
      default: null,
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
p {
  @apply text-2xl;
}
</style>
