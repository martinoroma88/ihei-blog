<template>
	<div>
		<p><n-link to="/">Home</n-link> > <n-link to="/publications/">Publications</n-link> > {{category.titre}}</p>
		<h1>{{category.titre}}</h1>
		<h2 v-if="category.soustitre">{{category.soustitre}}</h2>
		<div class="lg:flex justify-between mt-10">
			<ul class="lg:order-last">
				<li>
					<n-link class="text-white hover:text-gray-600" to="/publications/">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">Toutes les articles</span>
					</n-link>
				</li>
				<li v-for="c in categories" :key="c.slug">
					<div v-if="category && c.slug === category.slug" class="cursor-default font-bold">
						<arrow-right-icon class="inline transition duration-75" />
						<span>{{c.titre}}</span>
					</div>
					<n-link v-else class="text-white hover:text-gray-600" :to="'/publications/'+c.slug+'/'">
						<arrow-right-icon class="inline transition duration-75" /> 
						<span class="text-gray-900">{{c.titre}}</span>
					</n-link>
				</li>
			</ul>
			<section class="space-y-6 text-lg">
				<div v-for="p in posts" :key="p.slug">
					<div class="lg:flex">
						<p class="text-gray-600 mr-6">{{$dateFns.format(new Date(p.date), 'dd/MM/yyyy')}}</p>
						<p v-if="p.url"><a class="link" :href="p.url" target="_blank">{{p.titre}}</a></p>
						<p v-else><n-link class="link" :to="'/publications/'+category.slug+'/'+p.slug">{{p.titre}}</n-link></p>
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
			const category = categories.find(c => c.slug === params.category);
			const posts = await $content("publications").where({ categories: { $contains: category.titre } }).sortBy("date", "desc").fetch();
			
			return { categories, category, posts };
		}
	}
</script>
