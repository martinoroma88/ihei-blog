<template>
	<!-- NAVBAR -->
	<nav class="w-full flex items-center justify-between lg:space-x-8">
		<!-- BRAND -->
		<div class="z-10 relative lg:w-1/4">
			<div>
				<n-link class="transparent" to="/">
					<img class="h-16" src="https://res.cloudinary.com/genesi-communication-design/image/upload/v1603723363/ihei/logo-ihei_qximqt.svg" alt="Logo IHEI Institut des Hautes Etudes Islamiques">
				</n-link>
			</div>
		</div>

		<!-- BG LAYER, second element because of .justify-between parent option -->
		<div :class="open ? 'opacity-100 delay-75 h-screen' : 'delay-400 opacity-0'" class="lg:hidden transition duration-200 bg-turquoise inset-0 absolute z-0"></div>

		<!-- HAMBURGER BTN -->
		<div @click="toggle()" class="lg:hidden w-6 h-10 py-2 flex flex-col justify-around cursor-default relative z-10">
			<div :class="open ? 'translate-y-2' : 'translate-y-0'" class="transform transition duration-100 w-full h-1 bg-black rounded-sm"></div>
			<div :class="open ? 'scale-x-0' : 'scale-x-1'" class="transform origin-right transition duration-75 w-full h-1 bg-black rounded-sm"></div>
			<div :class="open ? 'scale-x-0' : 'scale-x-1'" class="transform transition duration-100 w-full h-1 bg-black rounded-sm"></div>
		</div>

		<!-- NAVIGATION ITEMS -->
		<div ref="items" :class="open ? 'scale-100' : 'scale-0 lg:scale-100'" class="transform absolute  lg:static inset-0 flex items-center justify-center lg:justify-start flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 h-screen lg:h-auto w-full lg:w-2/4">
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-75' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative transparent accueil" to="/">Accueil</n-link>
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" to="/institut/">L'Institut</n-link>
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" to="/publications/">Publications</n-link>																													
			<a :class="open ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="lg:hidden transform transition duration-150 relative" target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UC5pChIcpowCGXCTUg1exCHg/?guided_help_flow=5">IHEI TV</a>
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 relative" to="/contact/">Contact</n-link>
		</div>

		<div class="lg:flex hidden lg:w-1/4 justify-end">
			<a :class="open ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="border-black border-2 rounded px-2 transform transition duration-150 relative hover:bg-black hover:text-white no-underline																																																																																																																																																																																																																																																																																															" target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UC5pChIcpowCGXCTUg1exCHg/?guided_help_flow=5">IHEI TV</a>
		</div>
	</nav>
</template>

<script>
	export default {
		data() {
			return {
				open: false
			}
		},
		methods: {
			toggle() {
				this.open = !this.open;
				if(this.open) {
					document.querySelector('body').style.overflow = "hidden";
				} else {
					document.querySelector('body').style.overflow = "auto";
				}
			}
		},
		watch: {
			$route() {
				this.open = false;
				if(this.open) {
					document.querySelector('body').style.overflow = "hidden";
				} else {
					document.querySelector('body').style.overflow = "auto";
				}
			}
		}
	};
</script>

<style>
	nav .nuxt-link-active:not(.transparent) {
		@apply font-bold bg-cyan text-white px-1 rounded-sm;
	}
	.homepage nav .nuxt-link-active.accueil {
		@apply font-bold bg-cyan text-white px-1 rounded-sm;
	}
</style>