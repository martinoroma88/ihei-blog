<template>
  <section class="grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-5">
    <div
      v-for="(p, i) in posts"
      :key="p.slug || i"
      :class="cardSpanClass(i)"
      class="space-y-2"
    >
      <div class="relative rounded overflow-hidden" :class="mediaHeightClass(i)">
        <img
          v-if="p.couverture"
          class="absolute inset-0 w-full h-full object-cover"
          :src="p.couverture.replace('upload','upload/w_900,c_scale')"
          :alt="p.titre || ''"
        />
        <div v-else class="w-full h-full" :style="i === 0 ? { backgroundColor: 'rgba(0, 181, 226, 1)' } : { backgroundColor: '#e5e7eb' }"></div>

        <!-- Overlay gradiente e titolo sopra media/sfondo -->
        <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 p-4 text-white">
          <p class="text-xs text-white/90 font-sans mb-1" v-if="p.date">{{$dateFns.format(p.date, 'dd-MM-yyyy')}}</p>
          <p v-if="p.url">
            <a :class="['link font-bold font-sans text-white', i === 0 ? 'text-xl md:text-2xl' : '']" :href="p.url" target="_blank" :title="p.titre">{{ truncate(p.titre, 66) }}</a>
          </p>
          <p v-else>
            <n-link :class="['link font-bold font-sans text-white', i === 0 ? 'text-xl md:text-2xl' : '']" :to="'/' + baseurl + '/' + p.categoryPopulated.slug + '/' + p.slug" :title="p.titre">{{ truncate(p.titre, 66) }}</n-link>
          </p>
          <Auteurs class="text-sm text-white" v-if="p.auteur" :author="p.auteur" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["posts", "baseurl"],
  methods: {
    truncate(text, max) {
      if (!text) return ''
      const t = String(text)
      if (t.length <= max) return t
      return t.slice(0, max - 1).trim() + '…'
    },
    cardSpanClass(index) {
      // Pattern per blocchi di 7 su 6 colonne:
      // riga1: [4,2] => 2/3 e 1/3
      // riga2: [2,2,2] => tre 1/3
      // riga3: [3,3] => due 1/2
      const i = index % 7
      if (i === 0) return 'md:col-span-4'
      if (i >= 1 && i <= 4) return 'md:col-span-2'
      return 'md:col-span-3'
    }
  ,
    mediaHeightClass(index) {
      // Altezze fisse per riempire la riga senza spazi: 
      // 0-1 (riga 1) => h-64, 2-4 (riga 2) => h-48, 5-6 (riga 3) => h-56
      const i = index % 7
      if (i === 0 || i === 1) return 'md:h-64'
      if (i >= 2 && i <= 4) return 'md:h-48'
      return 'md:h-56'
    }
  }
}
</script>

<style>
</style>



