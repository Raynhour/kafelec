<template lang="pug">
div(v-if="teacher")
    v-container
        v-layout
            v-flex(xs12).card-block.pt-5
                v-card
                    v-layout(row wrap).pl-5.pr-5.pt-2.pb-2
                        v-flex(xs12)
                            v-btn(flat :to="`/teachers`" nuxt color="primary")
                                v-icon arrow_back
                                | До списку викладачів
                        v-flex(xs-6)
                            h2 {{ teacher.title.rendered }}
                            div(v-html="teacher.acf.position")
                        v-flex(xs-6)
                            v-img(:src="teacher.better_featured_image.source_url" height="350px")
                    v-divider
                    v-card-text(v-html="teacher.content.rendered")

</template>

<script>
export default {
    data: () => ({
        teacher: null
    }),
    async mounted() {
        console.log(this.$route.params.id)
        let teacher = await this.$store.dispatch("getPostById", this.$route.params.id);
        this.teacher= teacher;
    },
}
</script>
