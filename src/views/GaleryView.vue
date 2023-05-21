<script lang="ts">
import { defineComponent } from "vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default defineComponent({
  name: "GaleryView",
  components: {
    Lightgallery,
  },
  data: () => ({
    plugins: [lgThumbnail, lgZoom],
    alts: [],
  }),
});
</script>

<template>
  <section class="bg-[#222]">
    <div class="max-w-7xl mx-auto pb-20">
      <h2 class="text-white mb-16">
        <font-awesome-icon icon="fa-solid fa-images" class="w-14 h-14 pr-3" />
        Galerie
      </h2>
      <lightgallery
        :settings="{
          speed: 500,
          plugins: plugins,
          allowMediaOverlap: true,
          preload: 5,
          download: false,
        }"
        class="grid grid-cols-2 md:grid-cols-4 gap-4 px-3"
      >
        <a
          v-for="n in 146"
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
    </div>
  </section>
</template>

<style lang="css" scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
</style>
