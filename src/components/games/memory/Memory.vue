<template>
    <div class="d-flex flex-wrap">
        <MemoryTile></MemoryTile>
    </div>
</template>

<script lang="ts">
    import MemoryTile from "./MemoryTile.vue";

    export default {
        name: "Memory",
        components: {MemoryTile},
        data() {
            return {
                subjects: [
                    'A', 'B', 'C'
                ]
            }
        },
    }
</script>

<style scoped>

</style>
