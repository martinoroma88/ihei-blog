<template>
	<section class="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
		<div class="flex space-x-4 items-center" v-for="p in posts" :key="p.slug">
			<div class="flex-shrink-0 h-20 w-20 md:h-24 md:w-24 rounded bg-gray-100 border">
				<img v-if="p.couverture" class="h-20 w-20 md:h-24 md:w-24 rounded object-cover object-top" :src="p.couverture.replace('upload','upload/w_300,c_scale')" alt="">
			</div>
			<div>
				<!-- Title linked to page or to external url-->
				<p class="text-sm text-lighterblue font-sans">{{$dateFns.format(p.date, 'dd mmmm yyyy')}}</p>
				<p v-if="p.url"><a class="link font-bold font-sans" :href="p.url" target="_blank">{{p.titre}}</a></p>
				<p v-else><n-link class="link font-bold font-sans" :to="'/'+baseurl+'/'+p.categoryPopulated.slug+'/'+p.slug">{{p.titre}}</n-link></p>
				<!-- Auteur/s -->
				<Auteurs class="text-sm text-lighterblue" v-if="p.auteur" :author="p.auteur" />
			</div>
		</div> 
	</section>
</template>

<script>
	export default {
		props: ["posts", "baseurl"]
	}
</script>
