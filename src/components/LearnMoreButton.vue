<template>
  <button
    class="border-[3px] border-none bg-[#f4f4f4] backdrop-blur-[8px] text-sm rounded font-medium text-[#393c41] px-12 py-2 inline-block button-w-h hover:bg-white hover:text-black transition-colors"
    @click="$emit('click')"
  >
    <slot>Saber más</slot>
  </button>
</template>

<script>
export default {
  name: 'LearnMoreButton',
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
