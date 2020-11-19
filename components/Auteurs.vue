<template>
  <p class="text-gray-700 font-sans">
    <span v-for="(a, i) in auteurs" :key="i">
      {{a}}
      <span v-if="i < auteurs.lenght">,&nbsp;</span>
    </span>
  </p>
</template>

<script>
export default {
  props: ["auteurs"]
}
</script>