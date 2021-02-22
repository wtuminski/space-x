/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VolumeBase
 * auto generated base class for the model VolumeModel.
 */
export const VolumeModelBase = ModelBase
  .named('Volume')
  .props({
    __typename: types.optional(types.literal("Volume"), "Volume"),
    cubic_feet: types.union(types.undefined, types.null, types.integer),
    cubic_meters: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VolumeModelSelector extends QueryBuilder {
  get cubic_feet() { return this.__attr(`cubic_feet`) }
  get cubic_meters() { return this.__attr(`cubic_meters`) }
}
export function selectFromVolume() {
  return new VolumeModelSelector()
}

export const volumeModelPrimitives = selectFromVolume().cubic_feet.cubic_meters
