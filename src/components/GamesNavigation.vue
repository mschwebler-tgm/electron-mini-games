<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="4" v-for="game in games">
        <router-link :to="game.route">
          {{ game.name }}
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'GamesNavigation',
    data() {
      return {
        games: [
          {
            name: 'Memory',
            route: '/game/memory',
          },
        ],
      }
    },
  });
</script>
