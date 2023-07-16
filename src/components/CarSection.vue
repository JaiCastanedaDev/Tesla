<template>
  <section
    class="bg-black h-screen w-full text-center overflow-hidden relative"
  >
    <div class="z-30 flex flex-col relative h-full">
      <header>
        <h2 class="text-black pt-32 text-[40px] font-medium">
          <slot name="title"></slot>
        </h2>
        <div class="flex justify-center">
          <p class="text-black text-sm border-b-[1px] border-black">
            <slot name="description"></slot>
          </p>
        </div>
      </header>

      <footer class="flex flex-col flex-grow justify-end pb-8">
        <div class="flex flex-row justify-center gap-5 flex-wrap">
          <div v-if="showButton1">
            <a
              href="#"
              class="border-[3px] border-none bg-custom-color backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block button-w-h
               hover:bg-white hover:text-black transition-colors"
              hidden
            >
              <slot name="title-button-1"></slot>
            </a>
          </div>
          <div v-if="showButton2">
            <a
              href="#"
              class="border-[3px] border-none bg-[#f4f4f4] backdrop-blur-[8px] text-sm rounded font-medium text-[#393c41] px-12 py-2 inline-block button-w-h
               hover:bg-white hover:text-black transition-colors"
              hidden
            >
              <slot name="title-button-2"></slot>
            </a>
          </div>
        </div>
      </footer>
       <div class="pb-4" v-if="showButton3">
            <p
              href="#"
              class="border-b-[1px] border-black text-xs text-black inline-block"
              hidden
            >
              <slot name="title-button-3"></slot>
          </p>
          </div>
    </div>

    <div class="absolute top-0 bottom-0 h-full w-full z-10">
      <slot name="image"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "CarSection",
  props: {
    imageCar: String,
  },
  data() {
    return {
      showButton1: false,
      showButton2: false,
      showButton3: false,
    };
  },
  mounted() {
    this.showButton1 = this.$slots['title-button-1'];
    this.showButton2 = this.$slots['title-button-2'];
    this.showButton3 = this.$slots['title-button-3'];
  }
};
</script>
<style scoped>
.button-w-h{
  width: 260px;
  height: 40px;
}
</style>
