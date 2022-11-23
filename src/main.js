import Vue from 'vue'
import App from './App.vue'
import {i18n} from './i18n'
import router from './router'
import {Trans} from './plugins/Translation'

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)

Vue.config.productionTip = false

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  
  // use the language from the routing param or default language
  let locale = to.params.locale;
  if (!locale) {
    locale = 'en'
  }

  // set the current language for i18n
  i18n.locale = locale
  next()
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
