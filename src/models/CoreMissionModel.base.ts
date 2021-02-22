/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CoreMissionBase
 * auto generated base class for the model CoreMissionModel.
 */
export const CoreMissionModelBase = ModelBase
  .named('CoreMission')
  .props({
    __typename: types.optional(types.literal("CoreMission"), "CoreMission"),
    name: types.union(types.undefined, types.null, types.string),
    flight: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CoreMissionModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get flight() { return this.__attr(`flight`) }
}
export function selectFromCoreMission() {
  return new CoreMissionModelSelector()
}

export const coreMissionModelPrimitives = selectFromCoreMission().name.flight
