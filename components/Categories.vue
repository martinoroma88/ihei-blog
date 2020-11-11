<template>
	<ul class="space-y-3 text-sm">
		<li v-for="c in categories" :key="c.slug">
			<n-link class="link" :to="'/'+baseurl+'/'+c.slug">{{c.titre}}</n-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: ["categories", "category", "baseurl"]
}
</script>