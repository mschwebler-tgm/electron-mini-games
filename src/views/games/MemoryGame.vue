<template>
    <div>
        <span class="headline">
            Memory Game
        </span>
        <div class="points">
            Points
        </div>
        <div class="game">
            <Memory></Memory>
        </div>
    </div>
</template>

<script>
    import Memory from "../../components/games/memory/Memory.vue";
    export default {
        name: "MemoryGame",
        components: {Memory}
    }
</script>

<style scoped lang="scss">
    .points {
    }
</style>
