import { Instance } from "mobx-state-tree"
import { DragonThrustModelBase } from "./DragonThrustModel.base"

/* The TypeScript type of an instance of DragonThrustModel */
export interface DragonThrustModelType extends Instance<typeof DragonThrustModel.Type> {}

/* A graphql query fragment builders for DragonThrustModel */
export { selectFromDragonThrust, dragonThrustModelPrimitives, DragonThrustModelSelector } from "./DragonThrustModel.base"

/**
 * DragonThrustModel
 */
export const DragonThrustModel = DragonThrustModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
