import MemoryTile from "@/games/memory/MemoryTile";
import MemorySelectionResult from "@/games/memory/MemorySelectionResult";

describe('MemoryTile', () => {
    describe('Comparison result', () => {
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

    describe('Points calculation', () => {
        it('should return full amount if it is the first try', () => {
            const tile = new MemoryTile(1, 'a');

            const points = tile.getPoints();

            expect(points).toBe(MemoryTile.FULL_POINTS);
        });
    });
});
