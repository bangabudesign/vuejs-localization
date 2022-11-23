import axios from 'axios'
import { i18n } from '../i18n'

const Trans = {
    get defaultLocale() {
        return process.env.VUE_APP_I18N_LOCALE
    },
    get supportedLocales() {
        return process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    },
    get currentLocale() {
        return i18n.locale
    },
    set currentLocale(locale) {
        i18n.locale = locale
    },
    get userSupportedLocale() {
        const userPreferredLocal = Trans.userLocale

        if (Trans.isLocaleSupported(userPreferredLocal.locale)) {
            return userPreferredLocal.locale
        }

        if (Trans.isLocaleSupported(userPreferredLocal.localeNoISO)) {
            return userPreferredLocal.localeNoISO
        }

        return Trans.defaultLocale
    },
    get userLocale() {
        const locale = window.navigator.language || window.navigator.userLanguage || Trans.defaultLocale
        return {
            locale: locale,
            localeNoISO: locale.split('-')[0]
        }
    },
    changeLocale(locale) {
        if (!Trans.isLocaleSupported(locale)) return Promise.reject(
            new Error('Locale not supported')
        )

        if (i18n.locale === locale) return Promise.resolve(locale)

        return Trans.loadLocaleFile(locale).then(messages => {
            i18n.setLocaleMessage(locale, messages.default || messages)
            return Trans.setI18nLocaleInServices(locale)
        })
    },
    isLocaleSupported(locale) {
        return Trans.supportedLocales.includes(locale)
    },
    loadLocaleFile(locale) {
        return import(`@/locales/${locale}.json`)
    },
    setI18nLocaleInServices(locale) {
        Trans.currentLocale = locale
        axios.defaults.headers.common['Accept-language'] = locale
        document.querySelector('html').setAttribute('lang', locale)
        return locale
    },
    routeMiddleware(to, from, next) {
        const locale = to.params.locale

        if(!Trans.isLocaleSupported(locale)) return next(Trans.userSupportedLocale)

        return Trans.changeLocale(locale).then(() => next())
    },
    i18nRoute(to) {
        return {
            ...to,
            params: {locale: this.currentLocale, ...to.params}
        }
    }
}

export {Trans}