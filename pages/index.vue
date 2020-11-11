<template>
	<div>
		<div class="bg-champagne">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/4">
					<h1>Titre d'actualité du moment</h1>
					<p>12-03-2020</p>
					<p>En savoir plus</p>
				</div>
				<div class="lg:w-1/2">
					
				</div>
			</div>
		</div>

		<div class="container lg:flex justify-between">
			<!-- Menu -->
			<div>
				<Sidenav class="sticky top-0 pt-12" />
			</div>

			<!-- Categories -->
			<div class="lg:ml-3 lg:mr-16">
				<div class="sticky top-0 pt-12">
					<Categories class="lg:pl-3 lg:border-l" :categories="categories" baseurl="articles"/>
				</div>
			</div>

			<!-- Articles -->
			<articles class="flex-1 pt-12" :posts="posts" baseurl="articles"/>
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