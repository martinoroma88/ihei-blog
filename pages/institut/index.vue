<template>
	<div>

		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="pages" baseurl="institut" />
		</div>
	
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const pages = await $content("institut").fetch();
			return { pages };
		}
	}
</script>