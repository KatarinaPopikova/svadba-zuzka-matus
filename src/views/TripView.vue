<template>
  <section class="relative">
    <div
      class="min-h-screen bg-green-200 text-green-900 flex justify-center items-center flex-col"
    >
      <div
        class="absolute top-0"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-delay="100"
      >
        <h2>
          <font-awesome-icon icon="fa-solid fa-tree" class="w-14 h-14" /> Tipy
          na výlety / může se hodit
        </h2>
      </div>
      <div
        class="flex justify-center items-center pt-10"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div class="max-w-screen-sm flex text-start flex-col">
          <div>
            <span class="p-full px-2 m-3"
              >Ti z vás, kteří obdrželi spolu s pozvánkou kartičku s pozváním ke
              svatebnímu rautu se v Bernarticích a jejich okolí nudit nebudou.
            </span>
            <p class="p-full px-2 py-5">
              <font-awesome-icon
                icon="fa-solid fa-person-hiking"
                class="pr-3"
              /><strong>Tipy na výlety:</strong>
              Panský kopec, Salaš, Nový Jičín
            </p>
            <p class="p-full px-2 py-5">
              <font-awesome-icon
                icon="fa-solid fa-utensils"
                class="pr-3"
              /><strong>Tipy na oběd:</strong>
              Restaurace u Bříz, Nový Jičín, Starý Jičín (motorest)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";

export default {
  name: "TripView",
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped></style>
