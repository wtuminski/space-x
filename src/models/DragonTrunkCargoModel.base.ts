/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * DragonTrunkCargoBase
 * auto generated base class for the model DragonTrunkCargoModel.
 */
export const DragonTrunkCargoModelBase = ModelBase
  .named('DragonTrunkCargo')
  .props({
    __typename: types.optional(types.literal("DragonTrunkCargo"), "DragonTrunkCargo"),
    solar_array: types.union(types.undefined, types.null, types.integer),
    unpressurized_cargo: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DragonTrunkCargoModelSelector extends QueryBuilder {
  get solar_array() { return this.__attr(`solar_array`) }
  get unpressurized_cargo() { return this.__attr(`unpressurized_cargo`) }
}
export function selectFromDragonTrunkCargo() {
  return new DragonTrunkCargoModelSelector()
}

export const dragonTrunkCargoModelPrimitives = selectFromDragonTrunkCargo().solar_array.unpressurized_cargo
