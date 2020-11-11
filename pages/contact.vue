<template>
	<div>
		<div class="container flex lg:space-x-8">
			<aside class="lg:w-1/4 pt-16">
				<h1>Contact</h1>
			</aside>
			<div class="lg:w-2/3 pt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-12">
				<Contact 
          :names="[
            {name: 'Abd al-Qayyoum Guerre-Genton', email: 'c.guerregenton@ihei-asso.org'}
          ]"
          title="Région Nord" />
				<Contact 
          :names="[
            {name: 'Abd al-Haqq Ismaïl Guiderdoni'},
            {name: 'Abd al-Qouddous Jibril Gouraud', email: 'c.gouraud@ihei-asso.org'}
          ]"
          title="Région Rhône-Alpes" />
        
			</div>
		</div>
	</div>
</template>

<script>
export default {
  
}
</script>



<style>
	.prose {
		max-width: none;
	}
</style>