<template>
	<section class="grid lg:gap-8 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
		<div class="" v-for="p in posts" :key="p.slug">
			<!-- <p class="text-gray-600 mr-6">{{$dateFns.format(new Date(p.date), 'dd/MM/yyyy')}}</p> -->
			
			<div class="flex-shrink-0 w-full">
				<img v-if="p.couverture" class="mt-2 w-full object-cover rounded shadow" :src="p.couverture" alt="">
			</div>
			<div>
				<!-- Title linked to page or to external url-->
				<h3 v-if="p.url"><a class="link text-xl" :href="p.url" target="_blank">{{p.titre}}</a></h3>
				<h3 v-else><n-link class="link text-xl" :to="'/'+baseurl+'/'+p.category.slug+'/'+p.slug">{{p.titre}}</n-link></h3>
				<!-- Auteur -->
				<p class="text-sm" v-if="p.auteur">
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