<template>
  <div class="my-grid">
    <aside>
      <h1 class="lg:hidden mb-4">Actualités</h1>
      <Sidebar
        :categories="categories"
        baseurl="articles"
        :main="{ url: '/', title: 'Actualités' }"
      />
    </aside>

    <div class="md:col-span-3 space-y-10">
      <ArticlesMasonry :posts="masonryPosts" baseurl="articles" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // Recupera le categorie
    const categories = await $content("categories")
      .sortBy("ordre", "asc")
      .fetch();

    // Recupera la configurazione della homepage
    let homepageConfig = await $content("homepage").fetch();
    homepageConfig = homepageConfig.length > 0 ? homepageConfig[0] : null;
    
    if (!homepageConfig) {
      return { posts: [], vedette: null, categories };
    }

    // Recupera l'articolo in evidenza
    let vedette = null;
    if (homepageConfig.vedette) {
      vedette = await $content("posts")
        .where({ slug: homepageConfig.vedette })
        .fetch();
      vedette = vedette.length > 0 ? vedette[0] : null;
      
      if (vedette) {
        const fCategory = categories.find(c => vedette.category === c.titre);
        vedette.categoryPopulated = fCategory;
      }
    }

    // Recupera gli articoli secondari
    let posts = [];
    if (homepageConfig.articles && homepageConfig.articles.length > 0) {
      // Crea un array di slugs dagli articoli selezionati
      const articleSlugs = homepageConfig.articles.map(item => item.article);
      
      // Recupera i dettagli completi di ciascun articolo
      posts = await $content("posts")
        .where({ slug: { $in: articleSlugs } })
        .only(["titre", "couverture", "url", "slug", "auteur", "category", "date"])
        .fetch();
      
      // Ordina gli articoli secondo l'ordine specificato nella configurazione
      posts.sort((a, b) => {
        const indexA = articleSlugs.indexOf(a.slug);
        const indexB = articleSlugs.indexOf(b.slug);
        return indexA - indexB;
      });

      // Popola le informazioni di categoria per ciascun post
      posts.forEach((post) => {
        const category = categories.find((c) => post.category === c.titre);
        post.categoryPopulated = category;
      });
    }

    // Costruisce l'elenco per la masonry includendo il post in evidenza come primo
    let masonryPosts = []
    if (vedette) {
      masonryPosts.push(vedette)
    }
    const filtered = posts.filter(p => !vedette || p.slug !== vedette.slug)
    masonryPosts = masonryPosts.concat(filtered)

    return { posts, vedette, categories, masonryPosts };
  }
};
</script>
