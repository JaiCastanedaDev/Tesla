<template>
        <header class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-20">
    <LogoComponent></LogoComponent>
    <nav class="menu" :class="{ 'active': isOpen }">
      <ul class="flex [&>li>a]:font-semibold text-white text-sm [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4">
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Carga</a></li>
      </ul>
    </nav>
    <nav class="flex-grow flex justify-end basis-0">
      <ul class="flex text-white text-sm [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4 [&>li>a]:font-semibold menu">
        <li><a href="#">Soporte</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Menú</a></li>
      </ul>
      <div class="hamburger" @click="toggleMenu" :class="{ 'active': isOpen }">
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
            console.log("aaa");
        }
    },
}
</script>
<style scoped>
    .hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger.active .line {
  background-color: #fff;
  transition: all 0.3s ease;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
}
@media (max-width: 747px) {
  .hamburger {
    display: flex;
  }

  .menu {
    display: none;
  }

  .menu.active {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    padding: 10px;
    width: 100%;
  }

  .menu.active li {
    margin-bottom: 10px;
  }
}
</style>