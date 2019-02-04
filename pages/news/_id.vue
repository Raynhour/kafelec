<template lang="pug">
div
    v-container
        v-card(v-if="item").card-block
            div.text-xs-center
                img(:src="item.thumbnail").card-block__thumbnail
            v-card-title.justify-center {{ item.title }}
            v-card-text(v-html="item.descr")

</template>

<script>
export default {
    data: () => ({
        item: null
    }),
    async mounted() {
        let { data } = await this.$store.dispatch('getNewsById', this.$route.params.id);
        let itemData = {
            title: data.title.rendered,
            thumbnail: data.better_featured_image.source_url,
            descr: data.content.rendered
        }
        this.item = itemData;
    },


    
}
</script>
