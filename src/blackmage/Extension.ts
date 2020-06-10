export abstract class Extension {
    constructor() {
        
    }

    execute() {
        this.onExecute()
    }

    abstract onExecute(): void
}