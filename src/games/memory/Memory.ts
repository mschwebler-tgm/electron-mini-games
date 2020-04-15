import MemoryTile from "@/games/memory/MemoryTile";

export default class Memory {
    private tiles: MemoryTile[] = [];
    private selectedTile: MemoryTile | null = null;

    constructor(subjects: any[]) {
        this.initializeTiles(subjects);
    }

    private initializeTiles(subjects: any[]): void {
        const tiles: any[] = [];
        subjects.forEach((subject, index) => {
            tiles.push(new MemoryTile(index, subject));
            tiles.push(new MemoryTile(index, subject));
        });
        this.shuffle(tiles);

        this.tiles = tiles;
    }

    shuffle(array: any[]) {
        array.sort(() => Math.random() - 0.5);
    }

    getTiles(): MemoryTile[] {
        return this.tiles;
    }

    select(id: number) {
        const tileToSelect = this.tiles.find(tile => tile.id === id);
        if (!tileToSelect) {
            throw new Error(`Tile with id ${id} does not exist`);
        }

        this.selectedTile = tileToSelect;
    }

    getSelected(): MemoryTile | null {
        return this.selectedTile;
    }
}
