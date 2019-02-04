<template lang="pug">
v-card(:to="`news/${routeId}`").card.card_small
    v-img(:height="height" :src="bgImg")
    h2.card-title {{ title }}
    div.card-box
        div.card-box__wrapper
            h2.text-uppercase.card-box__title {{ title }}
            p(:style="{maxHeight: height - 100 + 'px'}").card-box__descr {{ descr}}
 
</template>

<script>
export default {
    props: {
        routeId: {
            type: [Number, String],
            default: null,
            required: true
        },
        height: {
            type: [String, Number],
            default: 200
        },
        title: {
            type: String,
            default: "Название",
            required: true
        },
        descr: {
            type: String,
            default : ''
        },
        bgImg: {
            type: String,
            required: true
        }
    }
}
</script>

