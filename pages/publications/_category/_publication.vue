<template>
	<div>
		<p><n-link to="/">Home</n-link> > <n-link to="/publications/">Publications</n-link> > <n-link :to="'/publications/'+category.slug+'/'">{{category.titre}}</n-link></p>
		<h1>{{post.titre}}</h1>
		<h2 v-if="post.soustitre">{{post.soustitre}}</h2>
		<nuxt-content class="prose" :document="post" />
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