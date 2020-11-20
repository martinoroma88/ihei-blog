<template>
	<div class="my-grid">
		<aside>
			<Sidebar :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}"/>
		</aside>
		
		<div class="md:col-span-3 space-y-8">
			<nuxt-content class="static font-serif text-gray-800 underline-links leading-relaxed p-2 lg:p-4 rounded bg-gray-100" :document="category" />
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

<style scoped>
.nuxt-content-container { position: static !important; }
</style>