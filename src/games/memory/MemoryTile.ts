export default class MemoryTile {
    public readonly id: number;
    private subject: any;

    constructor(id: number, subject: any) {
        this.id = id;
        this.subject = subject;
    }
}
