<template>
	<div>
		<header class="bg-champagne pb-6 pt-3">
			<div class="container lg:flex items-center lg:space-x-8">
				<div class="lg:w-1/4">
					<img v-if="post.couverture" :src="post.couverture" class="w-full h-48 mb-4 lg:mb-0 object-contain rounded overflow-hidden" alt="">
				</div>
				<div class="lg:w-2/4">
					<p><n-link class="link font-sans mb-2" :to="'/articles/'+category.slug+'/'">{{category.titre}}</n-link></p>
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
			const post = await $content("posts", params.article).fetch();
			const category = await $content("categories", params.category).fetch();
			return {post, category};
		}
	}
</script>

<style>
	.prose {
		max-width: none;
	}
</style>