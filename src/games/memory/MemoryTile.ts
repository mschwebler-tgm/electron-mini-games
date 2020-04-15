import MemorySelectionResult from "@/games/memory/MemorySelectionResult";
import MemoryTileState from "@/games/memory/MemoryTileState";

export default class MemoryTile {
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
}
