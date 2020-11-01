<template>
	<div>

		<h1>{{souscategorie.titre}}</h1>
		<!-- List of categories with three featured articles each -->
		<div class="lg:flex justify-between mt-10">
			<!-- Categories Menu -->
			<ul class="lg:order-last">
				<li>
					<n-link class="text-white hover:text-gray-600" to="/">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">Toutes les articles</span>
					</n-link>
				</li>
				<li v-for="c in categories" :key="c.slug">
					<div v-if="c.slug === categorie.slug" class="cursor-default font-bold">
						<arrow-right-icon class="inline transition duration-75" />
						<span>{{c.titre}}</span>
						<li v-for="(s, slug) in categorie.souscategories">
							<div v-if="s.titre === souscategorie.titre" class="cursor-default font-bold">
								<arrow-right-icon class="inline transition duration-75" />
								<span>{{s.titre}}</span>
							</div>
							<n-link v-else class="text-white hover:text-gray-600" :to="'/souscategorie/'+slug+'/'">
								<arrow-right-icon class="inline transition duration-75" /> 
								<span class="text-gray-900">{{s.titre}}</span>
							</n-link>
						</li>
					</div>
					<n-link v-else class="text-white hover:text-gray-600" :to="'/categorie/'+c.slug">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">{{c.titre}}</span>
					</n-link>
				</li>
			</ul>

			<!-- List of categories with three featured articles each -->
			<section class="space-y-6 text-lg">
				<div v-for="p in posts" :key="p.slug">
					<div class="lg:flex">
						<p class="text-gray-600 mr-6">{{$dateFns.format(new Date(p.date), 'dd/MM/yyyy')}}</p>
						<p v-if="p.url"><a class="link" :href="p.url" target="_blank">{{p.titre}}</a></p>
						<p v-else><n-link class="link" :to="'/articles/'+p.slug">{{p.titre}}</n-link></p>
					</div>
				</div> 
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("categories").fetch();
			const categorie = categories.find(c => typeof(c.souscategories) != 'undefined' && params.slug in c.souscategories);
			const souscategorie = categorie.souscategories[params.slug];
			const posts = await $content("posts").where({ souscategorie: { $contains: params.slug } }).sortBy("date", "desc").fetch();
			return { categories, categorie, souscategorie, posts };
		}
	}
</script>
