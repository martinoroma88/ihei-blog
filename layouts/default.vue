<template>
  <div class="text-blue font-serif relative">
    <div id="deco" class="bg-gray-100 absolute z-0"></div>
    <div class="container relative z-10">
      <Navbar />
      <Nuxt />
      <Myfooter />
    </div>
    <div id="deco2" class="bg-gray-200 bottom-0 absolute w-screen z-0"></div>
  </div>
</template>

<style scoped>
#deco {
  height: 80vw;
  width: 80vw;
  top: -40vw;
  left: -26vw;
  clip-path: polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%);
}
#deco2 {
  height: 27%;
  clip-path: polygon(0 50%, 100% 0, 100% 100%, 0% 100%);
}

</style>
