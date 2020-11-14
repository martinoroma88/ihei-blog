<template>
	<div>
		<div class="container lg:flex justify-between lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4">
				<!-- <Sidenav class="" /> -->
				<Categories class="sticky top-0 pt-2" :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}" />
			</aside>
			
			<!-- Posts feed -->
			<div class="lg:w-3/4">
				<p v-if="category.soustitre">{{category.soustitre}}</p>
				<nuxt-content class="font-serif text-gray-800 italic mb-8" :document="category" />
				<Articles class="flex-1" :posts="posts" baseurl="articles"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("categories").sortBy("ordre", "asc").fetch();
			const category = categories.find(c => c.slug === params.category);
			
			const posts = await $content("posts").where({ categories: { $contains: category.titre } }).sortBy("date", "desc").fetch();
			posts.forEach((p, i) => {
				p.category = category;
			})
			
			return { categories, category, posts };
		},
		layout: "homepage"
	}
</script>
