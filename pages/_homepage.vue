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
      <div v-if="page === 1"
        class="leading-relaxed rounded bg-gray-200 overflow-hidden font-sans text-lighterblue relative"
      >
        <img
          class="object-cover absolute w-full h-full inset-0"
          src="https://res.cloudinary.com/genesi-communication-design/image/upload/v1606215558/ihei/quran_os5xtg.jpg"
          alt=""
        />
        <div
          class="inset-0 absolute bg-gradient-to-b from-transparent to-black"
        ></div>
        <div class="md:col-span-2 px-4 py-8 md:px-10 md:pt-24 md:pb-8 relative text-white">
          <p>
            <a href="/">
              <p class="text-2xl font-bold">
                Lorem ipsum dolor sit amet conescit caveat illo
              </p>
              <p>01-12-2020 Adecco paresit utrurie elipsis</p>
            </a>
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
    const posts = await $content("posts")
      .only(["titre", "couverture", "url", "slug", "auteur", "categories"])
      .sortBy("date", "asc")
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
    return { posts, categories, page, perPage, totalPosts };
  },
};
</script>