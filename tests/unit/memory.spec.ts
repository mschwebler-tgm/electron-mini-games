import Memory from "@/games/memory/Memory";

describe('Memory', () => {
    it('should create memory tiles from array of subjects', () => {
        const subjects = ['a', 'b', 'c'];
        const memory = new Memory(subjects);

        const memoryTiles = memory.getTiles();

        expect(memoryTiles.length).toBe(subjects.length * 2);
    });

    it('should shuffle tiles on create', () => {
        const subjects = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
        const memory = new Memory(subjects);

        const memoryTiles = memory.getTiles();

        expect(memoryTiles[0]).not.toBe(memoryTiles[1]);
    });
});
