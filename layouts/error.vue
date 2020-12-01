<template>
  <section class="p-4 relative flex items-center justify-center text-center">
    <div class="relative flex flex-col items-center justify-center py-24">
      <h1 class="text-5xl">{{ error.statusCode }}</h1>
      <p class="font-bold text-3xl mb-6">Page non trouvée</p>
      <n-link to="/" class="hover:text-lightblue focus:text-blue transition duration-75 font-sans flex items-center space-x-2" @click="toggle">
        <IconMail />
        <span>Accueil</span>
      </n-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"]
};
</script>
