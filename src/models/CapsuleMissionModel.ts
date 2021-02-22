import { Instance } from "mobx-state-tree"
import { CapsuleMissionModelBase } from "./CapsuleMissionModel.base"

/* The TypeScript type of an instance of CapsuleMissionModel */
export interface CapsuleMissionModelType extends Instance<typeof CapsuleMissionModel.Type> {}

/* A graphql query fragment builders for CapsuleMissionModel */
export { selectFromCapsuleMission, capsuleMissionModelPrimitives, CapsuleMissionModelSelector } from "./CapsuleMissionModel.base"

/**
 * CapsuleMissionModel
 */
export const CapsuleMissionModel = CapsuleMissionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
