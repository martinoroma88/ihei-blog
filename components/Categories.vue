<template>
	<ul class="lg:order-last">
		<li>
			<n-link class="text-white hover:text-gray-600" to="/">
				<arrow-right-icon class="inline transition duration-75" /> 
				<span class="text-gray-900">Toutes les articles</span>
			</n-link>
		</li>
		<li v-for="c in categories" :key="c.slug">
			<div v-if="category && c.slug === category.slug" class="cursor-default font-bold">
				<arrow-right-icon class="inline transition duration-75" />
				<span>{{c.titre}}</span>
			</div>
			<n-link v-else class="text-white hover:text-gray-600" :to="'/'+baseurl+'/'+c.slug">
				<arrow-right-icon class="inline transition duration-75" /> 
				<span class="text-gray-900">{{c.titre}}</span>
			</n-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: ["categories", "category", "baseurl"]
}
</script>