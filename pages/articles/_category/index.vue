<template>
	<div class="my-grid">
		<aside>
			<h1 class="lg:hidden mb-4">{{category.titre}}</h1>
			<Sidebar :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}"/>
		</aside>
		
		<div class="md:col-span-3 space-y-10">
			<nuxt-content class="static font-serif text-lightblue underline-links leading-relaxed p-3 lg:p-4 rounded bg-white shadow-lg" :document="category" />
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
		}
	}
</script>
