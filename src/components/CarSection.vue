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
            <TestDriveButton v-if="$slots['title-button-1']" :href="button1Href">
              <template v-if="$slots['title-button-1']" #default>
                <slot name="title-button-1"></slot>
              </template>
            </TestDriveButton>
          </div>
          <div v-if="showButton2">
            <LearnMoreButton v-if="$slots['title-button-2']" :href="button2Href">
              <template v-if="$slots['title-button-2']" #default>
                <slot name="title-button-2"></slot>
              </template>
            </LearnMoreButton>
          </div>
        </div>
      </footer>
       <div class="pb-4 button-padding">
            <p v-if="showButton3"
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
import TestDriveButton from './TestDriveButton.vue';
import LearnMoreButton from './LearnMoreButton.vue';

export default {
  name: "CarSection",
  components: {
    TestDriveButton,
    LearnMoreButton
  },
  props: {
    imageCar: String,
    button1Href: {
      type: String,
      default: '#'
    },
    button2Href: {
      type: String,
      default: '#'
    }
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
@media (max-width: 768px) {
  .button-w-h{
    width: 305px;
    height: 40px;
  }
  .button-padding{
    padding-bottom: 6rem;
  }
}
</style>
