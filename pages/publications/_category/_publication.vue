<template>
  <div class="my-grid">
    <aside class="text-lighterblue">
      <div class="lg:sticky top-0 space-y-4 text-sm">
        <img
          v-if="post.couverture"
          :src="post.couverture"
          class="w-full mb-4 lg:mb-0 object-contain rounded overflow-hidden"
          alt=""
        />
        <p>
          <n-link
            class="flex space-x-2 link font-sans"
            :to="'/publications/' + category.slug + '/'"
          >
            <IconCollection />
            <span>{{ category.titre }}</span>
          </n-link>
        </p>
        <Share />
      </div>
    </aside>

    <article class="md:col-span-3 space-y-8">
      <h1>{{ post.titre }}</h1>
      <meta property="og:title" :content="post.titre" />
      <meta property="og:image" :content="post.couverture" v-if="post.couverture" />
      <p v-if="post.soustitre">{{ post.soustitre }}</p>
      <Auteurs v-if="post.auteur" class="text-lighterblue" :author="post.auteur" icon />
      <Attachments v-if="post.annexes" :attachments="post.annexes" />
      <nuxt-content class="prose" :document="post" />
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.titre,
    };
  },
  async asyncData({ $content, error, params }) {
    try {
      const post = await $content("publications", params.publication).fetch();
      const category = await $content(
        "publication-categories",
        params.category
      ).fetch();
      return { post, category };
    } catch (err) {
      console.error(err)
      error({ statusCode: 404 })
    }
  },
};
</script>

<style>
.prose {
  max-width: none;
}
</style>

