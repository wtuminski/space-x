/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ForceModel, ForceModelType } from "./ForceModel"
import { ForceModelSelector } from "./ForceModel.base"
import { RootStoreType } from "./index"


/**
 * DragonThrustBase
 * auto generated base class for the model DragonThrustModel.
 */
export const DragonThrustModelBase = ModelBase
  .named('DragonThrust')
  .props({
    __typename: types.optional(types.literal("DragonThrust"), "DragonThrust"),
    amount: types.union(types.undefined, types.null, types.integer),
    fuel_1: types.union(types.undefined, types.null, types.string),
    fuel_2: types.union(types.undefined, types.null, types.string),
    pods: types.union(types.undefined, types.null, types.integer),
    thrust: types.union(types.undefined, types.null, types.late((): any => ForceModel)),
    type: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DragonThrustModelSelector extends QueryBuilder {
  get amount() { return this.__attr(`amount`) }
  get fuel_1() { return this.__attr(`fuel_1`) }
  get fuel_2() { return this.__attr(`fuel_2`) }
  get pods() { return this.__attr(`pods`) }
  get type() { return this.__attr(`type`) }
  thrust(builder?: string | ForceModelSelector | ((selector: ForceModelSelector) => ForceModelSelector)) { return this.__child(`thrust`, ForceModelSelector, builder) }
}
export function selectFromDragonThrust() {
  return new DragonThrustModelSelector()
}

export const dragonThrustModelPrimitives = selectFromDragonThrust().amount.fuel_1.fuel_2.pods.type
