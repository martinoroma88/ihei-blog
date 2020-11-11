<template>
	<div>
		<header class="bg-champagne pb-12 pt-6">
			<div class="container lg:flex lg:space-x-8">
				<div class="lg:w-1/3">
					<p class="text-sm"><n-link class="transparent" to="/">Home</n-link> > <br> <n-link class="transparent" to="/articles/">Articles</n-link> > <br> <n-link class="transparent" :to="'/articles/'+category.slug+'/'">{{category.titre}}</n-link></p>
				</div>
				<div class="lg:w-2/3">
					<h1>{{post.titre}}</h1>
					<p v-if="post.soustitre">{{post.soustitre}}</p>
				</div>
			</div>
		</header>

		<div class="container flex lg:space-x-8">
			<aside class="lg:w-1/3">
				<p>Souscrire</p>
				<p>Souscrire</p>
				<p>Souscrire</p>
			</aside>
			<div class="lg:w-2/3">
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