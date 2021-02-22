import { Instance } from "mobx-state-tree"
import { LaunchRocketFairingsModelBase } from "./LaunchRocketFairingsModel.base"

/* The TypeScript type of an instance of LaunchRocketFairingsModel */
export interface LaunchRocketFairingsModelType extends Instance<typeof LaunchRocketFairingsModel.Type> {}

/* A graphql query fragment builders for LaunchRocketFairingsModel */
export { selectFromLaunchRocketFairings, launchRocketFairingsModelPrimitives, LaunchRocketFairingsModelSelector } from "./LaunchRocketFairingsModel.base"

/**
 * LaunchRocketFairingsModel
 */
export const LaunchRocketFairingsModel = LaunchRocketFairingsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
