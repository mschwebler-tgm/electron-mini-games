import MemorySelectionResult from "@/games/memory/MemorySelectionResult";

export default class MemoryTile {
    public readonly id: number;
    private readonly subject: any;

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
}
