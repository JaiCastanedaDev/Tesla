<template>
  <section class="min-h-screen bg-[#f6f8f9] text-[#171a20] px-6 py-16 md:px-16">
    <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
      <h1 class="text-3xl md:text-4xl font-semibold mb-3">Saber más: {{ topicTitle }}</h1>
      <p class="text-base md:text-lg text-[#4b4f54] mb-8">
        Página interna con información de {{ topicTitle }} dentro de este proyecto.
      </p>

      <ul class="grid gap-3 text-sm md:text-base text-[#31353a]">
        <li>Arquitectura eléctrica de alta eficiencia.</li>
        <li>Sistema avanzado de asistencia a la conducción.</li>
        <li>Actualizaciones por software y conectividad integrada.</li>
      </ul>

      <router-link to="/" class="inline-block mt-8 text-sm border-b border-[#171a20]">Volver al inicio</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LearnMoreView',
  props: {
    topic: {
      type: String,
      default: 'model-y',
    },
  },
  computed: {
    topicTitle() {
      return this.topic.replace('-', ' ').toUpperCase();
    },
  },
};
</script>
