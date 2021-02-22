/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LocationModel, LocationModelType } from "./LocationModel"
import { LocationModelSelector } from "./LocationModel.base"
import { RocketModel, RocketModelType } from "./RocketModel"
import { RocketModelSelector } from "./RocketModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  vehicles_launched: IObservableArray<RocketModelType>;
}

/**
 * LaunchpadBase
 * auto generated base class for the model LaunchpadModel.
 */
export const LaunchpadModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Launchpad')
  .props({
    __typename: types.optional(types.literal("Launchpad"), "Launchpad"),
    attempted_launches: types.union(types.undefined, types.null, types.integer),
    details: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    location: types.union(types.undefined, types.null, types.late((): any => LocationModel)),
    name: types.union(types.undefined, types.null, types.string),
    status: types.union(types.undefined, types.null, types.string),
    successful_launches: types.union(types.undefined, types.null, types.integer),
    vehicles_launched: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => RocketModel))))),
    wikipedia: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LaunchpadModelSelector extends QueryBuilder {
  get attempted_launches() { return this.__attr(`attempted_launches`) }
  get details() { return this.__attr(`details`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get status() { return this.__attr(`status`) }
  get successful_launches() { return this.__attr(`successful_launches`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
  location(builder?: string | LocationModelSelector | ((selector: LocationModelSelector) => LocationModelSelector)) { return this.__child(`location`, LocationModelSelector, builder) }
  vehicles_launched(builder?: string | RocketModelSelector | ((selector: RocketModelSelector) => RocketModelSelector)) { return this.__child(`vehicles_launched`, RocketModelSelector, builder) }
}
export function selectFromLaunchpad() {
  return new LaunchpadModelSelector()
}

export const launchpadModelPrimitives = selectFromLaunchpad().attempted_launches.details.name.status.successful_launches.wikipedia
