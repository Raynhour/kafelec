<template lang="pug">
div
    v-container
        v-layout(row wrap)
            v-flex(xs12)
                v-card.card-block
                    v-card-title.text-uppercase.justify-center Наука
                    v-card-text
                        v-expansion-panel
                            v-expansion-panel-content
                                div(slot="header").headline Наукові напрями
                                v-card.card-inner
                                    v-card-title Наукова діяльність кафедри
                                    v-card-text
                                        p Викладачі, аспіранти і студенти кафедри беруть участь у виконанні держбюджетних, учбово-методичних і ініціативних науково-дослідних робіт. Багато результатів виконаних робіт впроваджуються в навчальний процес, використовуються в проектних, виробничих і експлуатаційних підприємствах України.
                                        h3 Наукові напрямки
                                        v-data-table(:headers="headers" :items="directings" hide-actions)
                                            template(slot="items" slot-scope="props")
                                                td {{props.item.name}}
                                                td {{ props.item.leader}}
                            v-expansion-panel-content
                                div(slot="header").headline Плани
                                v-card.card-inner
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Plan_nauk_metod_seminaru.pdf" target="_blank") План науково-методичного семінару кафедри
                                        br
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Plan_nauk_seminaru.pdf" target="_blank") План наукового семінару (спільно з IEEE)
                            v-expansion-panel-content
                                div(slot="header").headline Публікації
                                v-card.card-inner
                                    v-card-title Обрані публікації
                                    v-card-text
                                        ol
                                            li Ф. Яновський. 
                                                a(href="http://kafelec.nau.edu.ua/publ-ukr.html" target="_blank") “Радіолокаційні системи повітряних суден”, підручник для вищих навчальних закладів з грифом МОН, 
                                                | Видавництво НАУ, 2012, 698 с.
                                            li A. Nebylov, J. Watson, F. Yanovsky, et al. 
                                                a(href="http://kafelec.nau.edu.ua/publ-ukr.html") “Aerospace Sensors”, 
                                                | Sensor Technology Series, Momentum Press, 2011, 576 pp.
                                            li F. Yanovsky. 
                                                a(href="http://kafelec.nau.edu.ua/publ-ukr.html" target="_blank") “Inferring microstructure and turbulence properties in rain through observations and simulations of signal spectra measured with Doppler–polarimetric radars”. 
                                                | Book Chapter in: Polarimetric Detection, Characterization, and Remote Sensing, NATO Science for Peace and Security Series C: Environmental Security, Springer, 2011, 545 pp.

                            v-expansion-panel-content
                                div(slot="header").headline Список наукових праць
                                v-card.card-inner
                                    v-card-text
                                        a(href="http://kafelec.nau.edu.ua/Materialu/Spus_publ_2012-2013.pdf" target="_blank") Список наукових та навчально-методичних праць викладачів кафедр и електроніки за 2012 р. та 2013 р.
                            v-expansion-panel-content
                                div(slot="header").headline Наукові журнали
                                v-card.card-inner
                                    v-card-text
                                        a(href="http://jrnl.nau.edu.ua/index.php/ESU" target="_blank") Електроніка та системи управління
                           
</template>
<script>
export default {
    data: () => ({
        headers: [
            {
                text: "Назва наукового напряму",
                align: "center",
                value: "name"
            },
            {
                text: "Науковий керівник",
                align: "center",
                value: "leader"
            }
        ],

        directings: [
            {
                name: "Доплерівсько-поляриметрична радіолокація. Обробка сигналів і даних дистанційного зондування та діагностики об’єктів.",
                leader: "Ф. Яновський"
            },
            {
                name: "Моделювання нанорозмірних біомедичних процесів.",
                leader: "Е. Азнакаєв"
            },
            {
                name: "Завадостійке кодування та криптографічний захист інформації.",
                leader: "А. Білецький"
            },
            {
                name: "Ортогональні перетворення сигналів та зображень в стохастичних базисах.",
                leader: "І. Бойко"
            },
            {
                name: "Біомедичні цифрові комлекси.",
                leader: "С. Мірошниченко"
            },
            {
                name: "Методи і засоби підвищення якості електроенергії в системах електроживлення промислового призначення.",
                leader: "Б. П’яних"
            },
            {
                name: "Непараметричні алгоритми обробки цифрових сигналів.",
                leader: "Р. Сініцин"
            },
            {
                name: "Системи стиску сигналів та зображень.",
                leader: "В. Шутко"
            },
            {
                name: "Розробка малошумних високочастотних генераторів керованих напругою. Мінімізація очікуваних витрат на обслуговування цифрової авіоніки впродовж усього життєвого циклу.",
                leader: "В. Уланський"
            },
            {
                name: "Дуальність та парування на алгебраїчних многовидах.",
                leader: "М. Глазунов"
            },
        ]
    })
}
</script>
