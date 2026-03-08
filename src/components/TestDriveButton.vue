<template>
  <component
    :is="linkTag"
    v-bind="linkAttrs"
    class="border-[3px] border-none bg-custom-color backdrop-blur-sm text-sm rounded font-medium text-white px-12 inline-flex items-center justify-center text-center whitespace-nowrap overflow-hidden text-ellipsis button-w-h hover:bg-white hover:text-black transition-colors"
  >
    <slot>Prueba de conducción</slot>
  </component>
</template>

<script>
export default {
  name: 'TestDriveButton',
  props: {
    href: {
      type: String,
      default: '#'
    }
  },
  computed: {
    isInternalRoute() {
      return this.href.startsWith('/');
    },
    linkTag() {
      return this.isInternalRoute ? 'router-link' : 'a';
    },
    linkAttrs() {
      return this.isInternalRoute ? { to: this.href } : { href: this.href };
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
