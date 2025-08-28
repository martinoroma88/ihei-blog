<template>
  <nav v-if="items.length" class="mb-6 p-4 bg-gray-100 rounded text-sm font-sans text-lighterblue">
    <p class="font-bold text-blue mb-2">Sommaire</p>
    <ul class="space-y-1">
      <li v-for="item in items" :key="item.id" :class="{ 'pl-4': item.level === 3 }">
        <a class="link" :href="'#' + item.id" @click.prevent="scrollTo(item.id)">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
  <div v-else></div>
</template>

<script>
export default {
  props: {
    rootSelector: {
      type: String,
      default: '#category-content'
    }
  },
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.buildToc()
    this.scrollToHashIfNeeded()
  },
  methods: {
    buildToc() {
      const root = document.querySelector(this.rootSelector)
      if (!root) return
      const headings = root.querySelectorAll('h2, h3')
      const items = []
      headings.forEach(h => {
        if (!h.id) {
          h.id = this.slugify(h.textContent || '')
        }
        const level = h.tagName === 'H3' ? 3 : 2
        const text = (h.textContent || '').trim()
        if (text) {
          items.push({ id: h.id, text, level })
        }
      })
      this.items = items
    },
    slugify(text) {
      return text
        .toString()
        .normalize('NFD').replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
    },
    scrollTo(id) {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    },
    scrollToHashIfNeeded() {
      if (location.hash && location.hash.length > 1) {
        const id = location.hash.slice(1)
        this.$nextTick(() => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        })
      }
    }
  }
}
</script>

<style scoped>
</style>



