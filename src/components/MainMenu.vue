<template>
    <header>
        <nav>
            <router-link :to="$i18nRoute({ name: 'Home' })">{{ $t('main_menu.home') }}</router-link>
            <router-link :to="$i18nRoute({ name: 'Schedule' })">{{ $t('main_menu.schedule') }}</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MainMenu',
    data() {
        return {
            //
        }
    },
    methods: {
        //
    }
}
</script>