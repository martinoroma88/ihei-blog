<template>
	<div class="my-grid">
		<aside>
			<Sidebar :categories="pages" baseurl="institut" />
		</aside>
		
		<div class="md:col-span-3 space-y-8">
			<nuxt-content class="prose" :document="page" />
		</div>
	
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params, error}) {
			const pages = await $content("institut").sortBy("ordre", "asc").fetch();
			const page = pages.find(p => p.slug === params.subpage);
			if (!page) return error({ statusCode: 404 })
			return { pages, page};
		}
	}
</script>

<style>
.prose {
  max-width: none;
}
</style>
