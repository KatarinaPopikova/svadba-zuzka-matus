<template>
  <div>
    <FixedBgDiv :bg-start-position="bgStartPosition" />

    <section>
      <div class="bg-[#222] py-9 w-full">
        <div class="max-w-7xl mx-auto">
          <div
            class="grid grid-rows-1 grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-x-20 mb-16"
          >
            <PersonCard
              name="Tak tohle je Zuzka."
              :image-src="require('@/assets/img/usb/IMG_2864-Edit.jpg')"
              description="Tak tohle je Zuzka.
Vyrostla sice na vesnici, ale v posledních sedmi letech se snaží potlačit svou bujarost ve městě zvaném Brníčko. To se jí úspěšně nedaří, protože stále chodí pozdě a boty si ušpiní i doma na koberci. V krvi ji koluje muzikantská a divadelnická krev, takže se při prvních tónech hudby nejprve začne vrtět a vzápětí začne zpívat, i když nezná slova. Střeží si svá tajemství, takže jen málo lidí ví, že její druhé jméno je Veronika, je členkou Mensa, umí znakovu řeč, má baristický a masérský kurz. Když zrovna nekřepčí v Brně, tak cestuje. Navštívila již přes 30 zemí světa a v některých z nich žila déle jak 2 měsíce. Tak se také poznali s Matúšem – na dvouměsíčním pobytu ve Slovinsku.

      "
            />
            <PersonCard
              name="A tohle je Matúš."
              :image-src="require('@/assets/img/usb/IMG_2850-Edit.jpg')"
              description="Pardón! Je to pan doktor Matúš Ivančo. Naštěstí si na tituly nepotrpí. Ke spokojenému životu mu stačí málo – dobrá káva a skvělá společnost. Žije si v životní harmonii, protože miluje svou práci, svou holku a tak dlouho touženého psa, kterého dostal k třicátým narozeninám. Matúše jen tak něco nerozhází, a proto chodí ještě později než Zuzka. Mezi jeho superschopnosti patří krásná výslovnost písmene „ř“ a to, že se ničeho nebojí. Ještě aby ne, když si chce vzít Zuzku, se kterou bude mít o dobrodružství v životě postaráno. Na dobrodružství ji taky sbalil, když ji vzal na největší evropský festival Sziget do Maďarska a to ne jen tak. Stopovali společně z Lublaně 500 km tam a zpět.

      "
            />
          </div>
          <ImageCard
            v-for="(card, index) in cardsData['card'].slice(
              cardRange?.[0],
              cardRange?.[1]
            )"
            :card-data="card"
            :key="index"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageCard from "@/components/ImageCard.vue";

export default defineComponent({
  name: "CardSection",
  components: { PersonCard, FixedBgDiv, ImageCard },
  props: {
    cardRange: {
      type: Array,
    },
    bgStartPosition: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      cardsData: json,
    };
  },
});

import json from "@/assets/json/card-data.json";
import FixedBgDiv from "@/components/FixedBgDiv.vue";
import PersonCard from "@/components/PersonCard.vue";
</script>

<style scoped></style>
