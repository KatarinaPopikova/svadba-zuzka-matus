<template>
  <section class="relative">
    <div
      class="py-32 min-h-screen bg-orange-200 text-[#A67B5B] flex justify-center items-center flex-col"
    >
      <div
        class="absolute top-0"
        data-aos="fade-up"
        data-aos-duration="100"
        data-aos-delay="100"
      >
        <h2>
          <font-awesome-icon
            icon="fa-solid fa-address-book"
            class="w-12 h-12 pr-3"
          />
          Kontakty
        </h2>
      </div>
      <div class="w-full max-w-screen-xl">
        <div class="w-full">
          <h3
            class="py-2 font-bold"
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-delay="100"
          >
            Svědkové
          </h3>
          <div class="flex justify-evenly w-full">
            <ContactPerson
              :path="'/svedok2.jpg'"
              :name="'Zuzančina svědková'"
              :text1="'Radka Horutová'"
              :text2="'+420 773 966 240'"
            />
            <ContactPerson
              :path="'/svedok1.jpg'"
              :name="'Matúšův svěděk'"
              :text1="'Roman Kmeť'"
              :text2="'+421 915 338 310'"
            />
          </div>
        </div>
      </div>
      <div class="w-full max-w-screen-xl py-10">
        <div class="w-full">
          <h3
            class="py-2 font-bold"
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-delay="100"
          >
            Řidiči
          </h3>
          <p class="p-full pb-4">
            Pokud se s námi rozhodnete veselit a nevíte, jak se dostat poté
            domů, stačí si na svatbě najít tyto pány nebo jim zavolat a oni vás
            odvezou.
          </p>
          <div class="flex justify-evenly w-full flex-wrap">
            <ContactPerson
              :name="'řidič do Valmezu'"
              :text1="'František Hlavica'"
              :text2="'+420 601 389 454'"
            />
            <ContactPerson
              :name="'řidič do Suchdolu'"
              :text1="'Jaroslav Pupík'"
              :text2="'+420 731 174 771'"
            />
          </div>
        </div>
      </div>
      <div class="w-full max-w-screen-xl">
        <div class="w-full">
          <h3
            class="py-2 font-bold"
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-delay="100"
          >
            Novomanželé
          </h3>
          <div class="flex justify-evenly w-full">
            <ContactPerson
              :path="'/zuzka.jpg'"
              :name="'Zuzana Bayerová'"
              :text1="'+420 724 883 987'"
            />
            <ContactPerson
              :path="'/matus.jpg'"
              :name="'Matúš Ivančo'"
              :text1="'+420 605 212 188'"
              :text2="'+421 904 537 601'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactPerson from "@/components/ContactPerson.vue";

export default {
  name: "PeopleView",
  components: { ContactPerson },
};
</script>

<style scoped></style>
