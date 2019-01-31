<template lang="pug">
v-container
    v-layout(row wrap)
        v-flex(xs12)
            v-card
                h2.title-main.pt-3.pb-2 Фахові питання
                v-tabs(color='primary' slider-color="yellow" dark fixed-tabs).app-tabs
                    v-tab(ripple ).app-tabs__item Молодший спеціаліст - 2 роки.
                    v-tab(ripple).app-tabs__item Молодший спеціаліст - 3 роки.
                    v-tab(ripple).app-tabs__item магістр
                        
                    v-tab-item
                        v-expansion-panel
                            v-expansion-panel-content
                                div(slot="header") 153 «Мікро- та наносистемна техніка»
                                v-card
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_fah_ekz_153_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на фахове вступне випробування
                                        br
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_dod_ekz_153_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на додаткове вступне випробування
                            v-expansion-panel-content
                                div(slot="header") 171 «Електроніка»
                                v-card
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_fah_ekz_171_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на фахове вступне випробування
                                        br
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_dod_ekz_171_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на додаткове вступне випробування
                                

                    v-tab-item
                        v-expansion-panel
                            v-expansion-panel-content
                                div(slot="header") 153 «Мікро- та наносистемна техніка»
                                v-card
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_fah_ekz_153_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на фахове вступне випробування
                                        br
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_dod_ekz_153_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на додаткове вступне випробування
                            v-expansion-panel-content
                                div(slot="header") 171 «Електроніка»
                                v-card
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_fah_ekz_171_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на фахове вступне випробування
                                        br
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_dod_ekz_171_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на додаткове вступне випробування

                    v-tab-item
                        v-expansion-panel
                            v-expansion-panel-content
                                div(slot="header") 153 «Мікро- та наносистемна техніка»
                                v-card
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_fah_ekz_153_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на фахове вступне випробування
                                        br
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_dod_ekz_153_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на додаткове вступне випробування
                            v-expansion-panel-content
                                div(slot="header") 171 «Електроніка»
                                v-card
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_fah_ekz_171_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на фахове вступне випробування
                                        br
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Prog_dod_ekz_171_-_3_kurs.doc" target="_blank") Перелік програмних питань з дисциплін, які виносяться на додаткове вступне випробування
        v-flex(xs12 sm6 md6).mt-3
            card-router(
                routeName = "/entrants"
                title = "Абітурієнту"
                descr="В пошуках інформації про вступну компанію, навчальні напрями та дні відкритих дверей? Тоді вам сюди."
                bgImg="https://nau.edu.ua/assets/gallery/387/2779.jpg"
            )

        v-flex(xs12 sm6 md6).mt-3
            card-router(
                routeName = "/programs"
                title = "Освітні програми"
                descr="Опис освітніх програм"
                bgImg="http://test2.kafelec.nau.edu.ua/wp-content/uploads/2016/01/19429891_885863951564695_8542832876738011850_n.jpg?id=3177"
            )
       
</template>
