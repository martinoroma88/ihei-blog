<template>
	<div>

		<div class="lg:flex justify-between mt-10">
			<!-- Categories Menu -->
			<ul class="lg:order-last">
				<li class="cursor-default font-bold">
					<arrow-right-icon class="inline transition duration-75" />
					<span>Toutes les articles</span>
				</li>
				<li v-for="c in categories" :key="c.slug">
					<n-link class="text-white hover:text-gray-600" :to="'/categorie/'+c.slug">
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
		async asyncData({$content}) {
			const posts = await $content("posts").sortBy("date", "desc").fetch();
			const categories = await $content("categories").fetch();

			return { posts, categories };
		}
	}
</script>

