import { Instance } from "mobx-state-tree"
import { DragonHeatShieldModelBase } from "./DragonHeatShieldModel.base"

/* The TypeScript type of an instance of DragonHeatShieldModel */
export interface DragonHeatShieldModelType extends Instance<typeof DragonHeatShieldModel.Type> {}

/* A graphql query fragment builders for DragonHeatShieldModel */
export { selectFromDragonHeatShield, dragonHeatShieldModelPrimitives, DragonHeatShieldModelSelector } from "./DragonHeatShieldModel.base"

/**
 * DragonHeatShieldModel
 */
export const DragonHeatShieldModel = DragonHeatShieldModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
