<template>
	<div>
		<p><n-link to="/">Home</n-link></p>
		<h1>{{page.titre}}</h1>
		<h2 v-if="page.soustitre">{{page.soustitre}}</h2>
		<div class="lg:flex justify-between mt-10">
			<ul class="lg:order-last">
				<li>
					<n-link class="text-white hover:text-gray-600" to="/">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">Toutes les articles</span>
					</n-link>
				</li>
				<li v-for="p in pages" :key="p.slug">
					<div v-if="page && p.slug === page.slug" class="cursor-default font-bold">
						<arrow-right-icon class="inline transition duration-75" />
						<span>{{p.titre}}</span>
					</div>
					<n-link v-else class="text-white hover:text-gray-600" :to="'/institut/'+p.slug">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">{{p.titre}}</span>
					</n-link>
				</li>
			</ul>
			<nuxt-content class="prose" :document="page" />
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const pages = await $content("institut").fetch();
			const page = pages.find(p => p.slug === params.subpage);
			
			return { pages, page };
		}
	}
</script>
