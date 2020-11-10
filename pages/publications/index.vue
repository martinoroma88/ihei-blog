<template>
	<div>
		<p><n-link to="/">Home</n-link> > Publications</p>
		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="categories" baseurl="publications" />
			
			<!-- Publication Articles -->
			<Articles class="lg:w-3/4" :posts="posts" baseurl="publications"/>
		</div>
	
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("publication-categories").sortBy("ordre", "asc").fetch();
			
			const posts = await $content("publications").sortBy("date", "desc").fetch();
			posts.forEach((p, i) => {
				let c = categories.find(c => p.categories.includes(c.titre));
				p.category = c;
			})

			return { categories, posts };
		}
	}
</script>