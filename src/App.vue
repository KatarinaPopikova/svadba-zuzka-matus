<template>
  <div>
    <div
      class="fixed w-full top-0 left-0 right-0 z-10 transition-all duration-75 ease-out"
      :class="{ '-translate-y-full': !scrolled }"
    >
      <NavBar class="lg:hidden" />
      <nav
        class="grid grid-rows-1 grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-x-7 z-20 max-lg:hidden"
      >
        <div class="flex items-center content-center flex-wrap justify-between">
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >O nás</a
          >
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >Den D</a
          >
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >Dúležité osoby</a
          >
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >Dress code</a
          >
        </div>
        <div>
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('home')"
          >
            <div class="inicial">Zuzka & Matúš</div>
          </a>
        </div>
        <div class="flex items-center content-center flex-wrap justify-between">
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >Mapa</a
          >
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >Tipy na dárky</a
          >
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >Svatbní menu</a
          >
          <a
            :class="[{ active: activeSection === 'about-us' }, 'sectionLink']"
            @click="scrollToSection('about-us')"
            >Program</a
          >
        </div>
      </nav>
    </div>
    <home-view id="home" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: { NavBar },
  data() {
    return {
      scrolled: true,
      activeSection: "home",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // this.scrolled = window.scrollY == 0;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the position of each section
      const sectionPositions = this.$el
        .getElementsByClassName("sectionLink")
        .map((element: HTMLAnchorElement) => {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          return {
            id: element.id,
            top: sectionTop,
            bottom: sectionTop + sectionHeight,
          };
        });

      // Find the active section based on scroll position
      let activeSection = "home";
      for (const sectionPosition of sectionPositions) {
        const { id, top, bottom } = sectionPosition;
        if (
          scrollPosition >= top &&
          scrollPosition < bottom - windowHeight / 2
        ) {
          activeSection = id;
          break;
        }
      }

      // Update activeSection data
      this.activeSection = activeSection;
    },
    scrollToSection(index: string) {
      const sectionElement = this.$el.getElementById(index);
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      });
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

nav {
  padding: 30px;
  font-size: 1.6em;
  transition: transform 0.05ms ease-out;
}

.-translate-y-full {
  transform: translateY(-100%);
}

nav a {
  color: #ffffff;
  text-shadow: 1px 1px 2px #666;
}

nav a.active {
  color: #9b0707;
}
</style>
