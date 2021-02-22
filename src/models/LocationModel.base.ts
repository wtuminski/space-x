/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LocationBase
 * auto generated base class for the model LocationModel.
 */
export const LocationModelBase = ModelBase
  .named('Location')
  .props({
    __typename: types.optional(types.literal("Location"), "Location"),
    latitude: types.union(types.undefined, types.null, types.number),
    longitude: types.union(types.undefined, types.null, types.number),
    name: types.union(types.undefined, types.null, types.string),
    region: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LocationModelSelector extends QueryBuilder {
  get latitude() { return this.__attr(`latitude`) }
  get longitude() { return this.__attr(`longitude`) }
  get name() { return this.__attr(`name`) }
  get region() { return this.__attr(`region`) }
}
export function selectFromLocation() {
  return new LocationModelSelector()
}

export const locationModelPrimitives = selectFromLocation().latitude.longitude.name.region
