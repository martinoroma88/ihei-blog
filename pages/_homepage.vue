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
      <div v-if="page === 1 && vedette"
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
      <Pagination :perPage="perPage" :page="page" :posts="totalPosts" />
    </div>
  </div>
</template>

<script>
const PER_PAGE = 6;

export default {
  async asyncData({ $content, params, error }) {
    const perPage = PER_PAGE;
    const page = params.homepage ? parseInt(params.homepage) : 1;
    let totalPosts = (await $content("posts").where({vedette: { $ne: true}}).fetch()).length;
    const skip = PER_PAGE * (page - 1);

    if (!page) return error({statusCode: 404});

    let posts = await $content("posts")
      .where({vedette: { $ne: true}})
      .only(["titre", "couverture", "url", "slug", "auteur", "category", "date"])
      .sortBy("date", "desc")
      .skip(skip)
      .limit(perPage)
      .fetch();
    const categories = await $content("categories")
      .sortBy("ordre", "asc")
      .fetch();
    if (!posts.length) return error({statusCode: 404});

    posts.forEach((p, i) => {
      let c = categories.find((c) => p.category === c.titre);
      p.categoryPopulated = c;
    });

    // handle vedette post    
    let vedette;
    vedette = await $content("posts").where({vedette : true}).fetch();
    vedette = vedette.length > 0 ? vedette[0] : false;
    if (vedette) {
      const fCategory = categories.find(c => vedette.category === c.titre);
      vedette.categoryPopulated = fCategory;
    }

    return { posts, vedette, categories, page, perPage, totalPosts };
  }
};
</script>
