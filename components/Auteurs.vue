<template>
  <div class="flex space-x-2 font-sans">
    <div v-if="icon">
      <IconUsers v-if="auteurs.length > 1 || auteurs[0] === 'IHEI'" />
      <IconUser v-else />
    </div>
    <p> 
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