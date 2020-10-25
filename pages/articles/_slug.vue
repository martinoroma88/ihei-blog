<template>
    <div>
        <p><n-link to="/">Home</n-link></p>
        <h1>{{post.titre}}</h1>
        <nuxt-content :document="post" />
    </div>
</template>

<script>
export default {
    async asyncData({$content, params}) {
        const post = await $content("posts", params.slug).fetch();

        return {post};
    }
}
</script>
