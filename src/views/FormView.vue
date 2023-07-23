<template>
  <section class="relative">
    <div
      class="min-h-screen py-32 bg-[#A67B5B] text-white flex justify-center items-center flex-col"
    >
      <div
        class="absolute top-0"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-delay="100"
      >
        <h2>
          <font-awesome-icon
            icon="fa-solid fa-square-check"
            class="w-12 h-12 pr-2"
          />
          Máme výsledky ze svatebních novin :)
        </h2>
      </div>
      <div
        class="flex justify-center items-center pt-10"
        data-aos="fade-up"
        data-aos-duration="300"
        data-aos-delay="50"
      >
        <div class="max-w-screen-sm flex items-center flex-col">
          <div data-aos="fade-up">
            <ol class="list-decimal text-2xl text-left ml-8 mr-5 w-fit">
              <li>
                Tak Zuzi to podle hodnoticich bude pry u vas mit doma pod
                palcem;
              </li>
              <li>Ivancovi jako prijmeni nebylo prekvapeni;</li>
              <li>
                nejradsi by vam prali dvojcatka anebo kluka jako prvni mimco;
              </li>
              <li>deti mate mit alespon tri anebo i vic;</li>
              <li>
                to jestli si mate poridit zvire je asi ocividne na vas jelikoz
                podle publika je to 50:50;
              </li>
              <li>
                ale kdyby jste si meli nejake zvire poridit tak tady jsou
                navrhy: Rybičky, Lamu, Jednorožce, Lachtana, Želvu, Fretku,
                Slepičky, Kuřátko, Statkovou zvěř, Statkovou zvěř, Další pes,
                Kapybara;
              </li>
              <li>nejvice si vas dokazou predstavit zit na vesnici;</li>
              <li>a Matus ma pry solidni sanci na to se stat farmarem.</li>
            </ol>
          </div>
        </div>
      </div>
      <div class="max-w-screen-xl my-16">
        <GalleryWithPagination :total="7" :link="'/graphs/photo'" />
      </div>

      <p
        class="text-4xl"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="50"
      >
        A tady jsou pak umělecké výtvory na kterých jste ztvárnění 👍
      </p>

      <div class="max-w-screen-xl my-16">
        <GalleryWithPagination :total="16" :link="'/draws/photo'" />
      </div>
    </div>
  </section>
</template>

<script>
import GalleryWithPagination from "@/components/GalleryWithPagination.vue";

export default {
  name: "FormView",
  components: { GalleryWithPagination },
};
</script>

<style scoped>
li {
  @apply sm:pl-8;
}
</style>
