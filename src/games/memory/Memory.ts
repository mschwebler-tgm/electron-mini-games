import MemoryTile from "@/games/memory/MemoryTile";

export default class Memory {
    private readonly tiles: MemoryTile[];

    constructor(tiles: MemoryTile[]) {
        this.tiles = tiles;
    }

    getTiles(): MemoryTile[] {
        return this.tiles;
    }
}
