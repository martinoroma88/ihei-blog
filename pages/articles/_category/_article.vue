<template>
	<div class="my-grid">
		<aside>
			<div class="lg:sticky top-0 space-y-4">
				<h1>{{post.titre}}</h1>
				<p v-if="post.soustitre">{{post.soustitre}}</p>
				<p class="text-gray-700"><n-link class="flex space-x-2 items-center link font-sans" :to="'/articles/'+category.slug+'/'">
					<IconCollection />
					<span>{{category.titre}}</span>
				</n-link></p>
				<img v-if="post.couverture" :src="post.couverture" class="w-full mb-4 lg:mb-0 object-contain rounded overflow-hidden" alt="">
			</div>
		</aside>
		
		<div class="md:col-span-3 space-y-8">
			<!-- Auteur/s -->
			<div class="flex items-center space-x-2 text-gray-700">
				<IconUser />
				<Auteurs v-if="post.auteur" :auteurs="post.auteur" />
			</div>
			<!-- Contenu -->
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