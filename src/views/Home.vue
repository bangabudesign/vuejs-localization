<template>
  <div class="hello">
    <MainMenu />
    <h1>Home</h1>
    <LocaleSwitcher />
    <p>{{ $t('message') }}</p>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import MainMenu from '@/components/MainMenu.vue'
export default {
  name: 'HelloWorld',
  components: {
      LocaleSwitcher,
      MainMenu
  },
}
</script>