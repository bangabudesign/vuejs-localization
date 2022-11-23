<template>
  <div class="hello">
    <MainMenu />
    <h1 class="text-pink-400">Home</h1>
    <LocaleSwitcher />
    <p>{{ $t('message') }}</p>
    <form action="">
      <input type="text" placeholder="test test input" class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-sm bg-gray-100 text-pink-500">
      <input type="submit">
      <button>test button</button>
    </form>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import MainMenu from '@/components/MainMenu.vue'
export default {
  name: 'HomePage',
  components: {
      LocaleSwitcher,
      MainMenu
  },
}
</script>