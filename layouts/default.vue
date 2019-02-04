<template>
    <v-app>
        <v-navigation-drawer
        v-model="drawer"
        temporary
        fixed
        app
        >
            <v-list>
                <v-list-tile to="/">
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >Головна сторінка</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/entrants">
                    <v-list-tile-action>
                        <v-icon>face</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >Абітурієнту</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>


                <v-list-tile to="/about">
                    <v-list-tile-action>
                        <v-icon>info</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >Про кафедру</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/programs">
                    <v-list-tile-action>
                        <v-icon>school</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >Навчальний процес</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/science">
                    <v-list-tile-action>
                        <v-icon>laptop</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >Наука</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/contacts">
                    <v-list-tile-action>
                        <v-icon>contacts</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title >Контакти</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
        :clipped-left="clipped"
        fixed
        class="justify-center"
        color="primary"
        >

            <v-toolbar-title v-text="title" class="white--text"/>
            <v-spacer></v-spacer>
            <v-btn
                icon
                @click.stop="drawer = !drawer"
                large
            >
                <v-icon class="white--text">menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <transition name="fade" mode="out-in">
                <nuxt />
            </transition>
        </v-content>
        <v-footer

    
        class="justify-center"
        >
            <span>&copy; Національний авіаційний університет</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
data() {
    return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
            {
            icon: 'apps',
            title: 'Welcome',
            to: '/'
            },
            {
            icon: 'bubble_chart',
            title: 'Inspire',
            to: '/inspire'
            }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Кафедра електроніки'
        }
    }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: .5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>


