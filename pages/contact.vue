<template>
	<div>
		<div class="container lg:flex lg:space-x-8">
			<aside class="lg:w-1/4 pt-16">
				<h1>Contact</h1>
        <address class="mb-4">
          Institut des Hautes <br> Études Islamiques <br>
          B.P. 136, 05004 GAP CEDEX
        </address>
        <p><b>T</b> : <a href="tel:+33492435665">+33 4 92 43 56 65</a></p>
        <p><b>F</b> : +33 4 92 43 59 39</p>
        <p><a href="mailto:ihei@ihei-asso.org">ihei@ihei-asso.org</a></p>
			</aside>
			<div class="lg:w-2/3 pt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-12">
				<Contact
          v-for="c in contacts" :key="c.title" 
          :names="c.names"
          :title="c.title" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          title: "Région Nord",
          names: [
            {name: 'Abd al-Qayyoum Guerre-Genton', email: 'c.guerregenton@ihei-asso.org'}
          ]
        },
        {
          title: "Région Rhône-Alpes",
          names: [
            {name: 'Abd al-Haqq Ismaïl Guiderdoni'},
            {name: 'Abd al-Qouddous Jibril Gouraud', email: 'c.gouraud@ihei-asso.org'}
          ]
        },
        {
          title: "Région Ile-de-France",
          names: [
            {name: 'Abd al-Wadoud Yahya Gouraud', email: 'j.gouraud@ihei-asso.org'},
            {name: ' Abd ar-Rahim Giovacchini'}
          ]
        },
        {
          title: "Région Ouest",
          names: [
            {name: 'Abd ar-Rahman Gastou', email: 'g.gastou@ihei-asso.org'},
            {name: 'Ahmad Abd as-Samad Gastou', email: 'p.gastou@ihei-asso.org'}
          ]
        },
        {
          title: "Région PACA",
          names: [
            {name: 'AbdAllah Yahya Darolles'},
            {name: 'Abd ar-Rashid Bossa'},
            {name: 'Abd al-Karim Turnley', email: 'p.turnley@ihei-asso.org'},
            {name: 'Jawad Bossa', email: 'j.bossa@ihei-asso.org'}
          ]
        }
      ]
    }
  }
}
</script>



<style>
	.prose {
		max-width: none;
	}
</style>