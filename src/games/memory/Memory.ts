import MemoryTile from "@/games/memory/MemoryTile";
import MemorySelectionResult from "@/games/memory/MemorySelectionResult";

export default class Memory {
    private tiles: MemoryTile[] = [];
    private firstSelectedTile: MemoryTile | null = null;

    constructor(subjects: any[]) {
        this.initializeTiles(subjects);
    }

    private initializeTiles(subjects: any[]): void {
        const tiles = [...subjects, ...subjects].map((subject, index) => new MemoryTile(index, subject));
        this.shuffle(tiles);

        this.tiles = tiles;
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

        return this.makeSecondSelection(tileToSelect, this.firstSelectedTile);
    }

    private makeFirstSelection(tileToSelect: MemoryTile): MemorySelectionResult {
        this.firstSelectedTile = tileToSelect;
        return MemorySelectionResult.SECOND_PICK_PENDING;
    }

    private makeSecondSelection(tileToSelect: MemoryTile, firstSelectedTile: MemoryTile): MemorySelectionResult {
        const result = firstSelectedTile.compareTo(tileToSelect);
        if (result === MemorySelectionResult.SUCCESS) {
            firstSelectedTile.markCompleted();
            tileToSelect.markCompleted();
        }
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

    getSelected(): MemoryTile | never {
        if (!this.firstSelectedTile) {
            throw Error('No tile is currently selected');
        }
        return this.firstSelectedTile;
    }

    getPoints() {
        return this.tiles
            .filter(tile => tile.isCompleted())
            .reduce((points, tile) => {
                return points + tile.getPoints();
            }, 0);
    }
}
