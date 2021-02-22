import { Instance } from "mobx-state-tree"
import { LaunchpadModelBase } from "./LaunchpadModel.base"

/* The TypeScript type of an instance of LaunchpadModel */
export interface LaunchpadModelType extends Instance<typeof LaunchpadModel.Type> {}

/* A graphql query fragment builders for LaunchpadModel */
export { selectFromLaunchpad, launchpadModelPrimitives, LaunchpadModelSelector } from "./LaunchpadModel.base"

/**
 * LaunchpadModel
 */
export const LaunchpadModel = LaunchpadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
