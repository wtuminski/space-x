import { Instance } from "mobx-state-tree"
import { DragonModelBase } from "./DragonModel.base"

/* The TypeScript type of an instance of DragonModel */
export interface DragonModelType extends Instance<typeof DragonModel.Type> {}

/* A graphql query fragment builders for DragonModel */
export { selectFromDragon, dragonModelPrimitives, DragonModelSelector } from "./DragonModel.base"

/**
 * DragonModel
 */
export const DragonModel = DragonModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
