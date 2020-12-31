<template>
  <div class="mx-auto container p-4 lg:px-16 text-gray-800 font-sans">
    <Navbar />
    <Nuxt />
    <a style="position:fixed; left:-7000px" href="https://www.genesicom.com/">Sviluppato da Genesi Communication Design</a>
  </div>
</template>

<style>
body, html {
  font-size: 19px;
}

.content p:not(:last-child) {
  @apply mb-4;
}

.content blockquote:not(:last-child) {
  @apply py-4;
}

.content blockquote {
  @apply text-lg text-center italic font-serif;
}
.content blockquote:before, .content blockquote:after {
  content: "";
  @apply border-t border-gray-300 w-16 block mx-auto my-4;
}

.link:hover {
  @apply underline;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-bold leading-tight text-black;
}

h1 {
  @apply text-2xl mb-4;
  @screen lg {
    @apply text-3xl mb-6;
  }
}
</style>