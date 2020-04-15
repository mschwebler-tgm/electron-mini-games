import Memory from "@/games/memory/Memory";
import MemorySelectionResult from "@/games/memory/MemorySelectionResult";

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

    it('should return result after selection is made', () => {
        const memory = new Memory(DUMMY_SUBJECTS);

        const selectionResult = memory.select(0);

        // @ts-ignore
        expect(selectionResult).toBe(MemorySelectionResult.SECOND_PICK_PENDING);
    });

    it('should return success result after correct second selection is made', () => {
        const subjects = ['a', 'a'];
        const memory = new Memory(subjects);

        memory.select(0);
        const selectionResult = memory.select(1);

        // @ts-ignore
        expect(selectionResult).toBe(MemorySelectionResult.SUCCESS);
    });

    it('should return fail result after wrong second selection is made', () => {
        const memory = new Memory(DUMMY_SUBJECTS);

        memory.select(0);
        const selectionResult = memory.select(1);

        // @ts-ignore
        expect(selectionResult).toBe(MemorySelectionResult.FAIL);
    });
});