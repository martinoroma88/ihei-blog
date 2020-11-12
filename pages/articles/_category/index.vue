<template>
	<div>
		<!-- Header -->
		<header class="pb-12 pt-6">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/4">
					<h1>{{category.titre}}</h1>
					<p v-if="category.soustitre">{{category.soustitre}}</p>
				</div>
				<div class="lg:w-3/4 italic text-gray-800">
					<nuxt-content :document="category" />
				</div>
			</div>
		</header>
		


		<div class="container lg:flex justify-between lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4">
				<!-- <Sidenav class="" /> -->
				<Categories class="sticky top-0 pt-16" :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}" />
			</aside>
			
			<!-- Posts feed -->
			<div class="lg:w-3/4">
				<Articles class="flex-1 pt-12" :posts="posts" baseurl="articles"/>
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
