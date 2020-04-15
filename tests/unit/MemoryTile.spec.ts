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
        let completedTile: MemoryTile;
        beforeEach(() => {
            completedTile = new MemoryTile(1, 'a');
            completedTile.markCompleted();
        });

        it('should return 0 points if not complete', () => {
            const tile = new MemoryTile(1, 'a');

            const points = tile.getPoints();

            expect(points).toBe(0);
        });

        it('should return full amount if it is the first try', () => {
            const points = completedTile.getPoints();

            expect(points).toBe(MemoryTile.FULL_POINTS);
        });

        it('should return less amount if it is the second try', () => {
            completedTile.increaseSelectionCount();

            const points = completedTile.getPoints();

            const expectedPoints = MemoryTile.FULL_POINTS * MemoryTile.POINTS_DECAY;
            expect(Math.round(points)).toBe(Math.round(expectedPoints));
        });

        it('should return even less amount if it is the third try', () => {
            completedTile.increaseSelectionCount();
            completedTile.increaseSelectionCount();

            const points = completedTile.getPoints();

            const expectedPoints = MemoryTile.FULL_POINTS * MemoryTile.POINTS_DECAY * MemoryTile.POINTS_DECAY;
            expect(Math.round(points)).toBe(Math.round(expectedPoints));
        });
    });
});
