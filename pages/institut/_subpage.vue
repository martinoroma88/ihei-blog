<template>
	<div>

		<header class="bg-champagne pb-12 pt-6">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/4">
				
				</div>
				<div class="lg:w-3/4">
					<p class="text-sm">L'Institut</p>
					<h1>{{page.titre}}</h1>
				</div>
			</div>
		</header>

		<div class="container lg:flex justify-between lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4 space-y-8">
				<!-- <Sidenav class="" /> -->
				<Categories class="sticky top-0 pt-16" :categories="pages" baseurl="institut"/>
			</aside>
			
			<!-- Posts feed -->
			<div class="lg:w-3/4 pt-16">
				<nuxt-content class="prose" :document="page" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const pages = await $content("institut").sortBy("ordre", "asc").fetch();
			const page = pages.find(p => p.slug === params.subpage);
			
			return { pages, page};
		}
	}
</script>
