<template>
  <section class="min-h-screen bg-[#f4f7fa] text-[#171a20] px-6 py-16 md:px-16">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
      <h1 class="text-3xl md:text-4xl font-semibold mb-3">Pedido personalizado {{ modelTitle }}</h1>
      <p class="text-base md:text-lg text-[#4b4f54] mb-8">
        Vista interna para configurar tu Tesla sin salir de esta aplicación.
      </p>

      <div class="grid gap-4">
        <label class="grid gap-2">
          <span class="text-sm">Color</span>
          <select class="border border-[#d8dadd] rounded-lg px-4 py-3">
            <option>Negro sólido</option>
            <option>Blanco perla</option>
            <option>Azul profundo</option>
          </select>
        </label>
        <label class="grid gap-2">
          <span class="text-sm">Llantas</span>
          <select class="border border-[#d8dadd] rounded-lg px-4 py-3">
            <option>19 pulgadas</option>
            <option>20 pulgadas</option>
            <option>21 pulgadas</option>
          </select>
        </label>
      </div>

      <router-link to="/" class="inline-block mt-8 text-sm border-b border-[#171a20]">Volver al inicio</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CustomOrderView',
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
  },
};
</script>
