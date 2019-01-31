<template lang="pug">
div
    <iframe src="https://www.google.com/maps/d/embed?mid=1iS9-fu4KIhMuQu_l0FWJGIayM6SNEBPi" width="640" height="480"  class="map" style="pointer-events: none;"></iframe>
    v-container
        v-layout(row wrap)
            v-flex(xs12)
                v-card.card-block
                    v-card-text
                        v-layout(row wrap)
                            v-flex(xs6).pa-2
                                h3 Ми завжди тут щоб почути вас
                                v-list
                                    v-list-tile
                                        v-list-tile-action
                                            v-icon phone
                                        v-list-tile-content
                                            v-list-tile-title (044)4067370; 4067130
                                            v-list-tile-sub-title Телефон
                                    
                                    v-divider
                                    v-list-tile
                                        v-list-tile-action
                                            v-icon mail
                                        v-list-tile-content
                                            v-list-tile-title 
                                                a(href="yanovsky@nau.edu.ua") yanovsky@nau.edu.ua
                                            v-list-tile-sub-title Завідувач кафедри
                                        
                                    v-list-tile
                                        v-list-tile-action
                                        v-list-tile-content
                                            v-list-tile-title 
                                                a(href="mailto:kafre@ukr.net") kafre@ukr.net
                                            v-list-tile-sub-title Кафедра електроніки

                                    v-list-tile
                                        v-list-tile-action
                                        v-list-tile-content
                                            v-list-tile-title
                                                a(href="mailto:BiMS_for_you@ukr.net") BiMS_for_you@ukr.net
                                            v-list-tile-sub-title Уточнення деталей по вступу
                                    
                                    v-divider
                                    v-list-tile
                                        v-list-tile-action
                                            v-icon home
                                        v-list-tile-content
                                            v-list-tile-title Адреса проспект Космонавта Комарова 1, корп. 3, к. 404, 407, 409
                                            v-list-tile-sub-title м. Київ
                                        
                                    
                            v-flex(xs6).pa-2.mt-4
                                v-form
                                    v-text-field(v-model="email" required label="Email")
                                    v-text-field(v-model="name" required label="Ім'я")
                                    v-textarea(v-model="text" required label="Лист")
                                    v-btn(large color="primary") Відправити


</template>

<style lang="scss">
.map {
    margin-bottom: 0;
    padding: 0;
    display: block;
    width: 100%;
    border: none;
}
</style>

<script>
export default {
    data: () => ({
        email: "",
        name: "",
        text: ""
    })
}
</script>

