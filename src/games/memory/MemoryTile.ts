import MemorySelectionResult from "@/games/memory/MemorySelectionResult";
import MemoryTileState from "@/games/memory/MemoryTileState";

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

    increaseSelectionCount() {
        this.selectionCount++;
    }

    getSelectionCount() {
        return this.selectionCount;
    }

    markCompleted() {
        this.state = MemoryTileState.COMPLETED;
    }

    getState() {
        return this.state;
    }

    getPoints() {
        const decayByRetries = Math.pow(MemoryTile.POINTS_DECAY, this.selectionCount);

        return MemoryTile.FULL_POINTS * decayByRetries;
    }
}
