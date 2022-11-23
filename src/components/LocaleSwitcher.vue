<template>
    <ul>
        <li v-for="locale in supportedLocales" :key="locale" v-on:click="switchLocale(locale)">{{ locale }}</li>
    </ul>
</template>
 
<script>
import {Trans} from '@/plugins/Translation' 
export default {
    name: 'LocaleSwitcher',
    data() {
        return {
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
        }
    },
    computed: {
        supportedLocales() {
            return Trans.supportedLocales
        }
    },
    methods: {
        switchLocale(locale) {
            if (this.$i18n.locale !== locale) {
                const to = this.$router.resolve({ params: {locale} })
                return Trans.changeLocale(locale).then(() => {
                    this.$router.push(to.location)
                })
            }
        }
    }
}
</script>