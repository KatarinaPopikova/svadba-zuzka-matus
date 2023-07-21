<template>
  <GaleryCards :current="current" :max-number="total" :link="link" />
  <div class="block w-full">
    <ListPagination
      :current="current"
      :total="total"
      :per-page="16"
      :page-range="2"
      @page-changed="slidePhotos"
    />
  </div>
</template>

<script>
import GaleryCards from "@/components/GaleryCards.vue";
import ListPagination from "@/components/ListPagination.vue";

export default {
  name: "GalleryWithPagination",
  components: { ListPagination, GaleryCards },

  props: ["total", "link"],

  data() {
    return {
      current: 1,
    };
  },

  methods: {
    slidePhotos(current) {
      this.current = current;
    },
  },
};
</script>

<style scoped></style>
