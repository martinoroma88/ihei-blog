<template>
  <div>

    <h1>{{categorie.titre}}</h1>

    <nuxt-content :document="categorie" />

    <!-- List of categories with three featured articles each -->
    <!-- <section class="space-y-6">
      <div v-for="p in posts" :key="p.slug">
        <p v-if="p.url">
          <span class="text-gray-600">{{$dateFns.format(new Date(p.date), 'dd/MM/yyyy')}}&nbsp;&nbsp;</span><br class="lg:hidden">
          <a :href="p.url" target="_blank">{{p.titre}}</a>
        </p>

        <p v-else>
          <span class="text-gray-600">{{$dateFns.format(new Date(p.date), 'dd/MM/yyyy')}}&nbsp;&nbsp;</span><br class="lg:hidden">
          <n-link :to="'/articles/'+p.slug">{{p.titre}}</n-link>
        </p>
      </div> 
    </section> -->
  </div>
</template>

<script>
export default {
    async asyncData({$content, params}) {
        const categorie = await $content("categories").where({slug: params.slug}).fetch();
        const posts = await $content("posts").where({categorie: {$in: [categorie.titre]}}).sortBy("date", "desc").fetch();

        return { categorie: categorie[0], posts };
    }
}
</script>

