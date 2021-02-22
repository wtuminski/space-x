import { Instance } from "mobx-state-tree"
import { RocketSecondStagePayloadCompositeFairingModelBase } from "./RocketSecondStagePayloadCompositeFairingModel.base"

/* The TypeScript type of an instance of RocketSecondStagePayloadCompositeFairingModel */
export interface RocketSecondStagePayloadCompositeFairingModelType extends Instance<typeof RocketSecondStagePayloadCompositeFairingModel.Type> {}

/* A graphql query fragment builders for RocketSecondStagePayloadCompositeFairingModel */
export { selectFromRocketSecondStagePayloadCompositeFairing, rocketSecondStagePayloadCompositeFairingModelPrimitives, RocketSecondStagePayloadCompositeFairingModelSelector } from "./RocketSecondStagePayloadCompositeFairingModel.base"

/**
 * RocketSecondStagePayloadCompositeFairingModel
 */
export const RocketSecondStagePayloadCompositeFairingModel = RocketSecondStagePayloadCompositeFairingModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
