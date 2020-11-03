<template>
	<section class="space-y-6 text-lg">
		<div v-for="p in posts" :key="p.slug">
			<div class="lg:flex">
				<p class="text-gray-600 mr-6">{{$dateFns.format(new Date(p.date), 'dd/MM/yyyy')}}</p>
				<p v-if="p.url"><a class="link" :href="p.url" target="_blank">{{p.titre}}</a></p>
				<p v-else><n-link class="link" :to="'/articles/'+p.slug">{{p.titre}}</n-link></p>
			</div>
		</div> 
	</section>
</template>

<script>
	export default {
		props: ["posts"]
	}
</script>