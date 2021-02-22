/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * RocketLandingLegsBase
 * auto generated base class for the model RocketLandingLegsModel.
 */
export const RocketLandingLegsModelBase = ModelBase
  .named('RocketLandingLegs')
  .props({
    __typename: types.optional(types.literal("RocketLandingLegs"), "RocketLandingLegs"),
    number: types.union(types.undefined, types.null, types.integer),
    material: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketLandingLegsModelSelector extends QueryBuilder {
  get number() { return this.__attr(`number`) }
  get material() { return this.__attr(`material`) }
}
export function selectFromRocketLandingLegs() {
  return new RocketLandingLegsModelSelector()
}

export const rocketLandingLegsModelPrimitives = selectFromRocketLandingLegs().number.material
