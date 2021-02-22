/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ShipLocationBase
 * auto generated base class for the model ShipLocationModel.
 */
export const ShipLocationModelBase = ModelBase
  .named('ShipLocation')
  .props({
    __typename: types.optional(types.literal("ShipLocation"), "ShipLocation"),
    latitude: types.union(types.undefined, types.null, types.number),
    longitude: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ShipLocationModelSelector extends QueryBuilder {
  get latitude() { return this.__attr(`latitude`) }
  get longitude() { return this.__attr(`longitude`) }
}
export function selectFromShipLocation() {
  return new ShipLocationModelSelector()
}

export const shipLocationModelPrimitives = selectFromShipLocation().latitude.longitude
