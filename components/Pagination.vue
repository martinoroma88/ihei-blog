<template>
  <nav class="w-full flex items-center justify-between space-x-2 mt-10 font-sans" v-if="pages > 1">
    <!-- Link PREV button -->
    <n-link title="Prev"
      class="font-bold text-lighterblue py-2 hover:text-lightblue focus:shadow-none focus:text-blue transition duration-75"
      :to="page !== 1 ? goTo(page - 1) : goTo(page)"
      :class="page === 1 ? 'opacity-50 cursor-not-allowed' : ''"
    >
      <IconLeft />	
    </n-link>
    <!-- Page numbers container -->
    <div class="flex space-x-2 text-lighterblue">
      <n-link class="pagination-item cursor-pointer" :class="{'pagination-item--active': page === 1}" :to="goTo(1)">1</n-link>
      <div class="pagination-item" v-if="page > delta + 1">&middot;&middot;&middot;</div>
      <n-link
        v-if="p !== 1 && p !== pages && Math.abs(p - page) < delta"
        :class="{'pagination-item--active': page === p}"
        class="pagination-item cursor-pointer"
        v-for="p in pages" :key="p"
        v-text="p"
        :to="goTo(p)"
      />
      <div class="pagination-item" v-if="page < pages -  delta">&middot;&middot;&middot;</div>
      <n-link class="pagination-item cursor-pointer" :class="{'pagination-item--active': page === pages}" :to="goTo(pages)">{{ pages }}</n-link>
    </div>
    <!-- Link NEXT button -->
    <n-link title="Next"
      class="font-bold text-lighterblue py-2 hover:text-lightblue focus:shadow-none focus:text-blue transition duration-75"
      :to="page !== pages ? goTo(page + 1) : goTo(page)"
      :class="page === pages ? 'opacity-50 cursor-not-allowed' : ''"
    >
      <IconRight />	
    </n-link>
  </nav>
</template>

<script>
const VISIBLE_PAGES_DELTA = 2

export default {
  props: {
    page: Number,
    posts: Number,
    perPage: Number
  },
  computed: {
    pages(){
      return Math.ceil(this.posts / this.perPage)
    },
    delta() {
      return VISIBLE_PAGES_DELTA
    }
  },
  methods: {
    goTo(page) {
      if (page === 1) return '/'
      return '/' + page
    }
  }
}
</script>

<style>
.pagination-item {
  @apply flex items-center justify-center px-1 h-10 transition duration-75;
  @screen sm {
    @apply px-2;
  }
}
.pagination-item--active {
  @apply text-lightblue font-bold cursor-default;
}
</style>