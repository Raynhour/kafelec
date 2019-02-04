<template lang="pug">
div
    v-container( grid-list-lg)
        v-layout(row wrap)
            v-flex(xs12)
                h2.title-main.pt-5 Кадровий склад
            v-flex(xs3 v-for="teacher in teachers" :key="teacher.id")
                v-card(:to="`teachers/${teacher.id}`").teacher
                    v-img(:src="teacher.better_featured_image.source_url" height="300")
                    v-card-title {{ teacher.title.rendered }}
</template>

<script>
export default {
    data: () => ({
        teachers: null
    }),
    async mounted() {
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

</style>
