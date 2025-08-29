<template>
  <div>
    <!-- Variante MOBILE: solo testo con mailto -->
    <div class="donation--mobile md:hidden font-sans text-white text-base leading-6 p-4" role="region" aria-labelledby="donation-mobile-title">
      <p id="donation-mobile-title" class="sr-only">Donation</p>
      <p style="max-width:65ch">
        Pour effectuer un don, merci de bien vouloir contacter l’IHEI par mail :
        <a
          class="link break-words underline"
          href="mailto:ihei@ihei-asso.org"
          aria-label="Contacter l’IHEI par mail"
        >ihei@ihei-asso.org</a>
      </p>
    </div>

    <!-- Variante DESKTOP: UI esistente -->
    <div class="donation--desktop hidden md:block">
      <button class="hover:text-lightblue focus:text-blue transition duration-75 font-sans flex items-center space-x-2" @click="toggle">
        <IconThumb />
        <span>Donation</span>
      </button>

      <div class="opacity-0 fixed inset-0 flex items-center justify-center z-50 transform transition duration-300 overflow-auto text-lightblue" :class="isOpen ? 'opacity-100 scale-100 translate-y-0' : 'translate-y-full scale-50'">
        <div class="absolute inset-0" @click="toggle"></div>
        <div class="relative space-y-4 shadow-2xl rounded bg-white p-3 lg:p-6 m-3 border-blue border">
          <h1 class="text-azure">Pour faire un don</h1>
          <p class="font-sans">Virement sur le compte bancaire Crédit Mutuel :</p>
          <p>IBAN : FR76 1027 8090 7500 020 39290 104<br>
          BIC : CMCI FR 2A</p>
          <hr>
          <p class="font-sans">Règlement par chèque bancaire à l’ordre de :</p>
          <p><b>Institut des Hautes Études Islamiques</b><br>
          B.P. 136<br>
          05004 GAP CEDEX<br></p>

          <button @click="toggle" class="font-sans border-gray-700 border-2 font-bold text-lighterblue bg-white shadow rounded px-4 py-2 hover:border-gray-800 hover:shadow-lg hover:text-lightblue focus:shadow-none focus:border-gray-900 focus:text-blue transition duration-75">Fermer</button>
        </div>
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

