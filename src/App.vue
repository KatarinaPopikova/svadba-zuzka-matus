<template>
  <div id="bg1">
    <NavBar class="lg:hidden" />
    <nav
      class="flex items-center justify-center content-center flex-wrap justify-evenly relative z-20 max-lg:hidden"
    >
      <router-link to="/">O nás</router-link>
      <router-link to="/day">Den D</router-link>
      <router-link to="/program">Program</router-link>
      <router-link to="/dress_code">Dress code</router-link>
      <router-link to="/">
        <img
          alt="O nás"
          src="@/assets/img/butterfly.png"
          class="w-[95px] h-[77px]"
        />
      </router-link>
      <router-link to="/map">Mapa</router-link>
      <router-link to="/gifts">Tipy na dárky</router-link>
      <router-link to="/menu">Svatbní menu</router-link>
      <router-link to="/stars">Dúležité osoby</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#bg1 {
  position: relative;
  background-image: url("@/assets/img/5f9bc4_828ff6864d2743c193671c8be3e0b728_mv2.jpg");
  background-size: cover;
  background-position: center 20%;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

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
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #9b0707;
}
</style>
<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>
