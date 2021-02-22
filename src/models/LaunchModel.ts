import { Instance } from "mobx-state-tree"
import { LaunchModelBase } from "./LaunchModel.base"

/* The TypeScript type of an instance of LaunchModel */
export interface LaunchModelType extends Instance<typeof LaunchModel.Type> {}

/* A graphql query fragment builders for LaunchModel */
export { selectFromLaunch, launchModelPrimitives, LaunchModelSelector } from "./LaunchModel.base"

/**
 * LaunchModel
 */
export const LaunchModel = LaunchModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
