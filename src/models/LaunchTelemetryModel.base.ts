/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LaunchTelemetryBase
 * auto generated base class for the model LaunchTelemetryModel.
 */
export const LaunchTelemetryModelBase = ModelBase
  .named('LaunchTelemetry')
  .props({
    __typename: types.optional(types.literal("LaunchTelemetry"), "LaunchTelemetry"),
    flight_club: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LaunchTelemetryModelSelector extends QueryBuilder {
  get flight_club() { return this.__attr(`flight_club`) }
}
export function selectFromLaunchTelemetry() {
  return new LaunchTelemetryModelSelector()
}

export const launchTelemetryModelPrimitives = selectFromLaunchTelemetry().flight_club
