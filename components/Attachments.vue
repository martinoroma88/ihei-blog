<template>
  <div class="font-sans">
      <a
        v-for="(a, i) in attachments"
        :key="i"
        :href="a.url"
        class="font-bold text-gray-200 shadow rounded px-4 py-2 hover:shadow-lg hover:text-gray-100 focus:shadow-none focus:text-gray-300 transition duration-75 bg-azure"
      >
        Télécharger : {{ a.titre }}
      </a>
  </div>
</template>

<script>
export default {
  props: {
    attachments: Array,
  },
};
</script>

