<template>
	<div>
		<div class="container lg:flex justify-between lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4 space-y-8">
				<Categories class="sticky top-0 pt-3" :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}"/>
			</aside>
			
			<!-- Posts feed -->
			<div class="lg:w-3/4">
				<Articles class="flex-1 pt-3" :posts="posts" baseurl="articles" />
			</div>
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
		},
		layout: "homepage"
	}
</script>