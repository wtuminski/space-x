/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * DistanceBase
 * auto generated base class for the model DistanceModel.
 */
export const DistanceModelBase = ModelBase
  .named('Distance')
  .props({
    __typename: types.optional(types.literal("Distance"), "Distance"),
    feet: types.union(types.undefined, types.null, types.number),
    meters: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DistanceModelSelector extends QueryBuilder {
  get feet() { return this.__attr(`feet`) }
  get meters() { return this.__attr(`meters`) }
}
export function selectFromDistance() {
  return new DistanceModelSelector()
}

export const distanceModelPrimitives = selectFromDistance().feet.meters
