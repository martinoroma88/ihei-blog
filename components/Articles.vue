<template>
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-16">

		<div class="lg:flex lg:space-x-4 items-center" v-for="p in posts" :key="p.slug">
			<div class="flex-shrink-0 h-40 w-40 rounded-full mb-4 md:mb-0 bg-gray-100 ">
				<img v-if="p.couverture" class="h-40 w-40 rounded-full object-cover object-top border" :src="p.couverture" alt="">
			</div>
			<div>
				<!-- Title linked to page or to external url-->
				<h4 v-if="p.url"><a class="link" :href="p.url" target="_blank">{{p.titre}}</a></h4>
				<h4 v-else><n-link class="link" :to="'/'+baseurl+'/'+p.category.slug+'/'+p.slug">{{p.titre}}</n-link></h4>
				<!-- Auteur -->
				<p v-if="p.auteur" class="text-gray-800">
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