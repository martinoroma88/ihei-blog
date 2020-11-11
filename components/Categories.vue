<template>
	<ul class="space-y-3 font-sans">
		<li v-if="main">
			<n-link class="link" :to="main.url">{{main.title}}</n-link>
		</li>
		<li v-for="c in categories" :key="c.slug">
			<n-link class="link" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: ["categories", "category", "baseurl", "main"]
}
</script>