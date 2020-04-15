import MemoryTile from "@/games/memory/MemoryTile";
import MemorySelectionResult from "@/games/memory/MemorySelectionResult";

export default class Memory {
    private tiles: MemoryTile[] = [];
    private firstSelectedTile: MemoryTile | null = null;

    constructor(subjects: any[]) {
        this.initializeTiles(subjects);
    }

    private initializeTiles(subjects: any[]): void {
        const tiles = subjects.map((subject, index) => new MemoryTile(index, subject));
        const tilesDuplicated = [...tiles, ...tiles];
        this.shuffle(tilesDuplicated);

        this.tiles = tilesDuplicated;
    }

    shuffle(array: any[]) {
        array.sort(() => Math.random() - 0.5);
    }

    select(id: number): MemorySelectionResult | never {
        const tileToSelect = this.getTileById(id);
        tileToSelect.increaseSelectionCount();
        if (!this.firstSelectedTile) {
            return this.makeFirstSelection(tileToSelect);
        }

        return this.makeSecondSelection(tileToSelect);
    }

    private makeFirstSelection(tileToSelect: MemoryTile): MemorySelectionResult {
        this.firstSelectedTile = tileToSelect;
        return MemorySelectionResult.SECOND_PICK_PENDING;
    }

    private makeSecondSelection(tileToSelect: MemoryTile): MemorySelectionResult {
        // @ts-ignore
        let result = this.firstSelectedTile.compareTo(tileToSelect);
        this.firstSelectedTile = null;
        return result;
    }

    private getTileById(id: number): MemoryTile | never {
        const tile = this.tiles.find(tile => tile.id === id);
        if (!tile) {
            throw new Error(`Tile with id ${id} does not exist`);
        }

        return tile;
    }

    getTiles(): MemoryTile[] {
        return this.tiles;
    }

    getSelected(): MemoryTile | null {
        return this.firstSelectedTile;
    }
}
