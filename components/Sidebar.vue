<template>
	<div class="overflow-y-hidden w-full md:sticky top-0 space-y-4">
		<nav id="sidebar" class="font-sans flex lg:flex-col lg:items-start items-center overflow-x-auto">
			<n-link class="link transparent" v-if="main" :to="main.url">{{main.title}}</n-link>
			<n-link class="link transparent" v-for="c in categories" :key="c.slug" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>
		</nav>
		<Newsletter class="hidden lg:block" />
		<Donation class="hidden lg:block" />
	</div>
</template>

<script>
export default {
	props: ["categories", "category", "baseurl", "main"]
}
</script>

<style>
	#sidebar a {
		@apply whitespace-no-wrap px-2 py-3;
		@screen lg {
			@apply whitespace-normal px-0 py-1;
		}
	} 
	#sidebar .nuxt-link-exact-active {
		@apply order-first font-bold text-xl pl-0 border-t border-b border-gray-500;
		@screen lg {
			@apply text-xl py-2 mb-2 mt-2;
		}
	}
</style>