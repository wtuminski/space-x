import { Instance } from "mobx-state-tree"
import { LaunchTelemetryModelBase } from "./LaunchTelemetryModel.base"

/* The TypeScript type of an instance of LaunchTelemetryModel */
export interface LaunchTelemetryModelType extends Instance<typeof LaunchTelemetryModel.Type> {}

/* A graphql query fragment builders for LaunchTelemetryModel */
export { selectFromLaunchTelemetry, launchTelemetryModelPrimitives, LaunchTelemetryModelSelector } from "./LaunchTelemetryModel.base"

/**
 * LaunchTelemetryModel
 */
export const LaunchTelemetryModel = LaunchTelemetryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
