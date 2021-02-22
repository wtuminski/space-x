import { Instance } from "mobx-state-tree"
import { LaunchLinksModelBase } from "./LaunchLinksModel.base"

/* The TypeScript type of an instance of LaunchLinksModel */
export interface LaunchLinksModelType extends Instance<typeof LaunchLinksModel.Type> {}

/* A graphql query fragment builders for LaunchLinksModel */
export { selectFromLaunchLinks, launchLinksModelPrimitives, LaunchLinksModelSelector } from "./LaunchLinksModel.base"

/**
 * LaunchLinksModel
 */
export const LaunchLinksModel = LaunchLinksModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
