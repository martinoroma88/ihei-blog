<template>
	<div class="my-grid">
		<aside>
			<h1 class="lg:hidden mb-4">Publications</h1>
			<Sidebar :categories="categories" baseurl="publications" :main="{url: '/publications/', title: 'Toutes les publications'}"/>
		</aside>
		
		<Publications class="md:col-span-3" :posts="posts" baseurl="publications"/>
	</div>

</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("publication-categories").sortBy("ordre", "asc").fetch();
			
			const posts = await $content("publications").where({"category": {"$containsNone": ["Les Cahiers", "Il Messaggio - Le Message"]}}).sortBy("date", "desc").fetch();
			posts.forEach((p, i) => {
				if(p.category) {
					let c = categories.find(c => p.category === c.titre);
					p.categoryPopulated = c;
				}
			})

			return { categories, posts };
		}
	}
</script>