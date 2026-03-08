<template>
  <NavBar></NavBar>
  <main class="relative w-full h-screen overflow-auto snap-y snap-mandatory">
    <div class="snap-center">
      <HeroSection test-drive-href="https://www.tesla.com/es_es/drive"></HeroSection>
    </div>
    <div id="model-y" class="snap-center">
      <CarSection
        button1-href="https://www.tesla.com/es_es/inventory/new/modely"
        button2-href="https://www.tesla.com/es_es/modely/design"
      >
        <template v-slot:image>
          <img
            src="./assets/model-y.avif"
            alt="img-car"
            class="h-full w-full object-cover object-center"
          />
        </template>
        <template v-slot:title> Model Y </template>
        <template v-slot:description>
          Concertar una prueba de conducción
        </template>
        <template v-slot:title-button-1> Explorar inventario </template>
        <template v-slot:title-button-2> Pedido personalizado </template>
        <template v-slot:title-button-3>Disponible con Moves III</template>
      </CarSection>
    </div>
    <div id="model-3" class="snap-center">
      <CarSection
        button1-href="https://www.tesla.com/es_es/inventory/new/model3"
        button2-href="https://www.tesla.com/es_es/model3/design"
      >
        <template v-slot:image>
          <img
            src="./assets/model-3.avif"
            alt="img-car"
            class="h-full w-full object-cover object-center"
          />
        </template>
        <template v-slot:title> Model 3 </template>
        <template v-slot:description>
          Concertar una prueba de conducción
        </template>
        <template v-slot:title-button-1> Explorar inventario </template>
        <template v-slot:title-button-2> Pedido personalizado </template>
        <template v-slot:title-button-3>Disponible con Moves III</template>
      </CarSection>
    </div>
    <div id="model-s" class="snap-center">
      <CarSection
        button1-href="https://www.tesla.com/es_es/inventory/new/models"
        button2-href="https://www.tesla.com/es_es/models/design"
      >
        <template v-slot:image>
          <img
            src="./assets/model-s.avif"
            alt="img-car"
            class="h-full w-full object-cover object-center"
          />
        </template>
        <template v-slot:title> Model S </template>
        <template v-slot:description>
          Concertar una prueba de conducción
        </template>
        <template v-slot:title-button-1> Explorar inventario </template>
        <template v-slot:title-button-2> Pedido personalizado </template>
      </CarSection>
    </div>
    <div id="model-x" class="snap-center">
      <CarSection
        button1-href="https://www.tesla.com/es_es/modelx/design"
        button2-href="https://www.tesla.com/es_es/modelx"
      >
        <template v-slot:image>
          <img
            src="./assets/model-x.avif"
            alt="img-car"
            class="h-full w-full object-cover object-center"
          />
        </template>
        <template v-slot:title> Model X </template>
        <template v-slot:description> Programe una consulta virtual </template>
        <template v-slot:title-button-1>Pedido personalizado</template>
        <template v-slot:title-button-2>Saber más</template>
      </CarSection>
    </div>
    <div id="powerwall" class="snap-center">
      <CarSection button1-href="https://www.tesla.com/es_es/solarpanels">
        <template v-slot:image>
          <img
            src="./assets/solar.avif"
            alt="img-car"
            class="h-full w-full object-cover object-center"
          />
        </template>
        <template v-slot:title> Solar y powerwall </template>
        <template v-slot:description> Energia para todos </template>
        <template v-slot:title-button-1>Saber más</template>
      </CarSection>
    </div>
    <div id="carga" class="snap-center">
      <CarSection button2-href="https://shop.tesla.com/es_es">
        <template v-slot:image>
          <img
            src="./assets/charge.avif"
            alt="img-car"
            class="h-full w-full object-cover object-center"
          />
        </template> 
        <template v-slot:title> Accesorios </template>
        <template v-slot:title-button-2>Comprar ahora</template>
      </CarSection>
    </div>
  </main>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import CarSection from "./components/CarSection.vue";
import "./assets/global.css";
import "@/assets/tailwind.css";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar, HeroSection, CarSection },
  data() {
    return {
      imageCar: "./assets/model-y.webp",
    };
  },
};
</script>

<style>
* {
  font-family: "Gotham SSm A", sans-serif;
}
</style>
