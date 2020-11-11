<template>
	<div>
		<!-- Header -->
		<header class="bg-champagne pb-12 pt-6">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/4">

				</div>
				<div class="lg:w-3/4">
					<p class="text-sm">Publications</p>
					<h1>{{category.titre}}</h1>
					<p v-if="category.soustitre">{{category.soustitre}}</p>
				</div>
			</div>
		</header>

		<div class="container lg:flex justify-between lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4 space-y-8">
				<!-- <Sidenav class="" /> -->
				<Categories class="sticky top-0 pt-16" :categories="categories" baseurl="publications"/>
			</aside>
			
			<!-- Posts feed -->
			<div class="lg:w-3/4">
				<Publications class="flex-1 pt-12 pr-16" :posts="posts" baseurl="publications"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("publication-categories").sortBy("ordre", "asc").fetch();
			const category = categories.find(c => c.slug === params.category);
			
			const posts = await $content("publications").where({ categories: { $contains: category.titre } }).sortBy("date", "desc").fetch();
			posts.forEach((p, i) => {
				p.category = category;
			})
			
			return { categories, category, posts };
		}
	}
</script>
