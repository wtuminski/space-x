import { Instance } from "mobx-state-tree"
import { LaunchRocketFirstStageCoreModelBase } from "./LaunchRocketFirstStageCoreModel.base"

/* The TypeScript type of an instance of LaunchRocketFirstStageCoreModel */
export interface LaunchRocketFirstStageCoreModelType extends Instance<typeof LaunchRocketFirstStageCoreModel.Type> {}

/* A graphql query fragment builders for LaunchRocketFirstStageCoreModel */
export { selectFromLaunchRocketFirstStageCore, launchRocketFirstStageCoreModelPrimitives, LaunchRocketFirstStageCoreModelSelector } from "./LaunchRocketFirstStageCoreModel.base"

/**
 * LaunchRocketFirstStageCoreModel
 */
export const LaunchRocketFirstStageCoreModel = LaunchRocketFirstStageCoreModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
