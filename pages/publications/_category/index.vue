<template>
	<div class="my-grid">	
		<aside>
			<h1 class="lg:hidden mb-4">{{category.titre}}</h1>
			<Sidebar :categories="categories" baseurl="publications" :main="{url: '/publications/', title: 'Toutes les publications'}"/>
		</aside>
		
		<div class="md:col-span-3 space-y-10">
			<nuxt-content v-if="category.body.children.length > 0" class="static font-serif text-lightblue underline-links leading-relaxed" :document="category" />
			<Publications :posts="posts" baseurl="publications"/>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, error, params}) {
			const categories = await $content("publication-categories").sortBy("ordre", "asc").fetch();
			const category = categories.find(c => c.slug === params.category);
			if (!category) return error({statusCode: 404})

			const posts = await $content("publications").where({ category: category.titre }).only(["titre", "couverture", "url", "slug", "auteur", "category"]).sortBy("date", "desc").fetch();
			posts.forEach((p, i) => {
				p.categoryPopulated = category;
			})
			
			return { categories, category, posts };
		}
	}
</script>
