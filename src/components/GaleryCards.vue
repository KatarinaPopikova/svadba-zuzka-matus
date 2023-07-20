<template>
  <lightgallery
    :settings="{
      speed: 500,
      plugins: plugins,
      allowMediaOverlap: true,
      preload: 5,
      download: false,
    }"
    :onBeforeSlide="onBeforeSlide"
    :onBeforeClose="onBeforeClose"
    class="grid grid-cols-2 md:grid-cols-4 gap-4 px-3"
  >
    <a
      v-for="n in getRange()"
      :key="n"
      :href="require(`@/assets/gallery/photo${n}.webp`)"
      class="aspect-square"
    >
      <img
        class="h-full w-full object-cover rounded-xl"
        loading="eager"
        :alt="alts.find((val) => val.index === n)?.alt"
        :src="require(`@/assets/gallery/photo${n}.webp`)"
      />
    </a>
  </lightgallery>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default {
  name: "GaleryCards",
  components: { Lightgallery },

  props: {
    current: {
      type: Number,
      default: 1,
    },
    maxNumber: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    slide: false,
    plugins: [lgThumbnail, lgZoom],
    alts: [],
  }),
  methods: {
    getRange() {
      if (this.slide) {
        return this.maxNumber - 1;
      }
      const start = 16 * (this.current - 1) + 1;
      const maxAllowed = Math.min(this.maxNumber - start, 16);

      return Array.from({ length: maxAllowed }, (_, index) => start + index);
    },
    // onBeforeClose: () => {
    //   this.slide = false;
    // },
    // onBeforeSlide: (detail) => {
    //   const { index, prevIndex } = detail;
    //   this.slide = true;
    // },
  },
};
</script>

<style lang="css" scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
</style>
