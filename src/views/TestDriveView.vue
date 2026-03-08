<template>
  <section class="min-h-screen bg-[#f8f8f8] text-[#171a20] px-6 py-16 md:px-16">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
      <h1 class="text-3xl md:text-4xl font-semibold mb-3">Prueba de conducción</h1>
      <p class="text-base md:text-lg text-[#4b4f54] mb-8">
        Esta es una vista interna del proyecto para programar una prueba de conducción.
      </p>

      <form class="grid gap-4" @submit.prevent>
        <input class="border border-[#d8dadd] rounded-lg px-4 py-3" type="text" placeholder="Nombre completo" />
        <input class="border border-[#d8dadd] rounded-lg px-4 py-3" type="email" placeholder="Correo electrónico" />
        <select class="border border-[#d8dadd] rounded-lg px-4 py-3">
          <option>Model Y</option>
          <option>Model 3</option>
          <option>Model S</option>
          <option>Model X</option>
        </select>
        <button class="bg-[#171a20] text-white rounded-lg px-5 py-3 font-medium" type="submit">
          Solicitar prueba
        </button>
      </form>

      <router-link to="/" class="inline-block mt-8 text-sm border-b border-[#171a20]">Volver al inicio</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestDriveView',
};
</script>
