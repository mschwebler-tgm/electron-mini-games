import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import GameLauncher from '../views/GameLauncher.vue'
import MemoryGame from '../views/games/MemoryGame.vue'
import GameWrapper from '../components/GameWrapper.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/game',
        name: 'GameWrapper',
        component: GameWrapper,
        children: [
            {
                path: 'memory',
                name: 'MemoryGame',
                component: MemoryGame,
            }
        ]
    },
    {
        path: '/',
        name: 'GameLauncher',
        component: GameLauncher
    },
];

const router = new VueRouter({
    routes,
});

export default router
