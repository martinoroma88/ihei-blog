<template>
	<div class="md:grid grid-cols-4 gap-16">
			<aside>
				<Sidebar :categories="categories" baseurl="articles" :main="{url: '/', title: 'Tous les articles'}"/>
			</aside>
			
			<Articles class="col-span-3" :posts="posts" baseurl="articles" />
	</div>
</template>

<script>
	export default {
		async asyncData({$content}) {
			const posts = await $content("posts").sortBy("date", "desc").fetch();
			const categories = await $content("categories").sortBy("ordre", "asc").fetch();

			posts.forEach((p, i) => {
				let c = categories.find(c => p.categories.includes(c.titre));
				p.category = c;
			})
			return { posts, categories };
		}
	}
</script>