<template>
  <button
    class="border-[3px] border-none bg-custom-color backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block button-w-h hover:bg-white hover:text-black transition-colors"
    @click="$emit('click')"
  >
    <slot>Prueba de conducción</slot>
  </button>
</template>

<script>
export default {
  name: 'TestDriveButton',
};
</script>

<style scoped>
.button-w-h {
  width: 260px;
  height: 40px;
}
@media (max-width: 768px) {
  .button-w-h {
    width: 305px;
    height: 40px;
  }
}
</style>
