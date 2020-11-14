<template>
	<div class="overflow-y-hidden w-full">
		<nav id="categories" class="font-sans flex lg:flex-col lg:space-x-0 space-x-6 overflow-x-auto">
			<n-link class="link transparent" v-if="main" :to="main.url">{{main.title}}</n-link>
			<n-link class="link transparent" v-for="c in categories" :key="c.slug" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>
		</nav>
	</div>
</template>

<script>
export default {
	props: ["categories", "category", "baseurl", "main"],
	mounted() {
		const categories = document.querySelector("#categories");
		const active = categories.querySelector(".nuxt-link-exact-active");
		/* console.log(active);
		const leftPos = active.offsetLeft;
		categories.scrollLeft = leftPos; */
		active.scrollIntoView({behavior: "smooth", inline: "center"});
	}
}
</script>

<style scoped>
	nav a {
		@apply whitespace-no-wrap p-2 text-blue;
		@screen lg {
			@apply whitespace-normal px-0 pb-3 pt-0;
		}
	} 
	.nuxt-link-exact-active {
		@apply order-first font-bold mb-4 pt-3;
		@screen lg {
			@apply text-xl border-b border-t border-azure;
		}
	}
</style>