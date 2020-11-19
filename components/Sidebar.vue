<template>
	<!-- TODO - Add DONATE btn on LG and add it on MENU on Mobile? -->
	<div class="overflow-y-hidden w-full md:sticky top-0">
		<nav id="sidebar" class="font-sans flex lg:flex-col lg:items-start items-center overflow-x-auto">
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
	#sidebar a {
		@apply whitespace-no-wrap px-2 py-4 text-blue;
		@screen lg {
			@apply whitespace-normal px-0 pb-3 pt-0;
		}
	} 
	#sidebar .nuxt-link-exact-active {
		@apply order-first font-bold text-azure text-2xl -mt-2 pl-0 border-b border-azure;
		@screen lg {
			@apply text-xl py-2;
		}
	}
</style>