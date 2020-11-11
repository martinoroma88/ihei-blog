<template>
	<div>
		<!-- Header -->
		<!-- <header class="bg-champagne pb-12 pt-6">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/4">
				
				</div>
				<div class="lg:w-3/4">
					<h1>Publications</h1>
				</div>
			</div>
		</header> -->

		<div class="container lg:flex justify-between lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4 space-y-8">
				<!-- <Sidenav class="" /> -->
				<Categories class="sticky top-0 pt-16" :categories="categories" baseurl="publications" :main="{url: '/publications/', title: 'Tous les publications'}" />
			</aside>
			
			<!-- Posts feed -->
			<div class="lg:w-3/4 pt-12">
				<h1>Publications</h1>
				<Publications class="flex-1" :posts="posts" baseurl="publications"/>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("publication-categories").sortBy("ordre", "asc").fetch();
			
			const posts = await $content("publications").where({"categories": {"$containsNone": ["Les Cahiers", "Il Messaggio - Le Message"]}}).sortBy("date", "desc").fetch();
			posts.forEach((p, i) => {
				let c = categories.find(c => p.categories.includes(c.titre));
				p.category = c;
			})

			return { categories, posts };
		}
	}
</script>