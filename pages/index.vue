<template>
  <div>

    <!-- List of categories with three featured articles each -->
    <p v-for="(p, i) in posts" :key="i"><n-link :to="'/articles/'+p.slug">{{p.titre}}</n-link></p> 
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const posts = await $content("posts").fetch();

    return { posts };
  }
}
</script>

