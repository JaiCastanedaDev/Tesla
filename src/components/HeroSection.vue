<template>
        <section class="bg-black  h-screen w-full text-center overflow-hidden relative">
    <div class="z-30 flex flex-col relative h-full">
      <header>
        <h2 class="text-white pt-36  text-[40px] font-medium">Disfrute de Tesla</h2>
        <p class="text-white text-sm">Programe una prueba de conducción hoy mismo</p>
      </header>

      <footer class="flex flex-col flex-grow justify-end pb-20">
        <div>
          <TestDriveButton :href="testDriveHref">
            Prueba de conducción
          </TestDriveButton>
        </div>
      </footer>
    </div>

    <div class="absolute top-0 bottom-0 h-full w-full z-10">
      <video class="object-center object-cover h-full w-full" src="../assets/video.webm" autoplay muted loop></video>
    </div>
  </section>
</template>
<script>
import TestDriveButton from './TestDriveButton.vue';
export default {
    name: 'HeroSection',
    components: {
      TestDriveButton
    },
    props: {
      testDriveHref: {
        type: String,
        default: '#'
      }
    }
}
</script>
<style>
    
</style>