<template>
  <a
    :href="href"
    class="border-[3px] border-none bg-custom-color backdrop-blur-sm text-sm rounded font-medium text-white px-12 inline-flex items-center justify-center text-center whitespace-nowrap overflow-hidden text-ellipsis button-w-h hover:bg-white hover:text-black transition-colors"
  >
    <slot>Prueba de conducción</slot>
  </a>
</template>

<script>
export default {
  name: 'TestDriveButton',
  props: {
    href: {
      type: String,
      default: '#'
    }
  }
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
