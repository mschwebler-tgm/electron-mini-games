<template>
    <div>
        <transition-group name="star-gain">
            <template v-for="(star, index) in fullStars">
                <svg
                        :key="index"
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        width="48"
                        viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                          fill="orange"></path>
                </svg>
            </template>
        </transition-group>

        <template v-for="star in emptyStars">
            <svg xmlns="http://www.w3.org/2000/svg"
                 height="48" width="48"
                 viewBox="0 0 24 24">
                <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
            </svg>
        </template>
    </div>
</template>

<script>
    import MemoryTile from "@/components/games/memory/MemoryTile";
    const MAX_STARS = 10;

    export default {
        name: "MemoryPoints",
        props: {
            points: {
                type: Number,
                default: 0,
            },
        },
        computed: {
            fullStars() {
                return Math.min(MAX_STARS, Math.floor(this.points / (MemoryTile.FULL_POINTS * 1.5)));
            },
            emptyStars() {
                return MAX_STARS - this.fullStars;
            },
        },
    };
</script>

<style>
    .star-gain-enter-active {
        -webkit-animation: star-gain-animation .5s ease-out;
        -o-animation: star-gain-animation .5s ease-out;
        animation: star-gain-animation .5s ease-out;
    }

    @keyframes star-gain-animation {
        0% {
            -webkit-transform: scale3d(0, 0, 0);
            -moz-transform: scale3d(0, 0, 0);
            -ms-transform: scale3d(0, 0, 0);
            -o-transform: scale3d(0, 0, 0);
            transform: scale3d(0, 0, 0);
        }
        50% {
            -webkit-transform: scale3d(1.2, 1.2, 1.2);
            -moz-transform: scale3d(1.2, 1.2, 1.2);
            -ms-transform: scale3d(1.2, 1.2, 1.2);
            -o-transform: scale3d(1.2, 1.2, 1.2);
            transform: scale3d(1.2, 1.2, 1.2);
        }
        100% {
            -webkit-transform: scale3d(1, 1, 1);
            -moz-transform: scale3d(1, 1, 1);
            -ms-transform: scale3d(1, 1, 1);
            -o-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }

</style>