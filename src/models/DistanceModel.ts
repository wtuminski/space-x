import { Instance } from "mobx-state-tree"
import { DistanceModelBase } from "./DistanceModel.base"

/* The TypeScript type of an instance of DistanceModel */
export interface DistanceModelType extends Instance<typeof DistanceModel.Type> {}

/* A graphql query fragment builders for DistanceModel */
export { selectFromDistance, distanceModelPrimitives, DistanceModelSelector } from "./DistanceModel.base"

/**
 * DistanceModel
 */
export const DistanceModel = DistanceModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
