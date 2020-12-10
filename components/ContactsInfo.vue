<template>
  <div class="my-subgrid font-sans">
    <div v-for="c in contacts" :key="c.title" class="space-y-3">
      <h4>{{c.title}}</h4>
      <div v-for="(n, i) in c.names" :key="i">
        <p>{{n.name}}</p>
        <p class="text-lighterblue" v-if="n.email"><a class="link underline" :href="'mailto:'+n.email">{{n.email}}</a></p>
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
            {name: 'Abd al-Haqq Ismaïl Guiderdoni', email: 'b.guiderdoni@ihei-asso.org'}
            {name: 'Abd al-Qouddous Jibril Gouraud', email: 'c.gouraud@ihei-asso.org'}
          ]
        },
        {
          title: "Région Ile-de-France",
          names: [
            {name: 'Abd al-Wadoud Yahya Gouraud', email: 'j.gouraud@ihei-asso.org'},
            {name: ' Abd ar-Rahim Giovacchini', email: 'd.giovacchini@ihei-asso.org'}
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
            {name: 'AbdAllah Yahya Darolles, email: 'jm.darolles@ihei-asso.org''},
            {name: 'Abd ar-Rashid Bossa, email: 'm.bossa@ihei-asso.org''},
            {name: 'Abd al-Karim Turnley', email: 'p.turnley@ihei-asso.org'},
            {name: 'Jawad Bossa', email: 'j.bossa@ihei-asso.org'}
          ]
        }
      ]
    }
  }
}
</script>
