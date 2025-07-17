<template>
  <header class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-50">
    <LogoComponent />
    
    <!-- Menú principal -->
    <nav class="menu" :class="{ 'active': isOpen }">
      <ul class="flex flex-col md:flex-row [&>li>a]:font-semibold text-white text-sm [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4">
        <li><a href="#model-s" @click="navigate('model-s')">Model S</a></li>
        <li><a href="#model-3" @click="navigate('model-3')">Model 3</a></li>
        <li><a href="#model-x" @click="navigate('model-x')">Model X</a></li>
        <li><a href="#model-y" @click="navigate('model-y')">Model Y</a></li>
        <li><a href="#powerwall" @click="navigate('powerwall')">Powerwall</a></li>
        <li><a href="#carga" @click="navigate('carga')">Carga</a></li>
      </ul>
    </nav>

    <!-- Sección derecha + hamburguesa -->
    <nav class="flex-grow flex justify-end basis-0 items-center">
      <ul class="hidden md:flex text-white text-sm [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4 [&>li>a]:font-semibold">
        <li><a href="#">Soporte</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Menú</a></li>
      </ul>
      <div class="hamburger md:hidden" @click="toggleMenu" :class="{ 'active': isOpen }">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </nav>
  </header>
</template>

<script>
import LogoComponent from './LogoComponent.vue';

export default {
  name: "NavBar",
  components: { LogoComponent },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      console.log("toggleMenu activado:", this.isOpen);
    },
    navigate(sectionId) {
      console.log("Clic en sección:", sectionId);
      this.isOpen = false; // cerrar menú en móvil
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  z-index: 100;
}
.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
}
.menu {
  display: none;
  pointer-events: none;
}
.menu.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 10px;
  width: 100%;
  z-index: 9999;
  pointer-events: auto;
}
@media (min-width: 768px) {
  .menu {
    display: flex !important;
    position: static;
    pointer-events: auto;
  }
}
</style>
