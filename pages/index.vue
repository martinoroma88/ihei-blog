<template>
	<div>

		<div class="lg:flex justify-between mt-10">
			<!-- Categories -->
			<Categories class="lg:w-1/4 lg:ml-6" :categories="categories" />

			<!-- Articles -->
			<articles class="lg:w-3/4" :posts="posts" />
		</div>
	
	</div>
</template>

<script>
	export default {
		async asyncData({$content}) {
			const posts = await $content("posts").sortBy("date", "desc").fetch();
			const categories = await $content("categories").fetch();

			return { posts, categories };
		}
	}
</script>