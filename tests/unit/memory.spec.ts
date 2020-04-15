import Memory from "@/games/memory/Memory";

describe('Memory', () => {
    const DUMMY_SUBJECTS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

    it('should create memory tiles from array of subjects', () => {
        const memory = new Memory(DUMMY_SUBJECTS);

        const memoryTiles = memory.getTiles();

        expect(memoryTiles.length).toBe(DUMMY_SUBJECTS.length * 2);
    });

    it('should shuffle tiles on create', () => {
        const memory = new Memory(DUMMY_SUBJECTS);

        const memoryTiles = memory.getTiles();

        expect(memoryTiles[0]).not.toBe(memoryTiles[1]);
    });

    it('should return currently picked tile', () => {
        const idToSelect = 1;
        const memory = new Memory(DUMMY_SUBJECTS);

        memory.select(idToSelect);

        // @ts-ignore
        expect(memory.getSelected().id).toBe(idToSelect);
    });

    it('should throw if tile to select does not exist', () => {
        const idToSelect = 1000;
        const memory = new Memory(DUMMY_SUBJECTS);

        expect(() => memory.select(idToSelect))
            .toThrow();
    });
});
