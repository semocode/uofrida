import { Feature } from "./Feature"
import { Bugfix } from "./Bugfix"

export interface ClientProperties {
    features: Array<Feature>,
    bugfixes: Array<Bugfix>
}

export class Client {
    properties: ClientProperties

    constructor(config: ClientProperties) {
        this.properties = config
    }

    start() {
        this.properties.bugfixes.forEach((bugfix) => {
            bugfix.execute()
        })
        this.properties.features.forEach((feature) => {
            feature.execute()
        })
    }
}