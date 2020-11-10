<template>
	<div>
		<p><n-link to="/">Home</n-link></p>
		<h1>{{page.titre}}</h1>
		<h2 v-if="page.soustitre">{{page.soustitre}}</h2>
		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="pages" :category="page" baseurl="institut" />

			<nuxt-content class="prose" :document="page" />
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const pages = await $content("institut").fetch();
			const page = pages.find(p => p.slug === params.subpage);
			
			return { pages, page};
		}
	}
</script>
