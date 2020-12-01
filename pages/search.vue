<template>
	<div class="my-grid">
		<aside class="space-y-4">
			<div class="space-y-4 py-6 px-3 bg-gray-200 w-full rounded">
				<p class="font-bold text-lg">Résultats pour : <span class="text-azure">{{query}}</span></p>
				<a v-if="posts && posts.length" class="flex space-x-2 font-sans link" href="#articles">
					<IconRight />
					<span>Articles</span>
				</a>
				<a v-if="publications && publications.length" class="flex space-x-2 font-sans link" href="#publications">
					<IconRight />
					<span>Publications</span>
				</a>
			</div>
		</aside>

		<div class="md:col-span-3 space-y-10">
			<section v-if="posts" id="articles">
				<h2 class="pb-4" v-if="posts.length">Articles avec : <span class="text-azure">{{query}}</span></h2>
				<hr class="mb-6">
				<Articles :posts="posts" baseurl="articles" />
			</section>

			<section v-if="publications" id="publications">
				<h2 class="pb-4" v-if="publications.length">Publications avec : <span class="text-azure">{{query}}</span></h2>
				<hr class="mb-6">
				<Publications :posts="publications" baseurl="publications"/>
			</section>
		</div>

	</div>
</template>

<script>
export default {
	methods: {
		async fetch() {
			if (!this.query) return null

			const categories = await this.$content("categories").sortBy("ordre", "asc").fetch();

			const posts = await this.$content('posts')
				.limit(60)
				.search(this.query)
				.fetch()

			posts.forEach((p, i) => {
				let c = categories.find(c => p.category === c.titre);
				p.categoryPopulated = c;
			});

			this.posts = posts;

			const publicationCategories = await this.$content("publication-categories").sortBy("ordre", "asc").fetch();

			const publications = await this.$content('publications')
				.limit(60)
				.search(this.query)
				.fetch()
			
			publications.forEach((p, i) => {
				if(p.category) {
					let c = publicationCategories.find(c => p.category === c.titre);
					p.categoryPopulated = c;
				}
			})

			this.publications = publications;
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
