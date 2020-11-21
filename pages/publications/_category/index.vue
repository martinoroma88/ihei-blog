<template>
	<div class="my-grid">	
		<aside>
			<h1 class="lg:hidden mb-4">{{category.titre}}</h1>
			<Sidebar :categories="categories" baseurl="publications" :main="{url: '/publications/', title: 'Toutes les publications'}"/>
		</aside>
		
		<Publications class="md:col-span-3" :posts="posts" baseurl="publications"/>
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
