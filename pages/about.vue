<template lang="pug">
div
    v-container
        v-layout(row wrap)
            v-flex(xs-12 v-if="history")
                h2.title-main.pt-5 {{ history.title }}
                v-timeline
                    v-timeline-item(large v-for="step, i in history.addHistory" :key="i")
                        span(slot="opposite") {{ step.year }}
                        v-card
                            v-card-title.headline {{ step.title }}
                            v-card-text(v-html="step.descr")
                
            v-flex(xs12 v-if="collaboration")
                v-card.card-block
                    v-card-title.justify-center Міжнародне співробітництво
                    v-card-text
                        v-expansion-panel
                            v-expansion-panel-content(v-for="project ,i in collaboration.projects" :key="i")
                                div(slot="header") {{ project.title }}
                                v-card
                                    v-card-text(v-html="project.descr")
                        
            v-flex(xs12)
                v-card.card-block
                    v-card-title.justify-center Наші партнери
                    v-card-text
                        v-layout(row wrap).partners
                            v-flex(xs4)
                                a(href="http://vdmais.ua/studenty-nau-inspektiruyut-proizvodstvo-vd-mais/" target="_blank")
                                    img(src="http://vdmais.ua/wp-content/themes/vdmais/images/logo.png")
                            v-flex(xs4).pa-2
                                a(href="http://gratis.com.ua/" target="_blank")
                                    img(src="http://gratis.com.ua/images/logotype-gratis.png")
                            v-flex(xs4).pa-2
                                a(href="https://www.rohde-schwarz.com/ua/home_48230.html" target="_blank")
                                    img(src="https://cdn.rohde-schwarz.com/pws/inred/image/layout/rohde-schwarz.min.svg")
                            v-flex(xs4).pa-2
                                a(href="https://www.lifecell.ua/uk/" target="_blank")
                                    img(src="https://www.lifecell.ua/uploads/medialibrary/2017/11/Lifecell_logo.png")
                            v-flex(x43).pa-2
                                a(href="http://teleoptic-ltd.com/" target="_blank")
                                    img(src="http://teleoptic-ltd.com/templates/tx_dailyedition/images/logo.png")
                            v-flex(xs4).pa-2
                                a(href="http://www.ire.kharkov.ua/" target="_blank")
                                    img(src="http://www.ire.kharkov.ua/wp-content/themes/New_Ire/images/ire_logo.png")
                            
                                
                            v-flex(xs4).pa-2
                                a(href="http://ust.com.ua/ru/" target="_blank")
                                    img(src="http://ust.com.ua/wp-content/themes/ust/images/logo.png")
                            v-flex(xs4).pa-2
                                a(href="http://viy.ua/" target="_blank") ТОВ Трансієнт Текнолоджіс
                            v-flex(xs4)
                                a(href="https://iskra.zp.ua/index.php?lang=ua" target="_blank") НВК Іскра
                            v-flex(xs4).pa-2
                                a(href="https://www.pw.edu.pl/engpw" target="_blank") Варшавська Політехніка
                            v-flex(xs4).pa-2
                                a(href="" target="_blank") НДІ "БУРАН"

            
            v-flex(xs12)
                h2.title-main Викладачі кафедри електроніки
    v-container( grid-list-lg)
        v-layout(row wrap)
            v-flex(xs3 v-for="teacher in teachers" :key="teacher.id")
                v-card(:to="`teachers/${teacher.id}`")
                    v-img(:src="teacher.better_featured_image.source_url" height="300")
                    v-card-title {{ teacher.title.rendered }}

            v-flex(xs12).text-xs-center
                v-btn(large :to="`teachers`" nuxt color="primary") Список викладачів
                    //- v-card-text(v-html="teacher.content.rendered")

            v-flex(xs12 md12 v-if="methodic")
                v-card.card-block
                    v-card-title.justify-center {{ methodic.title }}
                    v-card-text(v-html="methodic.опис")

            v-flex(xs12 md12 v-if="prizes")
                v-card.card-block
                    v-card-title.justify-center {{ prizes.title }}
                    v-card-text(v-html="prizes.descr")


            v-flex(xs12 md6 v-if="thesis")
                v-card.card-block
                    v-card-title.justify-center {{ thesis.title }}
                    v-card-text(v-html="thesis.опис")

            
               
                            
                            


</template>

<script>
export default {
    data: () => ({
        page: null,
        history: null,
        collaboration: null,
        partners: null,
        thesis: null,
        methodic: null,
        prizes: null,
        teachers: null,
        
    }),

    computed: {
        
    },
    async mounted() {
        let data = await this.$store.dispatch('getPage', "about");
        this.history = data.acf.history;
        this.collaboration = data.acf.collaboration;
        this.thesis = data.acf.thesis;
        this.methodic = data.acf.methodic;
        this.prizes = data.acf.prizes
        this.page = data;
        let teachers = await this.$store.dispatch("getPostsByCategory", "teachers");
        this.teachers= this.setTeacherByHierarchy(teachers);
    },

    methods: {
        setTeacherByHierarchy(teacherList) {
            let director = teacherList.filter(teacher => {
               if(teacher.pure_taxonomies.categories.some( item => item.category_nicename == "director"))
                return teacher;
            })
            let professors = teacherList.filter(teacher => {
               if(teacher.pure_taxonomies.categories.some( item => item.category_nicename == "professor"))
                return teacher;
            })
            return [...director,...professors];
        }
    }
}
</script>

<style lang="scss">
@import "../assets/style/variables";
.partners {
    justify-content: center;
    align-items: center;
    & a {
        max-width: 100%;
        font-size: 20px;
        text-align: center;
        display: block;
        font-weight: bold;
        color: #000;
        transition: all .3s;
        &:hover{
            color: $primary;
            & > img {   
                filter: grayscale(0%);
            }
        } 
    }
    & img {
        max-width: 100%;
        transition: all .3s;
        height: auto;
        max-height: 50px;
        filter: grayscale(100%);
    }
}
</style>
