<template>
	<div class="overflow-y-hidden w-full">
		<ul class="lg:space-y-3 font-sans flex lg:block lg:space-x-0 space-x-6 overflow-x-auto">
			<li class="whitespace-no-wrap p-3 lg:p-0" v-if="main">
				<n-link class="link" :to="main.url">{{main.title}}</n-link>
			</li>
			<li class="whitespace-no-wrap p-3 lg:p-0" v-for="c in categories" :key="c.slug">
				<n-link class="link" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ["categories", "category", "baseurl", "main"]
}
</script>