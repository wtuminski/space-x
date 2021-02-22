import { Instance } from "mobx-state-tree"
import { DragonPressurizedCapsuleModelBase } from "./DragonPressurizedCapsuleModel.base"

/* The TypeScript type of an instance of DragonPressurizedCapsuleModel */
export interface DragonPressurizedCapsuleModelType extends Instance<typeof DragonPressurizedCapsuleModel.Type> {}

/* A graphql query fragment builders for DragonPressurizedCapsuleModel */
export { selectFromDragonPressurizedCapsule, dragonPressurizedCapsuleModelPrimitives, DragonPressurizedCapsuleModelSelector } from "./DragonPressurizedCapsuleModel.base"

/**
 * DragonPressurizedCapsuleModel
 */
export const DragonPressurizedCapsuleModel = DragonPressurizedCapsuleModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
