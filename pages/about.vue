<template lang="pug">
div
    v-container
        v-layout(row wrap)
            v-flex(xs-12)
                v-timeline
                    v-timeline-item(large)
                        span(slot="opposite") 1962 рік
                        v-card
                            v-card-title.headline Створення кафедри
                            v-card-text 
                                p Кафедра була створена в 1962 році як загально-технічна кафедра теоретичних основ радіотехніки на факультеті радіотехніки. 
                                p Завідувач кафедри - доктор техн. наук, професор
                                    b.primary--text К. Круковський – Синевич 
                                    | (1962 - 1976)
                                p Подалі кафедру очолювали: кандидат техн. наук, доцент 
                                    b.primary--text Р. Беляков 
                                    | (1976 – 1979), доктор техн. наук, професор 
                                    b.primary--text Р.Карташов 
                                    | (1979 – 1985), кандидат техн. наук, доцент 
                                    b.primary--text В. Іванов 
                                    |(1985 – 1987).
                    v-timeline-item(large)
                        span(slot="opposite") 1987 рік
                        v-card
                            v-card-title.headline Реорганізація кафедри
                            v-card-text
                                p З 1987 після реорганізації кафедри теоретичних основ радіотехніки в кафедру радіоелектроніки, її понад 20 років очолював доктор техн. наук, професор 
                                    b.primary--text А. Білецький.

                    v-timeline-item(large)
                        span(slot="opposite") 2000-2007 рік
                        v-card
                            v-card-title.headline Нові спеціальності
                            v-card-text
                                p У 2000 році кафедра стає випусковою за спеціальністю 091002 “Біотехнічні і медичні апарати і системи”. В 2004 році розпочато підготовку фахівців зі спеціальності 090803 “Електронні системи”і спеціальності 090804 “Фізична і біомедична електроніка“ . З 2007 року кафедра веде підготовку бакалаврів за двома напрямами підготовки: 050802 “Електронні пристрої та системи” та 050801 “Мікро- і наноелектроніка” , а також готує спеціалістів і магістрів за спеціальностями 09080102 “Фізична і біомедична електроніка“ і 09080202 “Електронні системи”.
                    
                    v-timeline-item(large)
                        span(slot="opposite") 2008 - поточний час
                        v-card
                            v-card-title.headline Вступ в ННІАЕТ та нові освітні програми
                            v-card-text
                                p З 2008 року кафедру радіоелектроніки очолює доктор техн. наук, профессор 
                                    b.primary--text Ф. Яновський.
                                p Кафедра надає послуги в двух освітніх програмах 
                                    b.primary--text 153. Мікро - і наносистемна техніка 
                                    | і 
                                    b.primary--text 171. Електроніка. 
                                    | З 2013 стає частиною Навчально-наукового інституту аеронавігації, електроніки та телекомунікацій(ННІАЕТ).
            v-flex(xs12)
                v-card.card-block
                    v-card-title.justify-center Міжнародне співробітництво
                    v-card-text
                        v-tabs(color='primary' slider-color="yellow" dark fixed-tabs).app-tabs
                            v-tab(ripple ).app-tabs__item Напрямки
                            v-tab(ripple).app-tabs__item Проект EWENT
                            v-tab(ripple).app-tabs__item Проект ACTIVE
                            v-tab(ripple).app-tabs__item Зовнішня науково-методична діяльність
                            
                            v-tab-item
                                p Міжнародні зв’язки кафедри радіоелектроніки з навчальними закладами та організаціями інших країн реалізуються за кількома напрямами.
                                p По-перше, очевидний внесок у розвиток міжнародного співробітництва дає підготовка фахівців для зарубіжних країн – як бакалаврів, спеціалістів і магістрів, так і фахівців найвищого рівня через аспірантуру і докторантуру. Низка колишніх дипломників і аспірантів – вихованців професорів кафедри після завершення навчання і одержання дипломів та наукових ступенів продовжують контакти і співробітництво з кафедрою.
                                p Іншим напрямком є міжвузівське співробітництво із зарубіжними вищими навчальними закладами– партнерами. У 2003 році був підписаний другий договір про співробітництво з Науково-дослідним центром радіолокації і телекомунікацій при Делфтському технічному університеті (Нідерланди), який діє по сьогодні. Крім того, підписаний і діє договір з Технічним університетом Гамбург-Харбург (Німеччина). У рамках цього договору протягом 2005-06 років в Гамбурзі проходив стажування аспірант Островський Я.П. У 2010 році підписаний договір про співробітництво з Варшавською Політехнікою, згідно з яким заплановано обмін студентами і викладачами з метою інтернаціоналізації навчання, зокрема англійською мовою, обмін досвідом і розробка спільного навчально-методичного забезпечення за спеціальностями кафедри.
                            v-tab-item
                                p Проект EWENT в рамках програми Еразмус Мундус, запропонований нами в 2011 році спільно з Варшавським політехнічним університетом та низкою інших університетів Європи, виграв грант і отримав фінансування Європейської Комісії на три роки з 2012 по 2015. Назва проекту EWENT означає East-West European Network on higher Technical education. Проект EWENT координує стипендіальну програму, яка фінансує «мобільність» студентів, які отримують можливість навчатися від 5 до 15 місяців в одному з університетів Західної і Центральної Європи.
                            v-tab-item
                                p
                                    b ACTIVE = Atlantic Caucasus Technical universities Initiative for Valuable Education
                                p Це новий виграний нами міжнародний проект за програмою Еразмус Мундус Action 2. Обмін за цим проектом почнеться у 2014/15 році й буде продовжуватися 3 роки. Робота розпочинається уже в 2013 році.
                            v-tab-item 
                                v-tab-item
                                p
                                    b ACTIVE = Atlantic Caucasus Technical universities Initiative for Valuable Education
                                p Це новий виграний нами міжнародний проект за програмою Еразмус Мундус Action 2. Обмін за цим проектом почнеться у 2014/15 році й буде продовжуватися 3 роки. Робота розпочинається уже в 2013 році.
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
                            
                            


</template>

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
