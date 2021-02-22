import { Instance } from "mobx-state-tree"
import { ShipLocationModelBase } from "./ShipLocationModel.base"

/* The TypeScript type of an instance of ShipLocationModel */
export interface ShipLocationModelType extends Instance<typeof ShipLocationModel.Type> {}

/* A graphql query fragment builders for ShipLocationModel */
export { selectFromShipLocation, shipLocationModelPrimitives, ShipLocationModelSelector } from "./ShipLocationModel.base"

/**
 * ShipLocationModel
 */
export const ShipLocationModel = ShipLocationModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
