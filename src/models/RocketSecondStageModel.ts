import { Instance } from "mobx-state-tree"
import { RocketSecondStageModelBase } from "./RocketSecondStageModel.base"

/* The TypeScript type of an instance of RocketSecondStageModel */
export interface RocketSecondStageModelType extends Instance<typeof RocketSecondStageModel.Type> {}

/* A graphql query fragment builders for RocketSecondStageModel */
export { selectFromRocketSecondStage, rocketSecondStageModelPrimitives, RocketSecondStageModelSelector } from "./RocketSecondStageModel.base"

/**
 * RocketSecondStageModel
 */
export const RocketSecondStageModel = RocketSecondStageModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
