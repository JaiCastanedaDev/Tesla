<template>
        <section class="bg-black  h-screen w-full text-center overflow-hidden relative">
    <div class="z-30 flex flex-col relative h-full">
      <header>
        <h2 class="text-white pt-36  text-[40px] font-medium">Disfrute de Tesla</h2>
        <p class="text-white text-sm">Programe una prueba de conducción hoy mismo</p>
      </header>

      <footer class="flex flex-col flex-grow justify-end pb-20">
        <div>
        <a href="#" class="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12
         py-2 inline-block hover:bg-white hover:text-black transition-colors">Prueba de conducción</a>
      </div>
      </footer>
    </div>

    <div class="absolute top-0 bottom-0 h-full w-full z-10">
      <video class="object-center object-cover h-full w-full" src="../assets/video.webm" autoplay muted loop></video>
    </div>
  </section>
</template>
<script>
export default {
    name: 'HeroSection',
}
</script>
<style>
    
</style>