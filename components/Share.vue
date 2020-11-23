<template>
    <a 
      class="hover:text-lightblue focus:text-blue transition duration-75 font-sans flex items-center space-x-2" 
      @click.prevent="goTo"
      :href="shareLink"
      target="_blank"
    >
      <IconFacebook />
      <span>Partager</span>
    </a>
</template>

<script>
export default {
  computed: {
    shareLink() {
      const url = process.env.baseURL + this.$route.path
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`
    }
  },
  methods: {
    goTo() {
      window.open(this.shareLink, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600')
    }
  }
}
</script>
