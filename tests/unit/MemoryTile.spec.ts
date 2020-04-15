import MemoryTile from "@/games/memory/MemoryTile";
import MemorySelectionResult from "@/games/memory/MemorySelectionResult";

describe('MemoryTile', () => {
    it('should return fail state if compared to different tile', () => {
        const firstTile = new MemoryTile(1, 'a');
        const secondTile = new MemoryTile(2, 'b');

        const result = firstTile.compareTo(secondTile);

        expect(result).toBe(MemorySelectionResult.FAIL);
    });

    it('should return success state if compared to same tile', () => {
        const subject = 'a';
        const firstTile = new MemoryTile(1, subject);
        const otherTile = new MemoryTile(2, subject);

        const result = firstTile.compareTo(otherTile);

        expect(result).toBe(MemorySelectionResult.SUCCESS);
    });
});
