<template>
  <section class="relative">
    <div
      class="pt-32 pb-14 min-h-screen text-green-200 bg-green-900 flex justify-center items-center align-middle flex-col"
    >
      <div
        class="absolute top-0 w-full"
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-delay="200"
      >
        <h2 class="flex justify-center items-center align-middle">
          <font-awesome-icon icon="fa-solid fa-star" class="w-14 h-14 pr-3" />
          Ubytování
        </h2>
      </div>

      <div class="flex justify-center items-center w-full">
        <div class="max-w-screen-lg flex items-center flex-col">
          <p
            class="p-full mx-5"
            data-aos="fade-up"
            data-aos-duration="200"
            data-aos-delay="200"
          >
            Některým z vás jsme již ubytování slíbili. Ti, kteří ještě nevíte,
            kam hlavu složíte, tak můžete úplně dole na stránce přes formulář
            zažádat o ubytování. Volné kapacity pro vás ještě máme, avšak moc
            dlouho neváhejte, aby i na vás místo zbylo. Pokud se tak nestane
            nebo vám námi navrhovaná místa nebudou vyhovovat, tak vám alespoň
            poradíme.
          </p>
          <div class="flex flex-wrap justify-evenly w-full mt-10">
            <div
              class="w-80 mb-10 flex flex-col justify-start items-center align-top"
            >
              <h3
                class="font-bold flex justify-center align-middle items-center"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200"
              >
                Penzion Poodří
                <a
                  href="https://www.penzionpoodri.cz"
                  class="flex justify-center align-middle items-center"
                >
                  <font-awesome-icon
                    class="ml-3 w-6 h-6"
                    icon="fa-solid fa-up-right-from-square"
                  />
                </a>
              </h3>
              <img
                class="sm:w-96 sm:h-72 w-76 h-52 rounded-lg shadow-lg m-3"
                src="@/assets/img/ubytko1.jpg"
                alt="Penzion 1"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200"
              />
              <div
                class="text-left"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200"
              >
                <p class="text-center text-lg opacity-70">
                  Penzion nabízí celoroční ubytování o kapacitě 48 míst. Nachází
                  se v samotném centru obce Suchdolu nad Odrou přibližně 1 km od
                  vlakového nádraží, které je významným železničním uzlem na
                  trati Bohumín-Přerov. Na něj navazují jednokolejné tratě do
                  Nového Jičína, Fulneku a Budišova nad Budišovkou. Je dostupný
                  i autobusy ze směrů Nový Jičín, Fulnek a Odry.
                </p>
                <p class="text-xl mt-2">
                  <strong class="pr-2">Adresa:</strong> Komenského 260, 742 01
                  Suchdol nad Odrou
                </p>
                <p class="text-xl">
                  <strong class="pr-2">Telefonní kontakt:</strong> 731 467 643
                </p>
              </div>
            </div>
            <div
              class="w-80 mb-10 flex flex-col justify-start items-center align-top"
            >
              <h3
                class="font-bold flex justify-center align-middle items-center"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200"
              >
                Penzion U Haitlů
                <a
                  href="https://penzion-u-haitlu.penzion.cz"
                  class="flex justify-center align-middle items-center"
                >
                  <font-awesome-icon
                    class="ml-3 w-6 h-6"
                    icon="fa-solid fa-up-right-from-square"
                  />
                </a>
              </h3>
              <img
                class="sm:w-96 sm:h-72 w-76 h-52 rounded-lg shadow-lg m-3"
                src="@/assets/img/ubytko2.jpg"
                alt="Penzion 2"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200"
              />
              <div
                class="text-left"
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="200"
              >
                <p class="text-center text-lg opacity-70">
                  Penzion U Haitlů se nachází v Bernarticích nad Odrou nedaleko
                  Nového Jičína a provozovatelé se věnují chovu
                  starokladrubských koní. Penzion je vybudován ve
                  zrekonstruované starší budově bývalého statku. K objektu patří
                  travnatá zahrada, kde je oddělená část s výběhem pro koně a
                  část pro odpočinek rekreantů s přírodním ohništěm a zahradním
                  posezením.
                </p>
                <p class="text-xl mt-2">
                  <strong class="pr-2">Adresa:</strong> Bernartice nad Odrou 57
                </p>
                <!--                <p class="text-xl">-->
                <!--                  <strong class="pr-2">Telefonní kontakt:</strong> 731 467 643-->
                <!--                </p>-->
              </div>
            </div>
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
