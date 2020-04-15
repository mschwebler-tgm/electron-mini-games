<template>
  <v-app>
    <v-content>
      <GamesNavigation/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import GamesNavigation from './components/GamesNavigation.vue';

export default Vue.extend({
  name: 'App',

  components: {
    GamesNavigation,
  },

  data: () => ({
    //
  }),
});
</script>
