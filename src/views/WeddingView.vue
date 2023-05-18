<template>
  <section class="relative">
    <div
      class="pt-32 pb-20 min-h-screen bg-[#69c9f5] text-blue-900 flex justify-center items-center flex-col"
    >
      <div
        class="absolute top-0"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-delay="100"
      >
        <h2>
          <font-awesome-icon icon="fa-solid fa-ring" class="w-12 h-12 pr-3" />
          Svatba
        </h2>
      </div>
      <div class="w-full max-w-screen-xl">
        <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="200">
          <h3 class="font-bold">Dresscode:</h3>
          <div class="flex justify-center flex-wrap">
            <p class="colors bg-[#0ea5e9]"></p>
            <p class="colors bg-blue-800"></p>
            <p class="colors bg-green-700"></p>
            <p class="colors bg-[#dbc497]"></p>
            <p class="colors bg-[#A67B5B]"></p>
          </div>
        </div>
        <div
          class="flex justify-center lg:justify-evenly align-top items-start flex-wrap"
        >
          <div
            class="flex flex-col py-5 justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="200"
            data-aos-delay="200"
          >
            <h3 class="font-bold flex justify-center items-center align-middle">
              Svatební obřad
              <a
                href="https://en.mapy.cz/s/kabotazoju"
                class="flex justify-center items-center align-middle"
              >
                <font-awesome-icon
                  icon="fa-solid fa-map-location-dot"
                  class="pl-2.5 h-7"
                />
              </a>
            </h3>
            <img
              class="sm:w-96 sm:h-72 w-76 h-52 rounded-lg shadow-lg m-3"
              src="@/assets/img/spYBCFw.jpeg"
              alt="Kostel"
            />
            <p class="font-p">
              <strong class="mr-2">Kde: </strong>Kostel Navštívení Panny Marie v
              Bernarticích nad Odrou
            </p>
            <p class="font-p mt-2">
              <strong class="mr-2">Kdy: </strong>3. 6. 2023 v 11:00
            </p>
          </div>
          <div
            class="flex flex-col py-5 justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="200"
            data-aos-delay="200"
          >
            <h3 class="font-bold flex justify-center items-center align-middle">
              Svatební veselice
              <a
                href="https://en.mapy.cz/s/pejomesudo"
                class="flex justify-center items-center align-middle"
              >
                <font-awesome-icon
                  icon="fa-solid fa-map-location-dot"
                  class="pl-2.5 h-7"
                />
              </a>
            </h3>
            <img
              class="sm:w-96 sm:h-72 w-76 h-52 rounded-lg shadow-lg m-3"
              src="@/assets/img/fohrHe.jpeg"
              alt="Kulturní dům"
            />
            <div class="w-80">
              <p class="font-p">
                <strong class="mr-2">Kde: </strong>Kulturní dům Bernartice nad
                Odrou (vstup od parkoviště)
              </p>
              <p class="pl-8 font-p">Bernartice nad Odrou 103</p>
              <p class="font-p mt-2">
                <strong class="mr-2">Kdy: </strong>od 17:00
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="200" data-aos-delay="200">
          <p class="p-full">
            Auta nechejte prosím na parkovišti přes Restaurací u Bříz (
            <a href="https://en.mapy.cz/s/hojunogapu">
              <font-awesome-icon icon="fa-solid fa-map-location-dot" />
            </a>
            ) nebo před obecním úřadem (
            <a href="https://en.mapy.cz/s/bedesoraga">
              <font-awesome-icon icon="fa-solid fa-map-location-dot" />
            </a>
            ).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WeddingView",
};
</script>

<style scoped>
.colors {
  @apply w-24 h-24 rounded-full mx-2 my-5;
}
.font-p {
  @apply text-xl text-left w-80;
}
</style>
