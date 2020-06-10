export interface UOSAProperties {
    features: Array<any>,
    bugfixes: Array<any>
}

export class UOSA {
    features: Array<any>

    constructor(config: UOSAProperties) {
        this.features = config.features
    }

    start() {
        this.features.forEach((feature) => {
            feature.onExecute()
        })
    }
}