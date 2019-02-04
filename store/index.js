import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    namespaced: true,
    state: {
        counter: 0
    },
    mutations: {
    },
    actions: {
        async getNews() {
            try {
                let { data } = await this.$axios.get('/posts');
                return data;
            }
            catch (e) {
                throw e;
            }
            
        },

        async getPostsByCategory(store, category) {
            try {
                let { data } = await this.$axios.get(`/posts?filter[category_name]=${category}`);
                return data;
            }
            catch (e) {
                throw e;
            }
            
        },

        async getPostById(store, id) {
            try {
                let { data } = await this.$axios.get(`/posts/${id}`);
                return data;
            }
            catch (e) {
                throw e;
            }
        },

        async getNewsById(store, id) {
            try {
                let data = await this.$axios.get(`/posts/${id}`);
                return data;
            }
            catch (e) {
                throw e;
            }
        },

        async getPage(store, page) {
            try {
                let { data } = await this.$axios.get(`/pages?slug=${page}`);
                return data[0];
            }
            catch (e) {
                throw e;
            }
        }

    }
})

export default store;