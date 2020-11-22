<template>
  <div>
    <button class="hover:text-lightblue focus:text-blue transition duration-75 font-sans flex items-center space-x-2" @click="toggle">
      <IconMail />
      <span>Newsletter</span>
    </button>

    <div class="opacity-0 fixed inset-0 flex items-center justify-center z-50 transform transition duration-300 overflow-auto text-lightblue" :class="isOpen ? 'opacity-100 scale-100 translate-y-0' : 'translate-y-full scale-50'">
      <div class="absolute inset-0" @click="toggle"></div>

      <div class="relative space-y-4 shadow-2xl rounded bg-white p-3 lg:p-6 m-3 border-blue border">
        <h1 class="text-azure">Newsletter</h1>
        <p>Entrez votre adresse email pour vous inscrire.</p>
        <form action="https://formcarry.com/s/QPgJV9vsOZ" method="POST" accept-charset="UTF-8" class="md:flex w-full md:space-x-2 md:space-y-0 space-y-2">
          <input class="border-lighterblue rounded border-2 py-1 px-2 w-full md:w-2/3" type="email" name="Email" required placeholder="email">
          <input class="w-full md:w-1/3 rounded border-azure border-2 shadow hover:shadow-lg hover:text-lightblue focus:shadow-none transition duration-75" type="submit" value="Envoyer">
        </form>
        
        <button @click="toggle" class="font-sans border-gray-700 border-2 font-bold text-lighterblue bg-white shadow rounded px-4 py-2 hover:border-gray-800 hover:shadow-lg hover:text-lightblue focus:shadow-none focus:border-gray-900 focus:text-blue transition duration-75">Fermer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }  
  },
  methods: {
    toggle() {
      if(!this.isOpen) {
        this.isOpen = true;
        // document.querySelector('body').style.overflow = "hidden";
      } else {
        this.isOpen = false;
        // document.querySelector('body').style.overflow = "auto";
      }
    }
  }
}
</script>

