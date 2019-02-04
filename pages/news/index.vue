<template lang="pug">
div
    v-container
        v-layout(row wrap)
            v-flex(xs12)
                h2.title-main.pb-2 Новини кафедри електроніки
            v-flex(xs4 v-for="item in news" :key="item.id")
                card-small(
                    :routeId = "item.id"
                    :title = "item.title.rendered"
                    :descr="item.acf.descr"
                    :bgImg="item.better_featured_image.source_url"
                    height=300
                )

</template>

<script>
export default {
    data: () => ({
        news: []
    }),
    async asyncData({store}) {
        let data = await store.dispatch('getNews');
        return {news: data}
    },
}
</script>

