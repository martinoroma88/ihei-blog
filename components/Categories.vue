<template>
	<!-- TODO - Highlight active item on mobile -->
	<div class="overflow-y-hidden w-full">
		<nav id="categories" class="font-sans flex lg:flex-col lg:items-start overflow-x-auto">
			<n-link class="link transparent" v-if="main" :to="main.url">{{main.title}}</n-link>
			<n-link class="link transparent" v-for="c in categories" :key="c.slug" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>
		</nav>
	</div>
</template>

<script>
export default {
	props: ["categories", "category", "baseurl", "main"]
}
</script>

<style>
	#categories {
		@apply mb-8;
		@screen lg {
			@apply mb-0;
		}
	}
	#categories a {
		@apply whitespace-no-wrap p-4 text-blue;
		@screen lg {
			@apply whitespace-normal px-0 pb-3 pt-0;
		}
	} 
	#categories .nuxt-link-exact-active {
		@apply order-first font-bold bg-blue text-white px-2 rounded;
		@screen lg {
			@apply text-xl mb-4 pt-3;
		}
	}
</style>