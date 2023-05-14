<template>
  <section class="relative">
    <div
      class="min-h-screen bg-green-50 text-green-900 flex justify-center items-center flex-col"
    >
      <div
        class="absolute top-0"
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-delay="200"
      >
        <h2>
          <font-awesome-icon
            icon="fa-solid fa-icons"
            class="w-10 h-10 pr-3"
          />Program
        </h2>
      </div>

      <div class="flex justify-center items-center pb-20 pt-32">
        <div class="max-w-screen-sm flex items-center flex-col">
          <div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right"></div>
              <div class="program-time">od 8:00</div>
              <div class="program-description text-left">
                Rodinná snídaně v penzioně v Suchdole (Matúšova rodina)
              </div>
            </div>

            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right">
                Rodinná snídaně u Bayerů (Zuzčina rodina)
              </div>
              <div class="program-time">od 9:00</div>
              <div class="program-description text-left"></div>
            </div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right"></div>
              <div class="program-time">9:30</div>
              <div class="program-description text-left">
                Příjezd Matúšovy rodiny k Bayerům na pýtačky
              </div>
            </div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right">
                Požehnání rodičů svým dětem
              </div>
              <div class="program-time">10:00</div>
              <div class="program-description text-left"></div>
            </div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right"></div>
              <div class="program-time">10:30</div>
              <div class="program-description text-left">
                Odchod (pěšky) do kostela
              </div>
            </div>

            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right">
                Svatební obřad se mší svatou v kostele Navštívení Panny Marie
              </div>
              <div class="program-time">11:00</div>
              <div class="program-description text-left"></div>
            </div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right"></div>
              <div class="program-time">12:00</div>
              <div class="program-description text-left">
                Společné focení před kostelem
              </div>
            </div>

            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right">Oběd s rodinou</div>
              <div class="program-time">13:00</div>
              <div class="program-description text-left"></div>
            </div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right"></div>
              <div class="program-time">15:00</div>
              <div class="program-description text-left">
                Rozkrajování svatebního dortu a kávička (novomanželé focení)
              </div>
            </div>

            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right">
                Příchod večerních hostů, svatební raut
              </div>
              <div class="program-time">17:00</div>
              <div class="program-description text-left"></div>
            </div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right"></div>
              <div class="program-time">18:00</div>
              <div class="program-description text-left">
                První manželský tanec a zahájení zábavy
              </div>
            </div>

            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right">Čepčenie</div>
              <div class="program-time">23:59</div>
              <div class="program-description text-left"></div>
            </div>
            <div
              class="flex"
              data-aos="fade-up"
              data-aos-duration="100"
              data-aos-delay="100"
            >
              <div class="program-description text-right"></div>
              <div class="program-time">1:00</div>
              <div class="program-description text-left">DJ Bobo</div>
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
  name: "ProgramView",
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.program-description {
  @apply w-[10rem] sm:w-[15rem] lg:w-[50rem] text-2xl px-1;
}
.program-time {
  @apply font-bold text-2xl flex-col w-14 mx-2 sm:mx-5 lg:py-2;
}
</style>
