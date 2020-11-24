<template>
	<div class="w-full md:sticky top-0 lg:space-y-4 p-3 lg:p-4 rounded bg-white shadow-lg">
		<nav id="sidebar" class="font-sans hidden lg:flex flex-col items-start" :class="{showing : institut}">
			<n-link class="link transparent" v-if="main" :to="main.url">{{main.title}}</n-link>
			<n-link class="link transparent" v-for="c in categories" :key="c.slug" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>
		</nav>

		<button v-if="!institut" class="text-lighterblue transition duration-75 lg:hidden flex space-x-1 font-sans" @click="isOpen = true">
			<IconCollection />
			<span>Catégories</span>
		</button>
    <div id="mobile-submenu" class="opacity-0 fixed font-sans inset-0 flex items-center justify-center z-50 transform transition duration-150  w-screen -screen" :class="isOpen ? 'opacity-100 scale-100 translate-y-0' : 'translate-y-full scale-0'">
      <div class="absolute inset-0" @click="isOpen = false"></div>
 
      <div class="relative shadow-2xl rounded bg-white p-3 lg:p-6 m-3 border-blue border text-center">
        <n-link class="link transparent block p-3" v-if="main" :to="main.url">{{main.title}}</n-link>
				<n-link class="link transparent block p-3" v-for="c in categories" :key="c.slug" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>

        <button @click="isOpen = false" class="font-sans font-bold text-lighterblue p-2 hover:text-lightblue focus:shadow-none focus:border-gray-900 focus:text-blue transition duration-75"><IconClose /></button>
      </div>

    </div>

		<Newsletter class="hidden lg:block" />
		<Donation class="hidden lg:block" />
	</div>
</template>

<script>
export default {
	props: ["categories", "baseurl", "main"],
	data () {
    return {
      isOpen: false
    }  
	},
	computed: {
		institut() {
			if(this.$route.name === "institut-subpage") return true;
			else return false;
		}
	}
}
</script>

<style>
	#sidebar a {
		@apply whitespace-no-wrap py-1;
		@screen lg {
			@apply whitespace-normal;
		}
	} 
	#sidebar .nuxt-link-exact-active {
		@apply order-first font-bold text-lg;
		@screen lg {
			@apply mb-2 border-b-2 border-lighterblue;
		}
	}
	#mobile-submenu .nuxt-link-exact-active {
		@apply font-bold text-xl;
	}

	#sidebar.showing {
		display: flex !important;
	}
	#sidebar.showing .nuxt-link-exact-active {
		@apply order-none;
		@screen lg {
			@apply order-first;
		}
	}
</style>