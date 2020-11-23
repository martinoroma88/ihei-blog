<template>
	<div class="space-y-6">
		<h1>Search results</h1>

		<section v-if="posts">
			<h2 v-if="posts.length">Posts</h2>
			<n-link 
				v-for="result in posts" :key="result.slug" 
				:to="'/articles/' + result.slug" 
				class="block border-t py-4"
				v-text="result.titre"
			/>
		</section>

		<section v-if="publications">
			<h2 v-if="publications.length">Publications</h2>
			<div v-for="result in publications" :key="result.slug" class="border-t py-4">
				{{ result.titre }}
			</div>
		</section>
	</div>
</template>

<script>
export default {
	methods: {
		async fetch() {
			if (!this.query) return null

			this.posts = await this.$content('posts')
				.limit(60)
				.search(this.query)
				.fetch()

			this.publications = await this.$content('publications')
				.limit(60)
				.search(this.query)
				.fetch()
		}
	},
	computed: {
		query() {
			return this.$route.query.query
		}
	},
	data() {
		return {
			posts: null,
			publications: null
		}
	},
	watch: {
		query: {
			immediate: true,
			handler() {
				this.fetch()
			}
		}
	}
}
</script>
