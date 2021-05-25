<template>
  <div class="flex space-x-2 font-sans items-center">
    <div v-if="icon">
      <IconUser />
    </div>
    <p> 
      <span>
        {{ author }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
    icon: Boolean
  } 
}
</script>