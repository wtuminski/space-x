import { Instance } from "mobx-state-tree"
import { DragonTrunkCargoModelBase } from "./DragonTrunkCargoModel.base"

/* The TypeScript type of an instance of DragonTrunkCargoModel */
export interface DragonTrunkCargoModelType extends Instance<typeof DragonTrunkCargoModel.Type> {}

/* A graphql query fragment builders for DragonTrunkCargoModel */
export { selectFromDragonTrunkCargo, dragonTrunkCargoModelPrimitives, DragonTrunkCargoModelSelector } from "./DragonTrunkCargoModel.base"

/**
 * DragonTrunkCargoModel
 */
export const DragonTrunkCargoModel = DragonTrunkCargoModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
