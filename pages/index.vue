<template>
	<div>
		<!-- Header -->
		<header class="bg-champagne pb-12 pt-6">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/4">
				
				</div>
				<div class="lg:w-3/4">
					<p class="text-sm">12-03-2020</p>
					<h1>Titre d'actualité du moment</h1>
					<p>Lorem ipsum dolor sit amet</p>
				</div>
			</div>
		</header>

		<div class="container lg:flex justify-between lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4 space-y-8">
				<!-- <Sidenav class="" /> -->
				<Categories class="sticky top-0 pt-16" :categories="categories" baseurl="articles"/>
			</aside>
			
			<!-- Posts feed -->
			<div class="lg:w-3/4">
				<Articles class="flex-1 pt-12 pr-16" :posts="posts" baseurl="articles"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content}) {
			const posts = await $content("posts").sortBy("date", "desc").fetch();
			const categories = await $content("categories").fetch();

			posts.forEach((p, i) => {
				let c = categories.find(c => p.categories.includes(c.titre));
				p.category = c;
			})
			return { posts, categories };
		}
	}
</script>