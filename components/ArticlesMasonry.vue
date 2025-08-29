<template>
  <section class="grid grid-cols-1 md:grid-cols-6 gap-3 lg:gap-5">
    <div
      v-for="(p, i) in posts"
      :key="p.slug || i"
      :class="cardSpanClass(i)"
      class="space-y-2"
    >
      <div class="relative rounded overflow-hidden" :class="[p.couverture ? mediaHeightClass(i) : '']">
        <!-- Mobile-first: immagine non assoluta per evitare collasso dell'altezza -->
        <img
          v-if="p.couverture"
          class="block w-full h-auto object-contain md:absolute md:inset-0 md:w-full md:h-full md:object-cover"
          :src="p.couverture.replace('upload','upload/w_900,c_scale')"
          :alt="p.titre || ''"
        />
        <!-- Nessun segnaposto colorato quando non c'è immagine -->

        <!-- Overlay e titolo: solo da md in su quando c'è immagine -->
        <template v-if="p.couverture">
          <div class="hidden md:block absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="hidden md:block absolute inset-x-0 bottom-0 p-4 text-white">
            <p v-if="p.url">
              <a :class="['link font-bold font-sans text-white', i === 0 ? 'text-xl md:text-2xl' : '']" :href="p.url" target="_blank" :title="p.titre">{{ truncate(p.titre, 66) }}</a>
            </p>
            <p v-else>
              <n-link :class="['link font-bold font-sans text-white', i === 0 ? 'text-xl md:text-2xl' : '']" :to="'/' + baseurl + '/' + p.categoryPopulated.slug + '/' + p.slug" :title="p.titre">{{ truncate(p.titre, 66) }}</n-link>
            </p>
            <Auteurs class="text-sm text-white" v-if="p.auteur" :author="p.auteur" />
          </div>
        </template>
      </div>

      <!-- Testo sotto l'immagine (visibile anche su desktop se non c'è immagine) -->
      <div class="px-1" :class="{ 'md:hidden': p.couverture }">
        <p v-if="p.url">
          <a :class="['link font-bold font-sans text-blue', !p.couverture ? 'text-xl' : '']" :href="p.url" target="_blank" :title="p.titre">{{ truncate(p.titre, 66) }}</a>
        </p>
        <p v-else>
          <n-link :class="['link font-bold font-sans text-blue', !p.couverture ? 'text-xl' : '']" :to="'/' + baseurl + '/' + p.categoryPopulated.slug + '/' + p.slug" :title="p.titre">{{ truncate(p.titre, 66) }}</n-link>
        </p>
        <Auteurs class="text-sm text-lighterblue" v-if="p.auteur" :author="p.auteur" />
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
    },
    mediaHeightClass(index) {
      // Altezze fisse solo da md in su per riempire la griglia
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


