<template>
  <section class="relative">
    <div
      class="pt-36 pb-20 min-h-screen bg-green-200 text-green-900 flex justify-center items-center flex-col"
    >
      <div class="absolute top-0 px-2 w-full">
        <h2 data-aos="fade-up" data-aos-duration="100" data-aos-delay="100">
          <font-awesome-icon icon="fa-solid fa-tree" class="w-14 h-14" />
          Tipy na výlet / Může se hodit
        </h2>
      </div>
      <div
        class="flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div class="max-w-screen-md flex text-start flex-col mx-7">
          <div>
            <p
              class="p-full px-2 m-3 text-center"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              Ti z vás, kteří obdrželi spolu s pozvánkou kartičku s pozváním ke
              svatebnímu rautu se v Bernarticích a jejich okolí nudit nebudou.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="200"
              data-aos-delay="100"
            >
              <h3 class="font-bold">Bernartice nad Odrou</h3>
              <p class="p-full ml-6 mb-3 opacity-70">
                Bernartice nad Odrou jsou malebná vesnička nacházející se v
                chráněné krajinné oblasti Poodří, známá především pro svůj klid
                a folklór. Tato lokalita nabízí dechberoucí pohledy na nedaleké
                hory Beskydy, ale také nepřeberné množství kulturního vyžití –
                divadlo, hasičské akce, myslivecké hody a plesy.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="100"
              >
                <p class="p-full px-2 py-2">
                  <font-awesome-icon
                    icon="fa-solid fa-person-hiking"
                    class="pr-3"
                  />
                  <strong>Tipy na výlety:</strong>
                  Panský kopec, Salaš, lesní mlýn a splav, velké množství
                  kapliček a křížů
                </p>
                <p class="p-full px-2 py-2">
                  <font-awesome-icon icon="fa-solid fa-utensils" class="pr-3" />
                  <strong>Tipy na oběd:</strong>
                  Restaurace u Bříz, Hospůdka u Odry, Hotel Salaš, Motorest
                  Starý Jičín
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="200"
              data-aos-delay="100"
            >
              <h3 class="mt-8 font-bold">Nový Jičín a okolí</h3>
              <p class="p-full ml-6 mb-3 opacity-70">
                Nejbližší město vzdálené od místa konání svatby (cca 7 km) se
                jmenuje Nový Jičín. Přezdívá se mu také město klobouků, protože
                zde sídlí firma TONAK (TOvárna NA Klobouky). Město bylo
                proslaveno i díky generálu Ernst Gideon von Laudonovi, který zde
                také zemřel. Pokud se zde zastavíte, tak nevynechejte náměstí a
                dejte si zde kávu či zmrzlinu.
              </p>
              <div
                data-aos="fade-up"
                data-aos-duration="200"
                data-aos-delay="100"
              >
                <p class="p-full px-2 py-2">
                  <font-awesome-icon
                    icon="fa-solid fa-person-hiking"
                    class="pr-3"
                  />
                  <strong>Tipy na výlety:</strong>
                  Masarykovo náměstí (nejkrásnější náměstí v ČR ROKU 2015),
                  Žerotínský zámek, Skalky, jezero Čerťák a Lamberk, Svinec,
                  Zámek Kunín, zřícenina hradu Starý Jičín
                </p>
                <p class="p-full px-2 py-2">
                  <font-awesome-icon icon="fa-solid fa-utensils" class="pr-3" />
                  <strong>Tipy na oběd:</strong>
                  Pizzeria Nano, Restautace New Mexico, Srub u Medvěda, Hotel na
                  Skalkách, Restaurace Graphic
                </p>
              </div>
            </div>
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
