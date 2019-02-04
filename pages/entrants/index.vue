<template lang="pug">
div
    v-layout(row wrap)
        v-flex(xs12 sm12 md6)
            card-router(
                routeName = "/programs"
                title = "Освітні програми"
                descr="Опис освітніх програм"
                bgImg="http://test2.kafelec.nau.edu.ua/wp-content/uploads/2016/01/19429891_885863951564695_8542832876738011850_n.jpg?id=3177"
            )
        v-flex(xs12 sm12 md6)
            card-router(
                routeName = "/education"
                title = "Фахові та вступні питання"
                descr="Перелік питань для магістрів, 2-го та 3-го курсів"
                bgImg="http://8-a.pp.ua/wp-content/uploads/2015/12/stockxpertcom_id563921_size2.jpg"
            )
    v-container

        v-card.card-block(v-for="block, i in page" :key="i")
            v-card-title.justify-center {{ block.title }}
            v-card-text
                v-layout
                    v-flex(xs6 v-html="block.descr")
                    v-flex(xs6)
                        v-img.card-block__img(:src="block.img.url")
        
        v-card.card-block   
            v-card-title.justify-center Презинтація кафедри
            v-card-text
                <iframe src="//www.slideshare.net/slideshow/embed_code/key/4nHU0dv1ZoLQEl" width="100%"  height="500" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/ssuseref541b1/electronics-department2014" title="Electronics department2014" target="_blank">Electronics department2014</a> </strong> from <strong><a href="https://www.slideshare.net/ssuseref541b1" target="_blank">Андрей Миколушко</a></strong> </div>
        
</template>

<script>
export default {
    data: () => ({
        page: null
    }),
    async asyncData({store}) {
        let { acf } = await store.dispatch('getPage', "entrants");
        return {page: acf};
    }
}
</script>
