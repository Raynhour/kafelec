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
                                        v-data-table(:headers="headers" :items="directings" hide-actions disable-initial-sort)
                                            template(slot="items" slot-scope="props")
                                                td {{props.item.name}}
                                                td {{ props.item.leader}}
                            v-expansion-panel-content(v-for="section, i in sections" :key="i")
                                div(slot="header").headline {{ section.title }}
                                v-card.card-inner
                                    v-card-text(v-html="section.descr")
                                        
                            
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
                name: "Розробка малошумних високочастотних генераторів керованих напругою. Мінімізація очікуваних витрат на обслуговування цифрової авіоніки впродовж усього життєвого циклу.",
                leader: "В. Уланський"
            },
            {
                name: "Дуальність та парування на алгебраїчних многовидах.",
                leader: "М. Глазунов"
            },
        ],
        sections: null
    }),

    async mounted() {
        let data = await this.$store.dispatch('getPage', "science");
        this.sections = data.acf.section;
     }
}
</script>
