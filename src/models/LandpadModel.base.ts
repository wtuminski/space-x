/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LocationModel, LocationModelType } from "./LocationModel"
import { LocationModelSelector } from "./LocationModel.base"
import { RootStoreType } from "./index"


/**
 * LandpadBase
 * auto generated base class for the model LandpadModel.
 */
export const LandpadModelBase = ModelBase
  .named('Landpad')
  .props({
    __typename: types.optional(types.literal("Landpad"), "Landpad"),
    attempted_landings: types.union(types.undefined, types.null, types.string),
    details: types.union(types.undefined, types.null, types.string),
    full_name: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    landing_type: types.union(types.undefined, types.null, types.string),
    location: types.union(types.undefined, types.null, types.late((): any => LocationModel)),
    status: types.union(types.undefined, types.null, types.string),
    successful_landings: types.union(types.undefined, types.null, types.string),
    wikipedia: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LandpadModelSelector extends QueryBuilder {
  get attempted_landings() { return this.__attr(`attempted_landings`) }
  get details() { return this.__attr(`details`) }
  get full_name() { return this.__attr(`full_name`) }
  get id() { return this.__attr(`id`) }
  get landing_type() { return this.__attr(`landing_type`) }
  get status() { return this.__attr(`status`) }
  get successful_landings() { return this.__attr(`successful_landings`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
  location(builder?: string | LocationModelSelector | ((selector: LocationModelSelector) => LocationModelSelector)) { return this.__child(`location`, LocationModelSelector, builder) }
}
export function selectFromLandpad() {
  return new LandpadModelSelector()
}

export const landpadModelPrimitives = selectFromLandpad().attempted_landings.details.full_name.landing_type.status.successful_landings.wikipedia
