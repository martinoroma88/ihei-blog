<template>
	<div class="content">
		<p><n-link to="/">Home</n-link></p>
		<h1>{{post.titre}}</h1>
		<nuxt-content :document="post" />
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const post = await $content("posts", params.slug).fetch();

			return {post};
		}
	}
</script>

<style>
	.nuxt-content img {
		@apply object-contain w-full h-64 bg-gray-100 rounded;
		@screen lg {
			@apply p-3;
		}
	}
</style>
