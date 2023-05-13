<template>
  <header class="fixed w-full">
    <h1 class="page-title">Zuzka & Matúš</h1>
    <!--    <NavBar class="lg:hidden" />-->
    <nav>
      <ul class="flex justify-between items-center">
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
import MapView from "@/views/MapView.vue";

export default defineComponent({
  name: "HomeView",
  components: { MapView, AboutUsView },
  data() {
    return {
      sections: [
        { name: "O nás", component: "AboutUsView" },
        { name: "Mapa", component: "MapView" },
      ],
      activeIndex: 0,
    };
  },
  mounted() {
    console.log(this.$refs.section);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
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
nav {
  padding: 30px;
  font-size: 1.6em;
}

nav a {
  color: #ffffff;
  text-shadow: 1px 1px 2px #666;
}

nav a.active {
  color: #9b0707;
}
</style>
