<template>
	<div>

		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="pages" baseurl="institut" />

			<nuxt-content class="prose" :document="page" />
		</div>
	
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const pages = await $content("institut").sortBy("ordre", "asc").fetch();
			const page = pages.find(p => p.slug === 'origines-et-finalites');
			return { pages, page };
		}
	}
</script>