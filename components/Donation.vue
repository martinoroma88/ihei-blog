<template>
  <div>
    <button class="hover:text-gray-800 focus:text-gray-900 transition duration-75 font-sans flex items-center space-x-2" @click="isOpen = true">
      <IconThumb />
      <span>Donation</span>
    </button>

    <div class="opacity-0 fixed inset-0 flex items-center justify-center z-50 transform transition duration-150  w-screen -screen" :class="isOpen ? 'opacity-100 scale-100 translate-y-0' : 'translate-y-full scale-0'">
      <div class="absolute inset-0" @click="isOpen = false"></div>
 
      <div class="relative space-y-4 shadow-2xl rounded bg-white p-3 lg:p-6 m-3 border-blue border">
        <h1 class="text-azure">Pour faire un don</h1>
        <p class="font-sans">Règlement par chèque bancaire à l’ordre de :</p>
        <p><b>Institut des Hautes Études Islamiques</b><br>
        B.P. 136<br>
        05004 GAP CEDEX<br></p>
        <hr>
        <p class="font-sans">Virement sur le compte bancaire BNP Paribas Embrun :</p>
        <p>IBAN : FR76 3000 4006 7600 0211 6486 749<br>
        BIC : BNPAFRPPAIP</p>

        <button @click="isOpen = false" class="font-sans border-gray-700 border-2 font-bold text-gray-700 bg-white shadow rounded px-4 py-2 hover:border-gray-800 hover:shadow-lg hover:text-gray-800 focus:shadow-none focus:border-gray-900 focus:text-gray-900 transition duration-75">Fermer</button>
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
  }
}
</script>

