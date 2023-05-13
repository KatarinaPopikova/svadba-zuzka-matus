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
        <div
          class="flex items-center justify-center content-center flex-wrap justify-between"
        >
          <router-link to="/">O nás</router-link>
          <router-link to="/day">Den D</router-link>
          <router-link to="/stars">Dúležité osoby</router-link>
          <router-link to="/dress_code">Dress code</router-link>
        </div>
        <div>
          <router-link to="/">
            <!--          <img-->
            <!--            alt="O nás"-->
            <!--            src="@/assets/img/butterfly.png"-->
            <!--            class="w-[95px] h-[77px]"-->
            <!--          />-->
            <div class="inicial">Zuzka & Matúš</div>
          </router-link>
        </div>
        <div
          class="flex items-center justify-center content-center flex-wrap justify-between"
        >
          <router-link to="/map">Mapa</router-link>
          <router-link to="/gifts">Tipy na dárky</router-link>
          <router-link to="/menu">Svatbní menu</router-link>
          <router-link to="/program">Program</router-link>
        </div>
      </nav>
    </div>
    <router-view> </router-view>
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
    };
  },
  mounted() {
    console.log("icons from: https://www.flaticon.com/free-icons/arrow");
    window.addEventListener("scroll", this.handleScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY == 0;
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

nav a.router-link-exact-active {
  color: #9b0707;
}
</style>
