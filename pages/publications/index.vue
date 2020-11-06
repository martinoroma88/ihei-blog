<template>
	<div>
		<p><n-link to="/">Home</n-link> > Publications</p>
		<div class="lg:flex justify-between mt-10">
			<!-- Publication Categories -->
			<ul class="lg:order-last">
				<li>
					<n-link class="text-white hover:text-gray-600" to="/publications/">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">Toutes les articles</span>
					</n-link>
				</li>
				<li v-for="c in categories" :key="c.slug">
					<n-link class="text-white hover:text-gray-600" :to="'/publications/'+c.slug">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">{{c.titre}}</span>
					</n-link>
				</li>
			</ul>

			<!-- Publication Articles -->
			<section class="space-y-6 text-lg">
				<div v-for="p in posts" :key="p.slug">
					<div class="lg:flex">
						<p class="text-gray-600 mr-6">{{$dateFns.format(new Date(p.date), 'dd/MM/yyyy')}}</p>
						<p v-if="p.url"><a class="link" :href="p.url" target="_blank">{{p.titre}}</a></p>
						<p v-else><n-link class="link" :to="'/publication/'+p.slug">{{p.titre}}</n-link></p>
					</div>
				</div> 
			</section>
		</div>
	
	</div>
</template>

<script>
	export default {
		async asyncData({$content, params}) {
			const categories = await $content("publication-categories").sortBy("ordre", "asc").fetch();
			const posts = await $content("publications").sortBy("date", "desc").fetch();

			return { categories, posts };
		}
	}
</script>