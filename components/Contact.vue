<template>
  <div class="space-y-3">
    <h3 class="pb-2">{{title}}</h3>
    <div v-for="(n, i) in names" :key="i">
      <p>{{n.name}}</p>
      <p v-if="n.email"><a class="link underline" :href="'mailto:'+n.email">{{n.email}}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "names"]
}
</script>