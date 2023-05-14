<template>
  <div
    class="px-5"
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-delay="200"
  >
    <img
      :src="path"
      class="rounded-full sm:w-40 sm:h-40 w-24 h-24 object-cover"
      alt="Svedok 1"
    />
    <p class="py-2 text-xl">
      <strong>{{ name }}</strong>
    </p>
    <p><strong>T.č.:</strong>{{ phone }}</p>
  </div>
</template>

<script>
import AOS from "aos";

export default {
  name: "ContactPerson",
  props: {
    path: {
      type: String,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped></style>
