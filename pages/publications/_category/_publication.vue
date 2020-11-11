<template>
	<div>
		<header class="bg-champagne pb-12 pt-6">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/4">
					<p class="text-sm mt-2"><n-link to="/publications/">Publications</n-link> > <br> <n-link class="transparent" :to="'/articles/'+category.slug+'/'">{{category.titre}}</n-link></p>
				</div>
				<div class="lg:w-2/4">
					<h1>{{post.titre}}</h1>
					<p v-if="post.soustitre">{{post.soustitre}}</p>
				</div>
			</div>
		</header>

		<div class="container flex lg:space-x-8">
			<aside class="lg:w-1/4">
				
			</aside>
			<div class="lg:w-2/3 pt-16">
				<nuxt-content class="prose" :document="post" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const post = await $content("publications", params.publication).fetch();
			const category = await $content("publication-categories", params.category).fetch();
			return {post, category};
		}
	}
</script>

<style>
	.prose {
		max-width: none;
	}
</style>