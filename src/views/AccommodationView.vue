<template>
  <section class="relative">
    <div
      class="pt-32 pb-14 min-h-screen text-green-200 bg-green-900 flex justify-center items-center align-middle flex-col"
    >
      <div
        class="absolute top-0"
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-delay="200"
      >
        <h2 class="flex justify-center items-center align-middle">
          <font-awesome-icon icon="fa-solid fa-star" class="w-14 h-14 pr-3" />
          Ubytování
        </h2>
      </div>

      <div class="flex justify-center items-center">
        <div class="max-w-screen-sm flex items-center flex-col">
          <p class="p-full">
            Některým z vás jsme již ubytování slíbili. Ti, kteří ještě nevíte,
            kam hlavu složíte, tak můžete úplně dole na stránce přes formulář
            zažádat o ubytování. Volné kapacity pro vás ještě máme, avšak moc
            dlouho neváhejte, aby i na vás místo zbylo. Pokud se tak nestane
            nebo vám námi navrhovaná místa nebudou vyhovovat, tak vám alespoň
            poradíme.
          </p>
          <div>
            <h3>
              Penzion Poodří
              <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
            </h3>
            <p>
              Penzion nabízí celoroční ubytování o kapacitě 48 míst. Nachází se
              v samotném centru obce Suchdolu nad Odrou přibližně 1 km od
              vlakového nádraží, které je významným železničním uzlem na trati
              Bohumín-Přerov. Na něj navazují jednokolejné tratě do Nového
              Jičína, Fulneku a Budišova nad Budišovkou. Je dostupný i autobusy
              ze směrů Nový Jičín, Fulnek a Odry.
            </p>
            <p>
              <strong>Adresa:</strong> Komenského 260, 742 01 Suchdol nad Odrou
            </p>
            <p><strong>Telefonní kontakt:</strong> 731 467 643</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AccommodationView",
};
</script>

<style scoped></style>
