<template lang="pug">
v-card(:to="routeName").card
    v-img(:height="height" :src="bgImg")
    h2.card-title {{ title }}
    div.card-box
        div.card-box__wrapper
            h2.text-uppercase.card-box__title {{ title }}
            p {{ descr}}
 
</template>

<script>
export default {
    props: {
        routeName: {
            type: String,
            default: null,
            required: true
        },
        height: {
            type: Number,
            default: 350
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

