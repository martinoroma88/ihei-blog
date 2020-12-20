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
        <form action="https://formcarry.com/s/QPgJV9vsOZ" method="POST" accept-charset="UTF-8" class="w-full space-y-2">
          <input class="border-lighterblue rounded border-2 py-1 px-2 w-full" type="email" name="Email" required placeholder="email">
          <input class="w-full font-sans border-gray-700 border-2 font-bold text-lighterblue bg-white shadow rounded px-4 py-2 hover:border-gray-800 hover:shadow-lg hover:text-lightblue focus:shadow-none focus:border-gray-900 focus:text-blue transition duration-75" type="submit" value="Envoyer">
          <label class="block mt-2 w-full font-sans" :class="'error' === 'policy' ? 'border-b border-red' : ''">
            <input value="J'ai lu et accepté la politique de confidentialité." name="données" class="mr-2 leading-tight" required type="checkbox">
            <span class="text-sm">
              J'ai lu et accepte la <a href="https://www.iubenda.com/privacy-policy/39983958" target="_blank"><u>Politique de confidentialité</u></a>.
            </span>
          </label>
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

