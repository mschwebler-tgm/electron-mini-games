import MemorySelectionResult from "@/components/games/memory/MemorySelectionResult";
import MemoryTileState from "@/components/games/memory/MemoryTileState";

export default class MemoryTile {
    static FULL_POINTS: number = 100;
    static POINTS_DECAY: number = .80;

    public readonly id: number;
    private readonly subject: any;
    private state: MemoryTileState = MemoryTileState.NOT_COMPLETED;
    private selectionCount: number = 0;

    constructor(id: number, subject: any) {
        this.id = id;
        this.subject = subject;
    }

    compareTo(tile: MemoryTile): MemorySelectionResult {
        if (this.subject === tile.subject) {
            return MemorySelectionResult.SUCCESS;
        }
        return MemorySelectionResult.FAIL;
    }

    getPoints() {
        if (this.state === MemoryTileState.NOT_COMPLETED) {
            return 0;
        }

        const triesBeforeSolved = this.selectionCount - 1;
        const decayByRetries = Math.pow(MemoryTile.POINTS_DECAY, triesBeforeSolved);
        return MemoryTile.FULL_POINTS * decayByRetries;
    }

    increaseSelectionCount() {
        this.selectionCount++;
    }

    getSelectionCount() {
        return this.selectionCount;
    }

    markCompleted() {
        this.state = MemoryTileState.COMPLETED;
    }

    isCompleted() {
        return this.state === MemoryTileState.COMPLETED;
    }

    getState() {
        return this.state;
    }
}
