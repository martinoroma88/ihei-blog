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
      <div
        class="leading-relaxed rounded bg-white overflow-hidden shadow-lg font-sans text-lighterblue grid place-items-center md:grid-cols-3 grid-cols-1"
      >
        <img
          class="object-cover h-64 w-full"
          src="https://res.cloudinary.com/genesi-communication-design/image/upload/v1606215558/ihei/quran_os5xtg.jpg"
          alt=""
        />
        <div class="md:col-span-2 p-3 md:p-10">
					<p class="text-gray-500">01-12-2020</p>
          <p class="text-2xl font-bold">
            Lorem ipsum dolor sit amet conescit caveat illo.
          </p>
          <a class="text-gray-500 link block flex space-x-2" href="/">
            <span>En lire plus</span>
            <IconRight />
          </a>
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
      .only(["titre", "couverture", "slug", "auteur", "categories"])
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