<template>
  <header class="py-3 px-10 flex items-center fixed top-0 w-full justify-between z-20">
    <div class="flex flex-grow basis-0 text-white">
      <svg class="h-6 w-28" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7
   -7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l
   -38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7
   h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a
   9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
          fill="currentColor"></path>
      </svg>
    </div>
    <nav>
      <ul class="flex [&>li>a]:font-semibold text-white text-sm [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4">
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Carga</a></li>
      </ul>
    </nav>
    <nav class="flex-grow flex justify-end basis-0">
      <ul class="flex text-white text-sm [&>li>a]:inline-block [&>li>a]:py-2 [&>li>a]:px-4 [&>li>a]:font-semibold ">
        <li><a href="#">Soporte</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Menú</a></li>
      </ul>
    </nav>
  </header>

  <section class="bg-black  h-screen w-screen text-center overflow-hidden relative">
    <div class="z-30 flex flex-col relative h-full">
      <header>
        <h2 class="text-white pt-40  text-[40px] font-medium">Disfrute de Tesla</h2>
        <p class="text-white text-sm">Programe una prueba de conducción hoy mismo</p>
      </header>

      <footer class="flex flex-col flex-grow justify-end pb-20">
        <div>
        <a href="#" class="text-white rounded font-medium backdrop-blur-3xl px-12 py-2 border-[3px] inline-block text-sm hover:bg-white hover:text-black transition-colors">Prueba de conducción</a>
      </div>
      </footer>
    </div>

    <div class="absolute top-0 bottom-0 h-full w-full z-10">
      <video class="object-center object-cover h-full w-full" src="./assets/video.webm" autoplay muted loop></video>
    </div>

  </section>
</template>

<script>
import './assets/global.css'
import '@/assets/tailwind.css';

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
* {
  font-family: "Gotham SSm A", sans-serif;
}
</style>
