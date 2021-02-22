import { Instance } from "mobx-state-tree"
import { LaunchesPastResultModelBase } from "./LaunchesPastResultModel.base"

/* The TypeScript type of an instance of LaunchesPastResultModel */
export interface LaunchesPastResultModelType extends Instance<typeof LaunchesPastResultModel.Type> {}

/* A graphql query fragment builders for LaunchesPastResultModel */
export { selectFromLaunchesPastResult, launchesPastResultModelPrimitives, LaunchesPastResultModelSelector } from "./LaunchesPastResultModel.base"

/**
 * LaunchesPastResultModel
 */
export const LaunchesPastResultModel = LaunchesPastResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
