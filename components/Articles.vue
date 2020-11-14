<template>
	<section class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">

		<div class="lg:flex lg:space-x-4 items-center" v-for="p in posts" :key="p.slug">
			<div class="flex-shrink-0 h-32 w-32 rounded-lg mb-4 md:mb-0 bg-gray-100 border">
				<img v-if="p.couverture" class="h-32 w-32 rounded-lg object-cover object-top" :src="p.couverture" alt="">
			</div>
			<div>
				<!-- Title linked to page or to external url-->
				<h4 v-if="p.url"><a class="link" :href="p.url" target="_blank">{{p.titre}}</a></h4>
				<h4 v-else><n-link class="link" :to="'/'+baseurl+'/'+p.category.slug+'/'+p.slug">{{p.titre}}</n-link></h4>
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