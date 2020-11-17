<template>
	<!-- TODO - set proper min-height -->
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center md:text-left">
		<div class="md:flex md:space-x-4 items-center" v-for="p in posts" :key="p.slug">
			<div class="flex-shrink-0 h-24 w-24 mx-auto md:mx-0 rounded-lg mb-4 md:mb-0 bg-gray-100 border">
				<img v-if="p.couverture" class="h-24 w-24 rounded-lg object-cover object-top" :src="p.couverture" alt="">
			</div>
			<div>
				<!-- Title linked to page or to external url-->
				<p v-if="p.url"><a class="link font-bold font-sans" :href="p.url" target="_blank">{{p.titre}}</a></p>
				<p v-else><n-link class="link font-bold font-sans" :to="'/'+baseurl+'/'+p.category.slug+'/'+p.slug">{{p.titre}}</n-link></p>
				<!-- Auteur -->
				<p v-if="p.auteur" class="text-gray-800 text-sm font-sans">
					<span v-for="(a, i) in p.auteur" :key="i">
						{{a}}
						<span v-if="i < p.auteur.lenght">,&nbsp;</span>
					</span>
				</p>
			</div>
		</div> 
	</section>
</template>

<script>
	export default {
		props: ["posts", "baseurl"]
	}
</script>