<template>
    <div>
        <div class="ma-3">
            <span class="display-2">
                Memory
            </span>
            <div class="headline mt-3 mb-3">
                Points: {{ points }}
            </div>
        </div>

        <div class="d-flex flex-wrap">
            <MemoryCard
                    v-for="tile in tiles"
                    :key="tile.id"
                    :active="isTileActive(tile)"
                    class="ma-3"
                    @select="select(tile)">
                {{ tile.subject }}
            </MemoryCard>
        </div>
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
                selected: [],
                fieldIsLocked: false,
            }
        },
        created() {
            this.memory = new Memory(['A', 'B', 'C']);
        },
        methods: {
            select(tile) {
                if (this.fieldIsLocked) {
                    return;
                }

                this.fieldIsLocked = true;
                this.selected.push(tile);
                if (this.selected.length === 1) {
                    this.memory.select(tile.id);
                    this.fieldIsLocked = false;
                } else {
                    setTimeout(() => {
                        const result = this.memory.select(tile.id);
                        this.selected = [];
                        console.log(result);
                        this.fieldIsLocked = false;
                    }, 1000);
                }
            },
            isTileActive(tile) {
                return tile.isCompleted() || this.selected.includes(tile);
            },
        },
        watch: {
            isCompleted(isCompleted) {
                if (isCompleted) {
                    console.log('Completed!');
                }
            }
        },
        computed: {
            tiles() {
                return this.memory.getTiles();
            },
            points() {
                return this.memory.getPoints();
            },
            isCompleted() {
                return this.memory && this.memory.isCompleted();
            },
        },
    }
</script>
