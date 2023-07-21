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
      <GalleryWithPagination :total="147" :link="'/gallery/photo'" />
      <div class="grid place-items-center mt-8">
        <iframe
          class="sm:w-[560px] sm:h-[315px] lg:w-[800px] lg:h-[450px] xl:w-[1120px] xl:h-[630px]"
          src="https://www.youtube.com/embed/xYnXtj4yheI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="mt-14">
        <GalleryWithPagination :total="46" :link="'/ZM/obr'" />
        <a href="https://amoosingstories37.pixieset.com/zuzkaamatus/">
          <p class="text-5xl font-bold underline p-2">FOTKY ZE SVATBY</p>
          <p class="text-2xl text-white">
            Rozklikni Pro všechny fotky ve větší kvalitě.
          </p>
        </a>
      </div>
    </div>
  </section>
</template>
