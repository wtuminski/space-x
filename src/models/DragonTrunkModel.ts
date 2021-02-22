import { Instance } from "mobx-state-tree"
import { DragonTrunkModelBase } from "./DragonTrunkModel.base"

/* The TypeScript type of an instance of DragonTrunkModel */
export interface DragonTrunkModelType extends Instance<typeof DragonTrunkModel.Type> {}

/* A graphql query fragment builders for DragonTrunkModel */
export { selectFromDragonTrunk, dragonTrunkModelPrimitives, DragonTrunkModelSelector } from "./DragonTrunkModel.base"

/**
 * DragonTrunkModel
 */
export const DragonTrunkModel = DragonTrunkModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
