import { Instance } from "mobx-state-tree"
import { RocketPayloadWeightModelBase } from "./RocketPayloadWeightModel.base"

/* The TypeScript type of an instance of RocketPayloadWeightModel */
export interface RocketPayloadWeightModelType extends Instance<typeof RocketPayloadWeightModel.Type> {}

/* A graphql query fragment builders for RocketPayloadWeightModel */
export { selectFromRocketPayloadWeight, rocketPayloadWeightModelPrimitives, RocketPayloadWeightModelSelector } from "./RocketPayloadWeightModel.base"

/**
 * RocketPayloadWeightModel
 */
export const RocketPayloadWeightModel = RocketPayloadWeightModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
