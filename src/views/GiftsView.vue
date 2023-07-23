<template>
  <section class="relative">
    <div
      class="min-h-screen bg-orange-100 text-amber-900 flex justify-center items-center flex-col"
    >
      <div
        class="absolute top-0"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-delay="100"
      >
        <h2>
          <font-awesome-icon
            icon="fa-solid fa-hand-holding-heart"
            class="w-14 h-14"
          />
          Svatební dary
        </h2>
      </div>
      <div class="flex justify-center items-center pt-10">
        <div class="max-w-screen-sm flex items-center flex-col">
          <div>
            <p
              class="p-full px-2"
              data-aos="fade-up"
              data-aos-duration="200"
              data-aos-delay="50"
            >
              Nevíte si rady s dary? <br />
              Nápověda už je tady! <br />
              Na domeček, autíčko<br />
              přispějte nám maličko.
            </p>
            <p
              class="p-full px-2 pt-8 opacity-60"
              data-aos="fade-up"
              data-aos-duration="200"
              data-aos-delay="200"
            >
              Vězte, že vaše přítomnost je pro nás darem největším. Pokud nás
              však chcete obdarovat, tak prosíme o finanční příspěvek.
              Spotřebiče, křišťálové servisy a jiné hmotné věci u nás místo
              nenajdou.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GiftsView",
};
</script>

<style scoped></style>
