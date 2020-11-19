<template>
	<!-- NAVBAR -->
	<nav :class="accueil ? 'accueil' : ''" class="w-full grid grid-cols-4 gap-16 items-center justify-between mb-6 pb-6 border-b z-30 font-sans realtive">
		<!-- BRAND -->
		<div class="z-20 relative col-span-3 lg:col-span-1">
			<div>
				<n-link class="transparent" to="/">
					<img class="h-16" src="https://res.cloudinary.com/genesi-communication-design/image/upload/v1603723363/ihei/logo-ihei_qximqt.svg" alt="Logo IHEI Institut des Hautes Etudes Islamiques">
				</n-link>
			</div>
		</div>

		<!-- BG LAYER, second element because of .justify-between parent option -->
		<div :class="open ? 'opacity-100 delay-75 h-full' : 'delay-400 opacity-0'" class="lg:hidden transition duration-200 bg-blue w-full top-0 left-0 fixed z-10"></div>

		<!-- HAMBURGER BTN -->
		<!-- <div @click="toggle()" class="lg:hidden w-6 h-10 py-2 flex flex-col justify-around cursor-default relative z-10">
			<div :class="open ? 'bg-azure translate-y-2' : 'translate-y-0'" class="transform transition duration-100 w-full h-1 bg-blue rounded-sm"></div>
			<div :class="open ? 'bg-azure scale-x-0' : 'scale-x-1'" class="transform origin-right transition duration-75 w-full h-1 bg-blue rounded-sm"></div>
			<div :class="open ? 'bg-azure scale-x-0' : 'scale-x-1'" class="transform transition duration-100 w-full h-1 bg-blue rounded-sm"></div>
		</div> -->

		<div v-if="open" @click="toggle()" class="lg:hidden text-white relative z-10">
			<IconClose />
		</div>
		<div v-else @click="toggle()" class="lg:hidden text-blue relative z-10">
			<IconMenu />
		</div>

		<!-- NAVIGATION ITEMS -->
		<div ref="items" :class="open ? 'scale-100' : 'scale-0 lg:scale-100'" class="font-bold transform absolute lg:static inset-0 flex items-center justify-center lg:justify-between flex-col lg:flex-row space-y-6 lg:space-y-0 h-screen lg:h-auto w-full col-span-3 z-10" >
			<!-- Internal links -->
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-75' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 text-white lg:text-blue transparent accueil-link" to="/">Accueil</n-link>
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-100' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 text-white lg:text-blue" to="/institut/">L'Institut</n-link>
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 text-white lg:text-blue" to="/publications/">Publications</n-link>								
			<n-link :class="open ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 text-white lg:text-blue" to="/contact/">Contact</n-link>
			<!-- Search input -->
			<div :class="open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 mb-6 lg:mb-0 order-6 lg:order-none">
				<input class="p-1 rounded border-2 border-blue text-center lg:text-left" type="search" placeholder="Chercher" name="" id="">
			</div>
			<!-- External link -->
			<a :class="open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 text-white lg:text-blue" target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UC5pChIcpowCGXCTUg1exCHg/?guided_help_flow=5">IHEI TV</a>
			<div @click="toggle()" :class="open ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-12 lg:translate-y-0 opacity-0 lg:opacity-100'" class="transform transition duration-150 mb-6 lg:mb-0 text-white lg:text-blue lg:hidden order-7">
				<IconUp />
			</div>
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
		computed: {
			accueil() {
				if(this.$route.name === "index") return true;
				else return false;
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
				document.querySelector('body').style.overflow = "auto";
			}
		}
	};
</script>

<style scoped>
	nav.accueil .nuxt-link-active.accueil-link, nav .nuxt-link-active:not(.transparent) {
		@apply font-bold text-azure py-1 px-2 rounded-sm;
	}
</style>