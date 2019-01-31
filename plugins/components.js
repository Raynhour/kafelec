import Vue from 'vue';

import card from "~/components/card.vue";
import cardRouter from "~/components/cardRouter.vue";
import cardSmall from "~/components/cardSmall.vue";

const components = {card, cardRouter, cardSmall}; 

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
});

