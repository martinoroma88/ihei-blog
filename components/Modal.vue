<template>
  <div class="opacity-0 fixed inset-0 flex items-center justify-center z-50 transform transition duration-150  w-screen -screen" :class="isOpen ? 'opacity-100 scale-100 translate-y-0' : 'translate-y-full scale-0'">
    <div class="absolute inset-0" @click="isOpen = false"></div>
    <div class="relative space-y-4 shadow-2xl rounded bg-white p-3 lg:p-6 m-3 border-blue border">
      <slot></slot>
      <button @click="isOpen = false" class="font-sans border-gray-700 border-2 font-bold text-lighterblue bg-white shadow rounded px-4 py-2 hover:border-gray-800 hover:shadow-lg hover:text-lightblue focus:shadow-none focus:border-gray-900 focus:text-blue transition duration-75">Fermer</button>
    </div>
  </div>
</template>

