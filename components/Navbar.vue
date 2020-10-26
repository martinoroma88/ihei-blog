<template>
    <!-- NAVBAR -->
    <nav class="w-full flex items-center justify-between z-20 mb-16">
        <!-- BRAND -->
        <div class="z-10 relative">
        <div>
            <n-link to="/">
                <img class="h-16" src="https://res.cloudinary.com/genesi-communication-design/image/upload/v1603723363/ihei/logo-ihei_qximqt.svg" alt="Logo IHEI Institut des Hautes Etudes Islamiques">
            </n-link>
        </div>
        </div>

        <!-- BG LAYER, second element because of .justify-between parent option -->
        <div :class="open ? 'opacity-100 delay-75' : 'delay-400 opacity-0'" class="lg:hidden transition duration-200 bg-gray-500 inset-0 absolute z-0"></div>

        <!-- HAMBURGER BTN -->
        <div @click="toggle()" class="lg:hidden w-6 h-10 py-2 flex flex-col justify-around cursor-default relative z-10">
        <div :class="open ? 'translate-y-2' : 'translate-y-0'" class="transform transition duration-100 w-full h-1 bg-black rounded-sm"></div>
        <div :class="open ? 'scale-x-0' : 'scale-x-1'" class="transform origin-right transition duration-75 w-full h-1 bg-black rounded-sm"></div>
        <div :class="open ? 'scale-x-0' : 'scale-x-1'" class="transform transition duration-100 w-full h-1 bg-black rounded-sm"></div>
        </div>

        <!-- NAVIGATION ITEMS -->
        <div ref="items" :class="open ? 'scale-100' : 'scale-0 lg:scale-100'" class="transform absolute lg:static inset-0 flex items-center justify-center flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 h-screen lg:h-auto w-full lg:w-auto">
        <a :class="open ? 'translate-y-0 opacity-100 delay-75' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" href="/">Nav item </a>
        <a :class="open ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" href="">Nav item two</a>
        <a :class="open ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" href="">Nav item three</a>
        <a :class="open ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" href="">Nav item four</a>
        <a :class="open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" href="">Nav item</a>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },
  watch: {
    $route() {
      this.open = false;
    }
  }
};
</script>

<style scoped>
  .nuxt-link-exact-active {
    @apply font-bold;
  }
</style>