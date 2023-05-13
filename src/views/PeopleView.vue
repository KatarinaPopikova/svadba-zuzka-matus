<template>
  <section class="relative">
    <div
      class="py-32 min-h-screen bg-orange-200 text-[#A67B5B] flex justify-center items-center flex-col"
    >
      <div class="absolute top-0">
        <h2>Kontakty</h2>
      </div>
      <div class="w-full max-w-screen-xl">
        <div class="w-full">
          <h3 class="py-2">Svědkové</h3>
          <div class="flex justify-evenly w-full">
            <ContactPerson
              :path="'/img14.jpg'"
              :name="'Svedok číslo 1'"
              :phone="'+420000000000'"
            />
            <ContactPerson
              :path="'/img12.jpg'"
              :name="'Svedok číslo 2'"
              :phone="'+420000000000'"
            />
          </div>
        </div>
      </div>
      <div class="w-full max-w-screen-xl py-10">
        <div class="w-full">
          <h3 class="py-2">Řidiči</h3>
          <div class="flex justify-evenly w-full flex-wrap">
            <ContactPerson
              :path="'/img14.jpg'"
              :name="'Řidič číslo 1'"
              :phone="'+420000000000'"
            />
            <ContactPerson
              :path="'/img12.jpg'"
              :name="'Řidič číslo 2'"
              :phone="'+420000000000'"
            />
            <ContactPerson
              :path="'/img14.jpg'"
              :name="'Řidič číslo 3'"
              :phone="'+420000000000'"
            />
            <ContactPerson
              :path="'/img12.jpg'"
              :name="'Řidič číslo 4'"
              :phone="'+420000000000'"
            />
          </div>
        </div>
      </div>
      <div class="w-full max-w-screen-xl">
        <div class="w-full">
          <h3 class="py-2">Novomanželé</h3>
          <div class="flex justify-evenly w-full">
            <ContactPerson
              :path="'/img14.jpg'"
              :name="'Zuzana Bayerová'"
              :phone="'+420000000000'"
            />
            <ContactPerson
              :path="'/img12.jpg'"
              :name="'Matúš Ivančo'"
              :phone="'+420000000000'"
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
