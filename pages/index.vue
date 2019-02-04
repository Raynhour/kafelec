<template lang="pug">
div
    v-layout(row wrap)
        v-flex(xs12 sm6 md7)
            card-router(
                routeName = "/entrants"
                title = "Абітурієнту"
                descr="В пошуках інформації про вступну компанію, навчальні напрями та дні відкритих дверей? Тоді вам сюди."
                bgImg="https://nau.edu.ua/assets/gallery/387/2779.jpg"
            )

        v-flex(xs12 sm6 md5)
            card-router(
                routeName = "/teleoptic"
                title = "Філіал кафедри"
                descr='Науково виробнича компанія "Телеоптик"'
                
                bgImg="http://test2.kafelec.nau.edu.ua/wp-content/uploads/2018/04/DSC01226.jpg"
            )
             
        v-flex(xs12 sm6 md6) 
            card-router(
                routeName = "/about"
                title = "Про кафедру"
                descr="Інформація про кафедру електроніки, її історії, співробітництво, партнери."
                bgImg="http://test2.kafelec.nau.edu.ua/wp-content/uploads/2018/03/21151463_922417454576011_7020409908978870612_n.jpg"
            )

        v-flex(xs12 sm6 md6)
            card-router(
                routeName = "/contacts"
                title = "Контакти"
                descr="Адреса, електронна пошта та телефон кафедри електроніки"
                bgImg="https://st4.depositphotos.com/3351249/19678/v/600/depositphotos_196785790-stock-video-gomel-belarus-may-2018-person.jpg"
            )
    v-container
        v-layout(row wrap)
            v-flex(xs12)
                v-card.card-block
                    v-card-text(v-html="page.content"  v-if="page")
                    //- v-card-title Кафедра електроніки
                    //- v-card-text 
                    //-     p “Ми живемо в епоху, коли відстань від самих божевільних фантазій до абсолютно реальної дійсності скорочується з неймовірною швидкістю.”
                    //-     v-img(src="http://test2.kafelec.nau.edu.ua/wp-content/uploads/2018/04/P4214874-2.jpg")
                    //-     p 
                    //-         b Дорогі друзі!
                    //-     p Розпочинається час чергового набору на перший курс. Незважаючи на те, що ми намагаємося працювати з абітурієнтами та їхніми батьками протягом усього року, ми щорічно з хвилюванням вступаємо в цей період. Адже від того, які студенти прийдуть до нас на перший курс, залежить дуже багато: і якість майбутніх випускників, і подальший розвиток кафедри, інституту, та й усього університету, і наше життя на найближчі п’ять років, і мікроклімат у нашому науково-педагогічному колективі.
                    //-     p Але головним є те, що з цим пов’язане майбутнє України, нашої Батьківщини. Україна зберігає високий науково-технічний і педагогічний потенціал, який (ви це самі побачите) досить характерно представлений яскравими індивідуальностями, що складають колектив нашої кафедри.
                    //-     p Зараз настав час великих змін у житті країни. І ви повинні бути добре підготовленими до нових умов у період вашої активної роботи. Наше завдання – передати наші знання й досвід вам, дорогі наші потенційні студенти.
    v-container
        v-layout(row wrap)
            v-flex(xs12)
                v-card
                    v-layout(row wrap)
                        v-flex(xs12)
                            h2.title-main.title-main_primary Останні новини кафедри
                        v-flex(xs6 sm6 md4 v-for="item, i in news" :key="i" v-if="item.id")
                            card-small(
                                :routeId = "item.id"
                                :title = "item.title"
                                :descr="item.descr"
                                :bgImg="item.thumbnail"
                                height=300
                            )
                        
                        v-flex(xs12 class="text-xs-center")
                            v-btn(
                                nuxt
                                :to="{name: 'news'}"
                                color="primary"
                                large
                    
                            ).btn-large.mb-3 всі новини


        
</template>

<script>
import newsData from "~/news";
//- bgImg="http://getwallpapers.com/wallpaper/full/c/8/d/541697.jpg"
export default {
    data: () => ({
        page: null,
        news: null
    }),

    async asyncData({store}) {
        let data = await store.dispatch('getPage', "home"),
            pageData = {
                title : data.title.rendered,
                content: data.content.rendered
            };
        return {page: pageData};
        
    },
    async mounted() { 
        let data = await this.$store.dispatch('getNews'),
            newsData = data.map(item => {
            return {
                id: item.id,
                title: item.title.rendered,
                descr: item.acf.descr,
                thumbnail: item.better_featured_image.source_url
            }
        })
        this.news = newsData;
    }
}
</script>
