<template lang="pug">
div
    v-container
        v-card.card-block
            v-card-title.justify-center Науково виробнича компанія "Телеоптик"
            v-card-text
                p На базі НВК Телеоптик створено філію кафедри електроніки національного авіаційного університету.
                    | Тут проводяться лекційні та лабораторні заняття для студентів 3-х, 4-х та 5-х курсів, а також технологічні та дослідницькі практики
                v-carousel
                    v-carousel-item(src="http://test2.kafelec.nau.edu.ua/wp-content/uploads/2018/04/DSC01226.jpg")
                    v-carousel-item(src="teleoptic1.jpg")
                    v-carousel-item(src="teleoptic2.jpg")
                h3.card-subtitle.mt-3 Що саме виробляє компанія?
                v-layout(row).justify-center.align-center
                    v-flex(xs4)
                        img(src="http://teleoptic-ltd.com/images/КРДЦ-01-АЛЬФА.jpg").img-responsive    
                    v-flex(xs4)
                        img(src="http://teleoptic-ltd.com/images/ВАТЕЛ-1.jpg").img-responsive  
                    v-flex(xs4)
                        img(src="http://teleoptic-ltd.com/images/КРДЦ-00-АЛЬФА.jpg").img-responsive
                h3.card-subtitle.mt-3 Працевлаштування
                p.text-xs-center Кращі студенти щорічну отримують працевлаштування.
                v-layout(row)
                    v-flex(xs6)
                        img(src="teleoptic_student1.jpg").img-responsive
                    v-flex(xs6)
                        img(src="teleoptic_student2.jpg").img-responsive
                
</template>

<script>
export default {
    data: () => ({
        imgs: ['http://test2.kafelec.nau.edu.ua/wp-content/uploads/2018/04/DSC01226.jpg', 'http://test2.kafelec.nau.edu.ua/wp-content/uploads/2018/04/DSC01226.jpg']
    })
}
</script>
