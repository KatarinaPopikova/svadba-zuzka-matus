<script lang="ts">
import { defineComponent } from "vue";
import GalleryWithPagination from "@/components/GalleryWithPagination.vue";

export default defineComponent({
  name: "GaleryView",
  components: {
    GalleryWithPagination,
  },
});
</script>

<template>
  <section class="bg-[#222]">
    <div class="max-w-7xl mx-auto pb-20">
      <h2 class="text-white mb-16">
        <font-awesome-icon icon="fa-solid fa-images" class="w-14 h-14 pr-3" />
        Galerie
      </h2>
      <GalleryWithPagination />
    </div>
  </section>
</template>
