import Memory from "@/games/memory/Memory";
import MemoryTile from "@/games/memory/MemoryTile";

describe('Memory', () => {
    it('should hold memory tiles', () => {
        const tiles = [new MemoryTile()];
        const memory = new Memory(tiles);

        const memoryTiles = memory.getTiles();

        expect(memoryTiles).toStrictEqual(tiles);
    });
});
