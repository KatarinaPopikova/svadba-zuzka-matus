<template>
  <div class="w-full h-screen">
    <div
      class="px-2 pt-12 sm:pt-20 w-full h-full flex justify-center sm:items-center"
    >
      <img
        class="h-2/3 w-auto rounded-lg object-cover"
        :style="`object-position: 85% 10%`"
        src="@/assets/img/map_hearts.png"
        alt="map"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MapView",
};
</script>

<style scoped></style>
