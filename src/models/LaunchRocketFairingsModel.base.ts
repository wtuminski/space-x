/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LaunchRocketFairingsBase
 * auto generated base class for the model LaunchRocketFairingsModel.
 */
export const LaunchRocketFairingsModelBase = ModelBase
  .named('LaunchRocketFairings')
  .props({
    __typename: types.optional(types.literal("LaunchRocketFairings"), "LaunchRocketFairings"),
    recovered: types.union(types.undefined, types.null, types.boolean),
    recovery_attempt: types.union(types.undefined, types.null, types.boolean),
    reused: types.union(types.undefined, types.null, types.boolean),
    ship: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LaunchRocketFairingsModelSelector extends QueryBuilder {
  get recovered() { return this.__attr(`recovered`) }
  get recovery_attempt() { return this.__attr(`recovery_attempt`) }
  get reused() { return this.__attr(`reused`) }
  get ship() { return this.__attr(`ship`) }
}
export function selectFromLaunchRocketFairings() {
  return new LaunchRocketFairingsModelSelector()
}

export const launchRocketFairingsModelPrimitives = selectFromLaunchRocketFairings().recovered.recovery_attempt.reused.ship
