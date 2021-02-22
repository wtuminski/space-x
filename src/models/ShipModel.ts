import { Instance } from "mobx-state-tree"
import { ShipModelBase } from "./ShipModel.base"

/* The TypeScript type of an instance of ShipModel */
export interface ShipModelType extends Instance<typeof ShipModel.Type> {}

/* A graphql query fragment builders for ShipModel */
export { selectFromShip, shipModelPrimitives, ShipModelSelector } from "./ShipModel.base"

/**
 * ShipModel
 */
export const ShipModel = ShipModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
