import { Instance } from "mobx-state-tree"
import { RocketFirstStageModelBase } from "./RocketFirstStageModel.base"

/* The TypeScript type of an instance of RocketFirstStageModel */
export interface RocketFirstStageModelType extends Instance<typeof RocketFirstStageModel.Type> {}

/* A graphql query fragment builders for RocketFirstStageModel */
export { selectFromRocketFirstStage, rocketFirstStageModelPrimitives, RocketFirstStageModelSelector } from "./RocketFirstStageModel.base"

/**
 * RocketFirstStageModel
 */
export const RocketFirstStageModel = RocketFirstStageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
