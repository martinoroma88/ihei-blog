<template>
  <div class="grid auto-cols-max sm:grid-cols-2 gap-4">
    <div class="flex flex-col justify-between" v-for="(a, i) in attachments" :key="i">
      <div class="mb-3">
        <p>{{ a.titre }}</p>
      </div>
      <div>
        <a :href="a.url" class="font-sans bg-transparent border-gray-200 border-2 font-bold text-gray-200 shadow rounded px-4 py-2 hover:border-gray-100 hover:shadow-lg hover:text-gray-100 focus:shadow-none focus:border-gray-300 focus:text-gray-300 transition duration-75 bg-lightblue">
          Télécharger 
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      attachments: Array
    }
  }
</script>

