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
    // Recupera categorie
    const categories = await $content("categories")
      .sortBy("ordre", "asc")
      .fetch();

    // Recupera l'articolo in evidenza
    let vedette;
    vedette = await $content("posts").where({vedette : true}).fetch();
    vedette = vedette.length > 0 ? vedette[0] : false;
    if (vedette) {
      const fCategory = categories.find(c => vedette.category === c.titre);
      vedette.categoryPopulated = fCategory;
    }

    // Recupera gli articoli selezionati per la homepage (massimo 6)
    let posts = await $content("posts")
      .where({
        in_homepage: true,
        vedette: { $ne: true }
      })
      .only(["titre", "couverture", "url", "slug", "auteur", "category", "date"])
      .sortBy("date", "desc")
      .limit(6)
      .fetch();

    // Popola le informazioni di categoria per ciascun post
    posts.forEach((p) => {
      let c = categories.find((c) => p.category === c.titre);
      p.categoryPopulated = c;
    });

    return { posts, vedette, categories };
  }
};
</script>
