<template>
  <header ref="navbar" class="fixed w-full z-50 p-5 text-white shadow-2xl">
    <h1 class="text-6xl">Zuzka & Matúš</h1>
    <!--    <NavBar class="lg:hidden" />-->
    <nav class="text-3xl font-bold pt-2">
      <ul class="flex justify-around items-center">
        <li v-for="(section, index) in sections" :key="index">
          <a
            @click="scrollToSection(index)"
            :class="{ active: activeIndex === index }"
            >{{ section.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
  <section>
    <article v-for="(section, index) in sections" :key="index" ref="section">
      <component :is="section.component" />
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutUsView from "@/views/AboutUsView.vue";
import WeddingView from "@/views/WeddingView.vue";
import PeopleView from "@/views/PeopleView.vue";
import FormView from "@/views/FormView.vue";
import GiftsView from "@/views/GiftsView.vue";
import TripView from "@/views/TripView.vue";
import ProgramView from "@/views/ProgramView.vue";
import TraditionView from "@/views/TraditionView.vue";
import AccommodationView from "@/views/AccommodationView.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AccommodationView,
    TraditionView,
    ProgramView,
    TripView,
    GiftsView,
    FormView,
    PeopleView,
    WeddingView,
    AboutUsView,
  },
  data() {
    return {
      sections: [
        { name: "O nás", component: "AboutUsView" },
        { name: "Svatba", component: "WeddingView" },
        { name: "Program", component: "ProgramView" },
        { name: "Tradice", component: "TraditionView" },
        { name: "Tipy", component: "TripView" },
        { name: "Ubytování", component: "AccommodationView" },
        { name: "Dary", component: "GiftsView" },
        { name: "Kontakty", component: "PeopleView" },
        { name: "Formulář", component: "FormView" },
      ],
      activeIndex: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;

      const navbarTransparency = scrollPosition > 0 ? scrollPosition : 0;

      (
        this.$refs.navbar as HTMLElement
      ).style.backgroundColor = `rgba(14,165,233,${
        navbarTransparency / window.outerHeight
      })`;

      let activeIndex = 0;

      const sections = this.$refs.section as HTMLElement[];
      sections.forEach((section: HTMLElement, index: number) => {
        const topOffset = section.offsetTop;
        const bottomOffset = topOffset + section.offsetHeight;

        if (scrollPosition >= topOffset && scrollPosition < bottomOffset) {
          activeIndex = index;
        }
      });

      this.activeIndex = activeIndex;
    },
    scrollToSection(index: number) {
      const sectionElement = (this.$refs.section as HTMLElement[])[index];
      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: "smooth",
        });
      }
    },
  },
});
</script>

<style scoped>
h1 {
  font-family: "Meow Script", cursive;
}

nav a.active {
  @apply text-red-700;
}
</style>
