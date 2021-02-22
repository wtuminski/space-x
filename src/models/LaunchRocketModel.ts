import { Instance } from "mobx-state-tree"
import { LaunchRocketModelBase } from "./LaunchRocketModel.base"

/* The TypeScript type of an instance of LaunchRocketModel */
export interface LaunchRocketModelType extends Instance<typeof LaunchRocketModel.Type> {}

/* A graphql query fragment builders for LaunchRocketModel */
export { selectFromLaunchRocket, launchRocketModelPrimitives, LaunchRocketModelSelector } from "./LaunchRocketModel.base"

/**
 * LaunchRocketModel
 */
export const LaunchRocketModel = LaunchRocketModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
