import { Instance } from "mobx-state-tree"
import { ShipMissionModelBase } from "./ShipMissionModel.base"

/* The TypeScript type of an instance of ShipMissionModel */
export interface ShipMissionModelType extends Instance<typeof ShipMissionModel.Type> {}

/* A graphql query fragment builders for ShipMissionModel */
export { selectFromShipMission, shipMissionModelPrimitives, ShipMissionModelSelector } from "./ShipMissionModel.base"

/**
 * ShipMissionModel
 */
export const ShipMissionModel = ShipMissionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
