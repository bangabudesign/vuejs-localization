<template>
  <div class="hello">
    <MainMenu />
    <h1>Schedule</h1>
    <LocaleSwitcher />
    <p>{{ $t('message') }}</p>
  </div>
</template>

<script>
import LocaleSwitcher from '@/components/LocaleSwitcher.vue'
import MainMenu from '@/components/MainMenu.vue'
export default {
  name: 'ScheduleVuews',
  components: {
      LocaleSwitcher,
      MainMenu
  },
}
</script>
