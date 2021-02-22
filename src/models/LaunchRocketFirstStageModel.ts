import { Instance } from "mobx-state-tree"
import { LaunchRocketFirstStageModelBase } from "./LaunchRocketFirstStageModel.base"

/* The TypeScript type of an instance of LaunchRocketFirstStageModel */
export interface LaunchRocketFirstStageModelType extends Instance<typeof LaunchRocketFirstStageModel.Type> {}

/* A graphql query fragment builders for LaunchRocketFirstStageModel */
export { selectFromLaunchRocketFirstStage, launchRocketFirstStageModelPrimitives, LaunchRocketFirstStageModelSelector } from "./LaunchRocketFirstStageModel.base"

/**
 * LaunchRocketFirstStageModel
 */
export const LaunchRocketFirstStageModel = LaunchRocketFirstStageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
