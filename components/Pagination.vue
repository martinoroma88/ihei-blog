<template>
  <div class="w-full flex items-center justify-between space-x-2 mt-10 font-sans">
    <!-- Link PREV button -->
    <button class="font-bold text-lighterblue py-2 opacity-50 cursor-not-allowed" @click="doSomething">
      <IconLeft />	
    </button>
    <!-- Page numbers container -->
    <div class="flex space-x-2 text-lighterblue">
      <div class="flex items-center justify-center px-1 h-10 cursor-pointer transition duration-75 sm:px-2">1</div>
      <div class="flex items-center justify-center px-1 h-10 cursor-default transition duration-75 sm:px-2">&middot;&middot;&middot;</div>
      <div class="flex items-center justify-center px-1 h-10 cursor-pointer transition duration-75 sm:px-2">3</div>
      <div class="flex items-center justify-center px-1 h-10 cursor-default transition duration-75 sm:px-2 text-lightblue font-bold">4</div>
      <div class="flex items-center justify-center px-1 h-10 cursor-pointer transition duration-75 sm:px-2">5</div>
      <div class="flex items-center justify-center px-1 h-10 cursor-default transition duration-75 sm:px-2">&middot;&middot;&middot;</div>
      <div class="flex items-center justify-center px-1 h-10 cursor-pointer transition duration-75 sm:px-2">7</div>
    </div>
    <!-- Link NEXT button -->
    <button class="font-bold text-lighterblue py-2 hover:text-lightblue focus:shadow-none focus:text-blue transition duration-75" @click="doSomething">
      <IconRight />
    </button>
  </div>
</template>