<template>
	<div class="my-grid">
		<aside class="md:sticky top-0 lg:space-y-4">
			<h1 class="lg:hidden mb-4">Tous les articles</h1>
			<Sidebar :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}"/>
		</aside>

		<div class="md:col-span-3">
			<Articles :posts="posts" baseurl="articles" />
			<Pagination :perPage="perPage" :page="page" :posts="totalPosts" />
		</div>
	</div>
</template>

<script>
	const PER_PAGE = 12

	export default {
		async asyncData({$content, params}) {
			const perPage = PER_PAGE;
			const page = parseInt(params.homepage || 1) || 1;
			const totalPosts = (await $content("posts").fetch()).length;
			const skip = PER_PAGE * (page - 1);
			const posts = await $content("posts").only(["titre", "couverture", "slug", "auteur", "categories"])
				.sortBy("date", "asc").skip(skip).limit(perPage).fetch();
			const categories = await $content("categories")
				.sortBy("ordre", "asc").fetch();
			if (!posts.length) throw new Error('Not found')

			posts.forEach((p, i) => {
				let c = categories.find(c => p.categories.includes(c.titre));
				p.category = c;
			})
			return { posts, categories, page, perPage, totalPosts };
		}
	}
</script>