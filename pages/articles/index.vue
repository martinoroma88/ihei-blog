<template>
	<div>
		<p><n-link to="/">Accueil</n-link> > Articles</p>
		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="categories" baseurl="articles" />
			
			<!-- Articles -->
			<Articles class="lg:w-3/4" :posts="posts" baseurl="articles" />
		</div>
	
	</div>
</template>

<script>
	export default {
		middleware: "redirect"
		// async asyncData({$content, params}) {
		// 	const categories = await $content("categories").sortBy("ordre", "asc").fetch();
			
		// 	const posts = await $content("posts").sortBy("date", "desc").fetch();
		// 	posts.forEach((p, i) => {
		// 		let c = categories.find(c => p.categories.includes(c.titre));
		// 		p.category = c;
		// 	})

		// 	return { categories, posts };
		// }
	}
</script>