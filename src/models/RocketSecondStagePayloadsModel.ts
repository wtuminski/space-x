import { Instance } from "mobx-state-tree"
import { RocketSecondStagePayloadsModelBase } from "./RocketSecondStagePayloadsModel.base"

/* The TypeScript type of an instance of RocketSecondStagePayloadsModel */
export interface RocketSecondStagePayloadsModelType extends Instance<typeof RocketSecondStagePayloadsModel.Type> {}

/* A graphql query fragment builders for RocketSecondStagePayloadsModel */
export { selectFromRocketSecondStagePayloads, rocketSecondStagePayloadsModelPrimitives, RocketSecondStagePayloadsModelSelector } from "./RocketSecondStagePayloadsModel.base"

/**
 * RocketSecondStagePayloadsModel
 */
export const RocketSecondStagePayloadsModel = RocketSecondStagePayloadsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
