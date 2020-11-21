<template>
  <div class="flex items-center space-x-2 text-gray-700">
    <div v-if="icon">
      <IconUsers v-if="auteurs.length > 1 || auteurs[0] === 'IHEI'" />
      <IconUser v-else />
    </div>
    <p class="text-gray-700 font-sans">
      <span v-for="(a, i) in auteurs" :key="i">
        {{a}}
        <span v-if="i < auteurs.length - 1">,&nbsp;</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    auteurs: Array,
    icon: Boolean
  } 
}
</script>