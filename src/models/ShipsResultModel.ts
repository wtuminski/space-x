import { Instance } from "mobx-state-tree"
import { ShipsResultModelBase } from "./ShipsResultModel.base"

/* The TypeScript type of an instance of ShipsResultModel */
export interface ShipsResultModelType extends Instance<typeof ShipsResultModel.Type> {}

/* A graphql query fragment builders for ShipsResultModel */
export { selectFromShipsResult, shipsResultModelPrimitives, ShipsResultModelSelector } from "./ShipsResultModel.base"

/**
 * ShipsResultModel
 */
export const ShipsResultModel = ShipsResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
