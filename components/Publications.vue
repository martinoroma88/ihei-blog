<template>
	<div class="my-subgrid">
		<div v-for="p in posts" :key="p.slug" class="flex items-center md:block">
			<div class="md:mb-4 flex-shrink-0 w-1/3 md:w-full mr-4 md:mr-0">
				<img v-if="p.couverture" class="mt-2 mx-auto md:mx-0 md:w-32 w-24 h-auto object-cover rounded shadow" :src="p.couverture" alt="">
			</div>
			<div>
				<!-- Title linked to page or to external url-->
				<p v-if="p.url"><a class="link text-lg text-lightblue font-sans font-bold" :href="p.url" target="_blank">{{p.titre}}</a></p>
				<p v-else-if="p.collection"><n-link class="link text-lg text-lightblue font-sans font-bold" :to="'/'+baseurl+'/'+p.collection">{{p.titre}}</n-link></p>
				<p v-else><n-link class="link text-lg text-lightblue font-sans font-bold" :to="'/'+baseurl+'/'+p.category.slug+'/'+p.slug">{{p.titre}}</n-link></p>
				<!-- Auteur/s -->
				<Auteurs class="text-sm text-lighterblue" v-if="p.auteur" :auteurs="p.auteur" />
			</div>
		</div> 
	</div>
</template>

<script>
	export default {
		props: ["posts", "baseurl"]
	}
</script>