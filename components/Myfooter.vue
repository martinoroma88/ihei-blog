<template>
  <!-- TODO - Add liens utils, subscribe, social links, privacy policy, cookie policy -->
  <footer class="my-grid mt-12 font-sans text-xs">
    <div class="space-y-2">
      <p>&copy; Institut des Hautes Etudes Islamiques, 2020</p>
      <hr class="border-gray-500">
      <p><a class="link underline flex space-x-2" href="https://www.facebook.com/IHEI.Jeunes" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
        <span>Page Facebook</span>
      </a></p>
      <hr class="border-gray-500">
      <p><a class="link underline" href="/">Politique de confidentialité</a>, <a class="link underline" href="/">Politique des cookies</a></p>
    </div>
    <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10">
      <nav class="space-y-1">
        <n-link class="font-bold pb-2 block" to="/">Accueil</n-link>
        <n-link class="block" v-for="c in categories" :to="'/articles/'+c.slug" :key="c.slug">{{c.titre}}</n-link>
      </nav>

      <nav class="space-y-1">
        <n-link class="font-bold pb-2 block" to="/institut/">Institut</n-link>
        <n-link class="block" v-for="p in pages" :to="'/institut/'+p.slug" :key="p.slug">{{p.titre}}</n-link>
      </nav>

      <nav class="space-y-1">
        <n-link class="font-bold pb-2 block" to="/publications/">Publications</n-link>
        <n-link class="block" v-for="p in publications" :to="'/publications/'+p.slug" :key="p.slug">{{p.titre}}</n-link>
      </nav>
    </div>
  </footer>
</template>

<script>
	export default {
    data() {
      return {
        categories: undefined,
        pages: undefined,
        publications: undefined
      }
    },
		async mounted() {
      const categories = await this.$content("categories").sortBy("ordre", "asc").fetch();
      const pages = await this.$content("institut").sortBy("ordre", "asc").fetch();
      const publications = await this.$content("publication-categories").sortBy("ordre", "asc").fetch();
			
      this.categories = categories;
      this.pages = pages;
      this.publications = publications;
		}
	}
</script>