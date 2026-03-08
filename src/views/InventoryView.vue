<template>
  <section class="min-h-screen bg-[#f5f5f5] text-[#171a20] px-6 py-16 md:px-16">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
      <h1 class="text-3xl md:text-4xl font-semibold mb-3">Inventario {{ modelTitle }}</h1>
      <p class="text-base md:text-lg text-[#4b4f54] mb-8">
        Componente interno para explorar el inventario disponible en este proyecto.
      </p>

      <div class="grid md:grid-cols-3 gap-4">
        <article v-for="item in sampleCars" :key="item.name" class="border border-[#e3e5e8] rounded-xl p-4">
          <h2 class="font-semibold mb-1">{{ item.name }}</h2>
          <p class="text-sm text-[#6b6f74]">Autonomía: {{ item.range }}</p>
          <p class="text-sm text-[#6b6f74]">Precio: {{ item.price }}</p>
        </article>
      </div>

      <router-link to="/" class="inline-block mt-8 text-sm border-b border-[#171a20]">Volver al inicio</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InventoryView',
  props: {
    model: {
      type: String,
      default: 'model-y',
    },
  },
  computed: {
    modelTitle() {
      return this.model.replace('-', ' ').toUpperCase();
    },
    sampleCars() {
      return [
        { name: `${this.modelTitle} - Base`, range: '455 km', price: '42.990 EUR' },
        { name: `${this.modelTitle} - Long Range`, range: '565 km', price: '49.990 EUR' },
        { name: `${this.modelTitle} - Performance`, range: '528 km', price: '56.990 EUR' },
      ];
    },
  },
};
</script>
