<template>
  <div id="sidemenu">
    <button
      class="sidemenu__btn rounded-br-lg"
      v-on:click="navOpen = !navOpen"
      v-bind:class="{ active: navOpen }"
    >
      <span class="top"></span>
      <span class="mid"></span>
      <span class="bottom"></span>
    </button>
    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <li class="sidemenu__item">
              <router-link to="/">O nás</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/day">Den D</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/program">Program</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/dress_code">Dress code</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/map">Mapa</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/gifts">Tipy na dárky</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/menu">Svatbní menu</router-link>
            </li>
            <li class="sidemenu__item">
              <router-link to="/stars">Dúležité osoby</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      navOpen: false,
    };
  },
};
</script>

<style scoped>
#sidemenu nav {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background: #333336;
}

#sidemenu .sidemenu__btn {
  display: block;
  width: 50px;
  height: 50px;
  //background: grey;
  border: none;
  position: relative;
  z-index: 100;
  appearance: none;
  cursor: pointer;
  outline: none;
}

#sidemenu span {
  display: block;
  width: 20px;
  height: 2px;
  margin: auto;
  background: rgb(96, 90, 90);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.4s ease;
}

#sidemenu .top {
  transform: translateY(-8px);
}

#sidemenu .bottom {
  transform: translateY(8px);
}

#sidemenu .active .top {
  transform: rotate(-45deg);
}

#sidemenu .active .mid {
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}

#sidemenu .active .bottom {
  transform: rotate(45deg);
}

.sidemenu__wrapper {
  padding-top: 50px;
}

.sidemenu__list {
  padding-top: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidemenu__item a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.6em;
  padding: 0.5em;
  display: block;
  color: white;
  transition: 0.4s ease;
}

.sidemenu__item:hover {
  background: lightgrey;
  color: dimgrey;
}

.translateX-enter {
  transform: translateX(-200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
</style>
