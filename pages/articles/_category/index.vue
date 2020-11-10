<template>
	<div>
		<p><n-link to="/">Home</n-link> > <n-link to="/">Articles</n-link> > {{category.titre}}</p>
		<h1>{{category.titre}}</h1>
		<h2 v-if="category.soustitre">{{category.soustitre}}</h2>

		<nuxt-content :document="category" />

		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="categories" :category="category" baseurl="articles" />
			
			<!-- Articles -->
			<Articles class="lg:w-3/4" :posts="posts" baseurl="articles"/>
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
