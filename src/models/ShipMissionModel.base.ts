/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ShipMissionBase
 * auto generated base class for the model ShipMissionModel.
 */
export const ShipMissionModelBase = ModelBase
  .named('ShipMission')
  .props({
    __typename: types.optional(types.literal("ShipMission"), "ShipMission"),
    flight: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ShipMissionModelSelector extends QueryBuilder {
  get flight() { return this.__attr(`flight`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromShipMission() {
  return new ShipMissionModelSelector()
}

export const shipMissionModelPrimitives = selectFromShipMission().flight.name
