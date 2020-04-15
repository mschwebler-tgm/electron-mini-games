<template>
  <div class="home">
    <GamesNavigation/>
  </div>
</template>

<script>
// @ is an alias to /src
import GamesNavigation from '@/components/GamesNavigation.vue'

export default {
  name: 'Home',
  components: {
    GamesNavigation,
  },
}
</script>
