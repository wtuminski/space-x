/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * DragonHeatShieldBase
 * auto generated base class for the model DragonHeatShieldModel.
 */
export const DragonHeatShieldModelBase = ModelBase
  .named('DragonHeatShield')
  .props({
    __typename: types.optional(types.literal("DragonHeatShield"), "DragonHeatShield"),
    dev_partner: types.union(types.undefined, types.null, types.string),
    material: types.union(types.undefined, types.null, types.string),
    size_meters: types.union(types.undefined, types.null, types.number),
    temp_degrees: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DragonHeatShieldModelSelector extends QueryBuilder {
  get dev_partner() { return this.__attr(`dev_partner`) }
  get material() { return this.__attr(`material`) }
  get size_meters() { return this.__attr(`size_meters`) }
  get temp_degrees() { return this.__attr(`temp_degrees`) }
}
export function selectFromDragonHeatShield() {
  return new DragonHeatShieldModelSelector()
}

export const dragonHeatShieldModelPrimitives = selectFromDragonHeatShield().dev_partner.material.size_meters.temp_degrees
