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
		async asyncData({$content, params, error}) {
			const categories = await $content("publication-categories").sortBy("ordre", "asc").fetch();
			
			const posts = await $content("publications").where({"categories": {"$containsNone": ["Les Cahiers", "Il Messaggio - Le Message"]}}).sortBy("date", "desc").fetch();
			posts.forEach((p, i) => {
				if(p.categories) {
					let c = categories.find(c => p.categories.includes(c.titre));
					p.category = c;
				}
			})

			return { categories, posts };
		}
	}
</script>