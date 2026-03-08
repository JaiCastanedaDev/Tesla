<template>
  <section class="min-h-screen bg-[#f8f9fb] text-[#171a20] px-6 py-16 md:px-16">
    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
      <h1 class="text-3xl md:text-4xl font-semibold mb-3">Tienda: {{ categoryTitle }}</h1>
      <p class="text-base md:text-lg text-[#4b4f54] mb-8">
        Componente interno para comprar {{ categoryTitle }} sin salir del proyecto.
      </p>

      <div class="grid md:grid-cols-2 gap-4">
        <article v-for="item in products" :key="item.name" class="border border-[#e3e5e8] rounded-xl p-4">
          <h2 class="font-semibold mb-1">{{ item.name }}</h2>
          <p class="text-sm text-[#6b6f74]">{{ item.description }}</p>
          <p class="text-sm font-medium mt-2">{{ item.price }}</p>
        </article>
      </div>

      <router-link to="/" class="inline-block mt-8 text-sm border-b border-[#171a20]">Volver al inicio</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShopView',
  props: {
    category: {
      type: String,
      default: 'accesorios',
    },
  },
  computed: {
    categoryTitle() {
      return this.category.replace('-', ' ').toUpperCase();
    },
    products() {
      return [
        { name: 'Wall Connector', description: 'Carga domestica de alta velocidad.', price: '495 EUR' },
        { name: 'Organizador de consola', description: 'Aprovecha el espacio interior.', price: '39 EUR' },
      ];
    },
  },
};
</script>
