/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * CapsuleMissionBase
 * auto generated base class for the model CapsuleMissionModel.
 */
export const CapsuleMissionModelBase = ModelBase
  .named('CapsuleMission')
  .props({
    __typename: types.optional(types.literal("CapsuleMission"), "CapsuleMission"),
    flight: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CapsuleMissionModelSelector extends QueryBuilder {
  get flight() { return this.__attr(`flight`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromCapsuleMission() {
  return new CapsuleMissionModelSelector()
}

export const capsuleMissionModelPrimitives = selectFromCapsuleMission().flight.name
