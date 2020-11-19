<template>
	<div class="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		<div v-for="p in posts" :key="p.slug" class="flex items-center md:block">
			<div class="md:mb-4 flex-shrink-0 w-1/3 md:w-full mr-4 md:mr-0">
				<img v-if="p.couverture" class="mt-2 mx-auto md:mx-0 md:w-32 w-24 h-auto object-cover rounded shadow" :src="p.couverture" alt="">
			</div>
			<div>
				<!-- Title linked to page or to external url-->
				<h3 v-if="p.url"><a class="link text-xl" :href="p.url" target="_blank">{{p.titre}}</a></h3>
				<h3 v-else-if="p.collection"><n-link class="link text-xl" :to="'/'+baseurl+'/'+p.collection">{{p.titre}}</n-link></h3>
				<h3 v-else><n-link class="link text-xl" :to="'/'+baseurl+'/'+p.category.slug+'/'+p.slug">{{p.titre}}</n-link></h3>
				<!-- Auteur -->
				<p v-if="p.auteur" class="text-gray-800">
					<span v-for="(a, i) in p.auteur" :key="i">
						{{a}}
						<span v-if="i < p.auteur.lenght">,&nbsp;</span>
					</span>
				</p>
			</div>
		</div> 
	</div>
</template>

<script>
	export default {
		props: ["posts", "baseurl"]
	}
</script>