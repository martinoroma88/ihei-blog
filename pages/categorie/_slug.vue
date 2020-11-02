<template>
	<div>
		<h1>{{category.titre}}</h1>
		<nuxt-content :document="category" />

		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="categories" :category="category" />

			<!-- Articles -->
			<Articles class="lg:w-3/4" :posts="posts" />
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("categories").fetch();
			const category = categories.find(c => c.slug === params.slug);
			const posts = await $content("posts").where({ categories: { $contains: category.titre } }).sortBy("date", "desc").fetch();

			return { categories, category, posts };
		}
	}
</script>
