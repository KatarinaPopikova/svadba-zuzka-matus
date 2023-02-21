<template>
  <CardSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardSection from "@/components/CardSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CardSection,
  },
});
</script>

<style scoped></style>
