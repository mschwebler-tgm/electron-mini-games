<template>
    <div class="d-flex flex-wrap">
        <MemoryCard
                v-for="tile in tiles"
                :key="tile.id"
                :active="selectedTile === tile"
                class="ma-3"
                @select="select(tile)">
            {{ tile.subject }}
        </MemoryCard>
    </div>
</template>

<script>
    import MemoryCard from "./MemoryCard.vue";
    import Memory from "@/components/games/memory/Memory";

    export default {
        name: "Memory",
        components: {MemoryCard},
        data() {
            return {
                memory: null,
            }
        },
        created() {
            this.memory = new Memory(['A', 'B', 'C']);
        },
        methods: {
            select(tile) {
                const result = this.memory.select(tile.id);
            },
        },
        computed: {
            tiles() {
                return this.memory.getTiles();
            },
            selectedTile() {
                try {
                    return this.memory.getSelected();
                } catch (e) {
                    return null;
                }
            },
        },
    }
</script>

<style scoped>

</style>
