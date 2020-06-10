import { Feature } from "./Feature"
import { Bugfix } from "./Bugfix"

export interface UOSAProperties {
    features: Array<Feature>,
    bugfixes: Array<Bugfix>
}

export class UOSA {
    features: Array<Feature>

    constructor(config: UOSAProperties) {
        this.features = config.features
    }

    start() {
        this.features.forEach((feature) => {
            feature.onExecute()
        })
    }
}