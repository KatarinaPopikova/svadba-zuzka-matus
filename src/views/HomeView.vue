<template>
  <CardSection :bg-start-position="0" :card-range="[0, 3]" />
  <CardSection :bg-start-position="1" :card-range="[3, 6]" />
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
