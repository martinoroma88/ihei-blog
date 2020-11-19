<template>
	<div class="grid grid-cols-1 md:grid-cols-4 gap-16">
		<aside>
			<div class="lg:sticky top-0 space-y-4">
				<p><n-link class="link font-sans" :to="'/articles/'+category.slug+'/'">{{category.titre}}</n-link></p>
				<h1 class="text-azure">{{post.titre}}</h1>
				<p v-if="post.soustitre">{{post.soustitre}}</p>
				<img v-if="post.couverture" :src="post.couverture" class="w-full mb-4 lg:mb-0 object-contain rounded overflow-hidden" alt="">
			</div>
		</aside>
		
		<div class="md:col-span-3 space-y-8">
			<nuxt-content class="prose" :document="post" />
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