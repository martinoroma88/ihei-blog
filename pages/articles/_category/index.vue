<template>
	<div class="md:grid grid-cols-4 gap-16">
		<aside>
			<Sidebar :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}"/>
		</aside>
		
		<div class="col-span-3">
			<p v-if="category.soustitre">{{category.soustitre}}</p>
			<nuxt-content class="font-serif text-gray-800 italic mb-8 underline-links" :document="category" />
			<Articles :posts="posts" baseurl="articles" />
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
