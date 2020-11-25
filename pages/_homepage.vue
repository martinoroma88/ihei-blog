<template>
  <div class="my-grid">
    <aside class="md:sticky top-0">
      <h1 class="lg:hidden mb-4">Tous les articles</h1>
      <Sidebar
        :categories="categories"
        baseurl="articles"
        :main="{ url: '/', title: 'Tous les articles' }"
      />
    </aside>

    <div class="md:col-span-3 space-y-10">
      <div v-if="page === 1 && featured"
        class="leading-relaxed rounded bg-gray-200 overflow-hidden font-sans text-lighterblue relative"
      >
        <img
          v-if="featured.couverture"
          class="object-cover absolute w-full h-full inset-0"
          :src="featured.couverture"
          alt=""
        />
        <div v-else class="absolute inset-0 bg-lighterblue"></div>
        <div
          class="inset-0 absolute bg-gradient-to-b from-transparent to-black opacity-25"
        ></div>
        <div class="md:col-span-2 px-4 py-8 md:px-10 md:pt-40 md:pb-8 relative text-white">
          <p>
            <n-link :to="'/'+articles+'/'+featured.category.slug+'/'+featured.slug">
              <p class="text-2xl font-bold">
                {{featured.titre}}
              </p>
              <Auteurs class="text-white" f-if="featured.auteur" :auteurs="featured.auteur" />
            </n-link>
          </p>
        </div>
      </div>
      <Articles :posts="posts" baseurl="articles" />
      <Pagination :perPage="perPage" :page="page" :posts="totalPosts" />
    </div>
  </div>
</template>

<script>
const PER_PAGE = 12;

export default {
  async asyncData({ $content, params }) {
    const perPage = PER_PAGE;
    const page = parseInt(params.homepage || 1) || 1;
    const totalPosts = (await $content("posts").fetch()).length;
    const skip = PER_PAGE * (page - 1);



    let posts = await $content("posts")
      .where({featured: { $ne: true}})
      .only(["titre", "couverture", "url", "slug", "auteur", "categories"])
      .sortBy("date", "desc")
      .skip(skip)
      .limit(perPage)
      .fetch();
    const categories = await $content("categories")
      .sortBy("ordre", "asc")
      .fetch();
    if (!posts.length) throw new Error("Not found");

    posts.forEach((p, i) => {
      let c = categories.find((c) => p.categories.includes(c.titre));
      p.category = c;
    });

    // handle featured post    
    let featured;
    featured = await $content("posts").where({featured : true}).fetch();
    featured = featured.length > 0 ? featured[0] : false;
    if(featured) {
      const fCategory = categories.find(c => featured.categories.includes(c.titre));
      featured.category = fCategory;
    }

    return { posts, featured, categories, page, perPage, totalPosts };
  }
};
</script>