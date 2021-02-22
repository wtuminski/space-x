import { Instance } from "mobx-state-tree"
import { LaunchRocketSecondStageModelBase } from "./LaunchRocketSecondStageModel.base"

/* The TypeScript type of an instance of LaunchRocketSecondStageModel */
export interface LaunchRocketSecondStageModelType extends Instance<typeof LaunchRocketSecondStageModel.Type> {}

/* A graphql query fragment builders for LaunchRocketSecondStageModel */
export { selectFromLaunchRocketSecondStage, launchRocketSecondStageModelPrimitives, LaunchRocketSecondStageModelSelector } from "./LaunchRocketSecondStageModel.base"

/**
 * LaunchRocketSecondStageModel
 */
export const LaunchRocketSecondStageModel = LaunchRocketSecondStageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
