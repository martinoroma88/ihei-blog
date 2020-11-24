<template>
	<div class="my-grid">
		<aside class="md:sticky top-0 lg:space-y-4">
			<h1 class="lg:hidden mb-4">Tous les articles</h1>
			<Sidebar :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}"/>
		</aside>

		<div class="md:col-span-3">
			<Articles :posts="posts" baseurl="articles" />
			<Pagination />
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content}) {
			const posts = await $content("posts").sortBy("date", "desc").fetch();
			const categories = await $content("categories").sortBy("ordre", "asc").fetch();

			posts.forEach((p, i) => {
				let c = categories.find(c => p.categories.includes(c.titre));
				p.category = c;
			})
			return { posts, categories };
		}
	}
</script>