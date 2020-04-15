import MemoryTile from "@/games/memory/MemoryTile";
import MemorySelectionResult from "@/games/memory/MemorySelectionResult";

export default class Memory {
    private tiles: MemoryTile[] = [];
    private selectedTile: MemoryTile | null = null;

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

    getTiles(): MemoryTile[] {
        return this.tiles;
    }

    select(id: number): MemorySelectionResult | never {
        const tileToSelect = this.tiles.find(tile => tile.id === id);
        if (!tileToSelect) {
            throw new Error(`Tile with id ${id} does not exist`);
        }

        this.selectedTile = tileToSelect;

        return MemorySelectionResult.SECOND_PICK_PENDING;
    }

    getSelected(): MemoryTile | null {
        return this.selectedTile;
    }
}
