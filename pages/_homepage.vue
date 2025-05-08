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
      <div v-if="vedette"
        class="leading-relaxed rounded bg-gray-200 overflow-hidden font-sans text-lighterblue relative z-0"
      >
        <img
          v-if="vedette.couverture"
          class="object-cover absolute w-full h-full inset-0"
          :src="vedette.couverture"
          alt=""
        />
        <div v-else class="absolute inset-0 bg-lighterblue"></div>
        <div
          class="inset-0 absolute bg-gradient-to-b from-transparent to-black opacity-25"
        ></div>
        <div class="md:col-span-2 px-4 py-8 md:px-10 md:pt-40 md:pb-8 relative text-white">
          <div>
            <div v-if="vedette.url">
              <a :href="vedette.url" target="_blank">
                <p class="text-2xl font-bold">{{vedette.titre}}</p>
                <Auteurs class="text-white" v-if="vedette.auteur" :author="vedette.auteur" />
              </a>
            </div>
            <n-link v-else :to="'/articles/'+vedette.categoryPopulated.slug+'/'+vedette.slug">
              <p class="text-2xl font-bold">
                {{vedette.titre}}
              </p>
              <Auteurs class="text-white" v-if="vedette.auteur" :author="vedette.auteur" />
            </n-link>
          </div>
        </div>
      </div>
      <Articles :posts="posts" baseurl="articles" />
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

    return { posts, vedette, categories };
  }
};
</script>
