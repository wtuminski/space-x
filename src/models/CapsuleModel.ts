import { Instance } from "mobx-state-tree"
import { CapsuleModelBase } from "./CapsuleModel.base"

/* The TypeScript type of an instance of CapsuleModel */
export interface CapsuleModelType extends Instance<typeof CapsuleModel.Type> {}

/* A graphql query fragment builders for CapsuleModel */
export { selectFromCapsule, capsuleModelPrimitives, CapsuleModelSelector } from "./CapsuleModel.base"

/**
 * CapsuleModel
 */
export const CapsuleModel = CapsuleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
