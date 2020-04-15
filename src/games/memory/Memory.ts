import MemoryTile from "@/games/memory/MemoryTile";

export default class Memory {
    // @ts-ignore
    private tiles: MemoryTile[];

    constructor(subjects: any[]) {
        this.initializeTiles(subjects);
    }

    private initializeTiles(subjects: any[]): void {
        const tiles: any[] = [];
        subjects.forEach(subject => {
            tiles.push(new MemoryTile(subject));
            tiles.push(new MemoryTile(subject));
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
}

