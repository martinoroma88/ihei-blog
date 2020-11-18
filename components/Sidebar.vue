<template>
	<!-- TODO - Add DONATE btn on LG and add it on MENU on Mobile? -->
	<div class="overflow-y-hidden w-full md:sticky top-0">
		<nav id="sidenav" class="font-sans flex lg:flex-col lg:items-start overflow-x-auto">
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
	#sidenav {
		@apply mb-8;
		@screen lg {
			@apply mb-0;
		}
	}
	#sidenav a {
		@apply whitespace-no-wrap px-2 py-4 text-blue;
		@screen lg {
			@apply whitespace-normal px-0 pb-3 pt-0;
		}
	} 
	#sidenav .nuxt-link-exact-active {
		@apply order-first font-bold text-azure text-xl -mt-1 pl-0;
		@screen lg {
			@apply text-xl py-2;
		}
	}
</style>