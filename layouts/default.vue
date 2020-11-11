<template>
  <div class="text-gray-900 font-sans">
    <div class="bg-champagne relative z-30">
      <div class="container">
        <Navbar />
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
body, html {
  font-size: 17px;
}

.container {
  @apply mx-auto p-4;
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

.nuxt-link-active:not(.transparent) {
  @apply font-bold bg-cyan text-white px-1;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-bold leading-tight text-black font-serif;
}

h1 {
  @apply text-3xl mb-4;
  @screen lg {
    @apply text-4xl mb-6;
  }
}
h2 {
  @apply text-2xl mb-3;
  @screen lg {
    @apply text-3xl mb-4;
  }
}
h3 {
  @apply text-xl mb-1;
  @screen lg {
    @apply text-2xl mb-2;
  }
}
</style>