import Vue from 'vue'

// Plugin personalizzato avanzato per gestire le note a piè di pagina
Vue.mixin({
  mounted() {
    if (this.$el && this.$el.classList && this.$el.classList.contains('nuxt-content')) {
      // Attendo che il contenuto sia completamente renderizzato
      this.$nextTick(() => {
        setTimeout(() => {
          this.processFootnotes()
        }, 200)
      })
    }
  },
  methods: {
    processFootnotes() {
      if (!this.$el) return

      // Trova tutti i riferimenti di note a piè di pagina nel formato [^n]
      const content = this.$el.innerHTML
      const footnoteRefsMatch = content.match(/\[\^(\d+)\]/g)
      if (!footnoteRefsMatch) return
      
      // Rimuovi duplicati
      const footnoteRefs = [...new Set(footnoteRefsMatch)]
      
      // Trova tutti i paragrafi che contengono definizioni di note a piè di pagina
      const paragraphs = this.$el.querySelectorAll('p')
      const footnoteDefinitions = []
      
      paragraphs.forEach(p => {
        const text = p.textContent || ''
        const match = text.match(/^\[\^(\d+)\]:/)
        if (match) {
          const footnoteId = match[1]
          const content = p.innerHTML.replace(/^\[\^\d+\]:/, '').trim()
          
          footnoteDefinitions.push({
            id: footnoteId,
            content: content,
            element: p
          })
          
          // Nascondi il paragrafo originale
          p.style.display = 'none'
        }
      })
      
      // Se non ci sono definizioni di note, uscire
      if (footnoteDefinitions.length === 0) return
      
      // Crea o seleziona la sezione delle note a piè di pagina
      let footnotesSection = this.$el.querySelector('.footnotes')
      if (!footnotesSection) {
        footnotesSection = document.createElement('div')
        footnotesSection.className = 'footnotes'
        footnotesSection.innerHTML = '<hr><ol></ol>'
        this.$el.appendChild(footnotesSection)
      }
      
      const footnotesList = footnotesSection.querySelector('ol') || document.createElement('ol')
      footnotesList.innerHTML = '' // Pulisci la lista in caso di precedenti elaborazioni
      
      if (!footnotesSection.contains(footnotesList)) {
        footnotesSection.appendChild(footnotesList)
      }
      
      // Popola la lista delle note a piè di pagina
      footnoteDefinitions.forEach(def => {
        const footnoteItem = document.createElement('li')
        footnoteItem.id = `fn${def.id}`
        footnoteItem.innerHTML = def.content + ` <a href="#fnref${def.id}" class="footnote-backref">↩</a>`
        footnotesList.appendChild(footnoteItem)
      })
      
      // Sostituisci i riferimenti nel testo con link cliccabili
      const contentNodes = this.getAllTextNodes(this.$el)
      for (const node of contentNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
          for (const ref of footnoteRefs) {
            const id = ref.match(/\[\^(\d+)\]/)[1]
            if (node.nodeValue.includes(ref)) {
              // Crea un frammento di documento con il link
              const fragment = document.createDocumentFragment()
              const parts = node.nodeValue.split(ref)
              
              for (let i = 0; i < parts.length; i++) {
                fragment.appendChild(document.createTextNode(parts[i]))
                
                if (i < parts.length - 1) {
                  const sup = document.createElement('sup')
                  sup.id = `fnref${id}`
                  
                  const link = document.createElement('a')
                  link.href = `#fn${id}`
                  link.className = 'footnote-ref'
                  link.textContent = id
                  
                  sup.appendChild(link)
                  fragment.appendChild(sup)
                }
              }
              
              // Sostituisci il nodo di testo originale con il frammento
              node.parentNode.replaceChild(fragment, node)
            }
          }
        }
      }
    },
    
    // Funzione per ottenere tutti i nodi di testo in un elemento
    getAllTextNodes(el) {
      const nodes = []
      const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false)
      
      let node
      while (node = walk.nextNode()) {
        // Skippa i nodi nelle classi che non devono essere elaborati
        let parent = node.parentNode
        let skip = false
        
        while (parent && parent !== el) {
          if (parent.tagName === 'SUP' || parent.className === 'footnotes') {
            skip = true
            break
          }
          parent = parent.parentNode
        }
        
        if (!skip) {
          nodes.push(node)
        }
      }
      
      return nodes
    }
  }
}) 