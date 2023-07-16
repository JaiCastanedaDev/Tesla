<template>
  <NavBar></NavBar>
  <main class="relative w-full h-screen overflow-auto snap-y snap-mandatory">
    <div class="snap-center">
      <HeroSection ></HeroSection>
    </div>
    <div class="snap-center">
      <CarSection>
        <template v-slot:image>
          <img src='./assets/model-y.webp' alt="img-car" class="h-full w-full object-cover object-center">
        </template>
      </CarSection>
    </div>
    <div class="snap-center">
      <CarSection>
        <template v-slot:image>
          <img src='./assets/model-y.webp' alt="img-car" class="h-full w-full object-cover object-center">
        </template>
      </CarSection>
    </div><div class="snap-center">
      <CarSection>
        <template v-slot:image>
          <img src='./assets/model-y.webp' alt="img-car" class="h-full w-full object-cover object-center">
        </template>
      </CarSection>
    </div><div class="snap-center">
      <CarSection>
        <template v-slot:image>
          <img src='./assets/model-y.webp' alt="img-car" class="h-full w-full object-cover object-center">
        </template>
      </CarSection>
    </div>
  </main>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import CarSection from './components/CarSection.vue';
import './assets/global.css'
import '@/assets/tailwind.css';
import NavBar from './components/NavBar.vue';

export default {
    name: "App",
    components: { NavBar, HeroSection, CarSection },
    data(){
      return{
        imageCar: './assets/model-y.webp',
      }
    }
}
</script>

<style>
* {
  font-family: "Gotham SSm A", sans-serif;
}
</style>
