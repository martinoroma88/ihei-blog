<template>
  <div class="mt-12">
    <div class="px-3 py-6 lg:p-12 bg-lightblue rounded grid gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 shadow-lg text-white">
      <div>
        <Newsletter class="md:hidden" />
        <Donation class="md:hidden my-4" />
        <p class="mb-4 text-xl lg:text-2xl font-sans font-bold text-azure">Liens utiles</p>
        <nav class="space-y-2 text-sm">
          <a class="text-gray-300 hover:text-white block link font-sans" href="https://www.coreis.it/" target="_blank">COREIS (Communauté Religieuse Islamique) italienne</a>
          <a class="text-gray-300 hover:text-white block link font-sans" href="https://www.christians-muslims.com/fr" target="_blank">La Fraternité pour la Connaissance et la Coopération</a>
          <a class="text-gray-300 hover:text-white block link font-sans" href="https://www.ifcm-lyon.org/" target="_blank">Institut Français de Civilisation Musulmane (I.F.C.M.)</a>
          <a class="text-gray-300 hover:text-white block link font-sans" href="http://www.accademiaisa.it/" target="_blank">I.S.A. Interreligious Studies Academy</a>
        </nav>
      </div>
      <div>
        <p class="mb-4 text-xl lg:text-2xl font-sans font-bold text-azure">Nous contacter</p>
        <form class="space-y-4" action="https://formcarry.com/s/dMeHyLbpw-" method="POST" accept-charset="UTF-8">
          <input class="rounded bg-transparent border-2 border-white px-2 py-1 w-full" name="Email" type="email" placeholder="email">
          <textarea class="rounded bg-transparent border-2 border-white p-2 w-full" name="Message" placeholder="message"></textarea>
          <input type="submit" value="Envoyer" class="font-sans bg-transparent border-gray-200 border-2 font-bold text-gray-200 shadow rounded px-4 py-2 hover:border-gray-100 hover:shadow-lg hover:text-gray-100 focus:shadow-none focus:border-gray-300 focus:text-gray-300 transition duration-75">
        </form>
      </div>

    </div>
    <footer class="my-grid mt-6 font-sans md:text-sm">
      <div class="space-y-2 hidden md:block"> 
        <p>&copy; Institut des Hautes Etudes Islamiques, 2020</p>
        <p><a class="link underline flex space-x-2" href="https://www.facebook.com/IHEI.Jeunes" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
          <span>Page Facebook</span>
        </a></p>
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

      <div class="space-y-2 md:hidden text-sm"> 
        <p>&copy; Institut des Hautes Etudes Islamiques, 2020</p>
        <p><a class="link underline flex space-x-2" href="https://www.facebook.com/IHEI.Jeunes" target="_blank">
          <IconFacebook />
          <span>Page Facebook</span>
        </a></p>
        <p><a class="link underline" target="_blank" href="https://www.iubenda.com/privacy-policy/39983958">Politique de confidentialité</a>, <a class="link underline" target="_blank" href="https://www.iubenda.com/privacy-policy/39983958/cookie-policy">Politique des cookies</a></p>
      </div>
  
    </footer> 
  </div>
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