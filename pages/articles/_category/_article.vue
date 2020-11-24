<template>
	<div>
		<p><n-link to="/">Home</n-link> > <n-link to="/articles/">Articles</n-link> > <n-link :to="'/articles/'+category.slug+'/'">{{category.titre}}</n-link></p>
		<h1>{{ post.titre }}</h1>
		<h2 v-if="post.soustitre">{{ post.soustitre }}</h2>
		<h3 v-if="post.auteur">{{ post.auteur.join(', ') }}</h3>
		<nuxt-content class="prose" :document="post" />
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