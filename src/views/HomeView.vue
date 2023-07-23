<template>
  <header ref="navbar" class="fixed w-full z-50 p-5 text-white shadow-2xl">
    <h1 ref="title" class="sm:text-6xl text-5xl">Zuzka & Matúš</h1>
    <NavBar
      class="lg:hidden"
      :sections="sections"
      :active-index="activeIndex"
      :scroll-to-section="scrollToSection"
    />
    <nav class="text-3xl font-bold pt-2 max-lg:hidden">
      <ul class="flex justify-around items-center">
        <li
          v-for="(section, index) in sections"
          :key="index"
          class="cursor-pointer font-bold"
        >
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
import GaleryView from "@/views/GaleryView.vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    NavBar,
    AccommodationView,
    TraditionView,
    ProgramView,
    TripView,
    GiftsView,
    FormView,
    PeopleView,
    WeddingView,
    AboutUsView,
    GaleryView,
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
        { name: "Svatební noviny", component: "FormView" },
        { name: "Galerie", component: "GaleryView" },
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

      let navbarTransparency = scrollPosition > 0 ? scrollPosition : 0;
      navbarTransparency =
        navbarTransparency > window.outerHeight
          ? window.outerHeight
          : navbarTransparency;

      (this.$refs.navbar as HTMLElement).setAttribute(
        "style",
        `backdrop-filter: blur(${
          (navbarTransparency / window.outerHeight) * 8
        }px); -webkit-backdrop-filter: blur(${
          (navbarTransparency / window.outerHeight) * 8
        }px);`
      );

      (
        this.$refs.navbar as HTMLElement
      ).style.backgroundColor = `rgba(113,63,18,${
        navbarTransparency / (window.outerHeight * 1.2)
      })`;

      let activeIndex = 0;

      const sections = this.$refs.section as HTMLElement[];
      sections.forEach((section: HTMLElement, index: number) => {
        const topOffset = section.offsetTop - 144;
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
          top: sectionElement.offsetTop - 144,
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
</style>
