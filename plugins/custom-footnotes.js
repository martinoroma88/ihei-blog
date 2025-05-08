import Vue from 'vue'

// Plugin personalizzato per gestire le note a piè di pagina
Vue.mixin({
  mounted() {
    if (this.$el && this.$el.querySelector && this.$el.classList && this.$el.classList.contains('nuxt-content')) {
      // Elabora tutte le note a piè di pagina nel contenuto
      const processFootnotes = () => {
        // Trova tutti i riferimenti di note a piè di pagina in formato [^1], [^2], ecc.
        const footnoteRefs = this.$el.innerHTML.match(/\[\^(\d+)\]/g)
        if (!footnoteRefs) return

        // Crea la sezione delle note a piè di pagina se non esiste
        let footnotesSection = this.$el.querySelector('.footnotes')
        if (!footnotesSection) {
          footnotesSection = document.createElement('div')
          footnotesSection.className = 'footnotes'
          footnotesSection.innerHTML = '<hr><ol></ol>'
          this.$el.appendChild(footnotesSection)
        }

        const footnotesList = footnotesSection.querySelector('ol')
        
        // Trova tutti i paragrafi che contengono definizioni di note a piè di pagina
        const paragraphs = this.$el.querySelectorAll('p')
        paragraphs.forEach(p => {
          const match = p.textContent.match(/^\[\^(\d+)\]:/)
          if (match) {
            const footnoteId = match[1]
            const footnoteContent = p.innerHTML.replace(/^\[\^\d+\]:/, '')
            
            // Crea l'elemento della nota a piè di pagina
            const footnoteItem = document.createElement('li')
            footnoteItem.id = `fn${footnoteId}`
            footnoteItem.innerHTML = footnoteContent + ` <a href="#fnref${footnoteId}" class="footnote-backref">↩</a>`
            footnotesList.appendChild(footnoteItem)
            
            // Nascondi il paragrafo originale
            p.style.display = 'none'
          }
        })
        
        // Sostituisci i riferimenti a note a piè di pagina nel testo con link
        footnoteRefs.forEach(ref => {
          const footnoteId = ref.match(/\[\^(\d+)\]/)[1]
          const link = `<sup id="fnref${footnoteId}"><a href="#fn${footnoteId}" class="footnote-ref">${footnoteId}</a></sup>`
          this.$el.innerHTML = this.$el.innerHTML.replace(ref, link)
        })
      }
      
      // Esegui l'elaborazione delle note dopo un breve ritardo per assicurarsi che il DOM sia completamente caricato
      setTimeout(processFootnotes, 100)
    }
  }
}) 