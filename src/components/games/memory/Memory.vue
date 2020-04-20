<template>
    <div>
        <div class="ma-3 d-flex justify-space-between">
            <div>
                <span class="display-2">
                    Memory
                </span>
            </div>
            <div>
                <v-btn v-if="isCompleted"
                       color="green"
                       class="mr-3"
                       @click="initMemory">
                    Neu starten
                </v-btn>
                <v-btn @click="shuffle">
                    Mischen
                </v-btn>
            </div>
        </div>

        <div class="d-flex justify-center mt-3 mb-3" style="min-height: 55px;">
            <MemoryPoints :points="points"></MemoryPoints>
        </div>

        <transition-group name="tile-list-animation"
                          class="d-flex flex-wrap"
                          tag="div">
            <MemoryCard
                    v-for="tile in tiles"
                    :key="tile.id"
                    :active="isTileActive(tile)"
                    class="ma-3"
                    @select="select(tile)">
                <img :src="tile.subject.imageSrc"
                     class="tile-image">
                {{ tile.subject }}
            </MemoryCard>
        </transition-group>
    </div>
</template>

<script>
    import MemoryCard from "./MemoryCard.vue";
    import Memory from "@/components/games/memory/Memory";
    import images from './images';
    import MemoryPoints from "./MemoryPoints";

    export default {
        name: "Memory",
        components: {MemoryPoints, MemoryCard},
        data() {
            return {
                memory: null,
                selected: [],
                fieldIsLocked: false,
            }
        },
        created() {
            this.initMemory();
        },
        methods: {
            initMemory() {
                this.memory = new Memory(images.map(image => ({imageSrc: image})));
            },
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
            shuffle() {
                this.memory.shuffle(this.memory.getTiles());
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
                return this.memory ? this.memory.getTiles() : [];
            },
            points() {
                return this.memory ? this.memory.getPoints() : 0;
            },
            isCompleted() {
                return this.memory && this.memory.isCompleted();
            },
        },
    }
</script>

<style scoped>
    .tile-list-animation-move {
        transition: transform 1s;
    }

    .tile-image {
        object-fit: cover;
        width: 100%;
        height: 250px;
    }
</style>