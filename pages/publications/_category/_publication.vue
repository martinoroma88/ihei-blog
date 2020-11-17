<template>
	<div>
		<div class="container lg:flex lg:space-x-8">
			<!-- Sidebar -->
			<aside class="lg:w-1/4">
				<div class="sticky top-0 pt-12">
					<img v-if="post.couverture" :src="post.couverture" class="w-full rounded overflow-hidden" alt="">
				</div>
			</aside>

			<!-- Posts -->
			<div class="lg:w-2/3 pt-12">
				<p class="underline-links mb-4">
					<n-link :to="'/publications/'+category.slug">{{category.titre}}</n-link>
				</p>
				<h1>{{post.titre}}</h1>
				<p v-if="post.soustitre">{{post.soustitre}}</p>
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