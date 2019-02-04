<template lang="pug">
v-container
    v-layout(row wrap)
        v-flex(xs12)
            v-card
                h2.title-main.pt-3.pb-2 Освітні програми
                v-tabs(color='primary' slider-color="yellow" 
                    dark fixed-tabs
                ).app-tabs
                    v-tab(ripple v-for="program, i in programs" :key="i").app-tabs__item {{ program.name }}
                    v-tab-item( v-for="program,i in programs" :key="i")
                        v-expansion-panel
                            v-expansion-panel-content(v-for="item,index in program.subItems" :key="index")
                                div(slot="header") {{ item.title }}
                                v-card
                                    v-card-text(v-html="item.descr")
                
        v-flex(xs12 sm6 md6).mt-3
            card-router(
                routeName = "/entrants"
                title = "Абітурієнту"
                descr="В пошуках інформації про вступну компанію, навчальні напрями та дні відкритих дверей? Тоді вам сюди."
                bgImg="https://nau.edu.ua/assets/gallery/387/2779.jpg"
            )

        v-flex(xs12 sm6 md6).mt-3
            card-router(
                routeName = "/education"
                title = "Фахові та вступні питання"
                descr="Перелік питань для магістрів, 2-го та 3-го курсів"
                bgImg="http://8-a.pp.ua/wp-content/uploads/2015/12/stockxpertcom_id563921_size2.jpg"
            )
                            
</template>

<script>
export default {
    data: () => ({
        programs: []    
    }),
    async asyncData( {store} ){
        let data = await store.dispatch("getPage", "programs");
        return {programs: data.acf.programs}
    }
}
</script>
