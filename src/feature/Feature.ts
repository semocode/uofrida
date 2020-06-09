export enum FeatureStability {
    experimental = 1,
    stable = 2
}

export enum FeatureState {
    enabled = 1,
    disabled = 0
}

export interface Feature {
    onExecute?(): void
}