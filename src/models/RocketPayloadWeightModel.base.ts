/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * RocketPayloadWeightBase
 * auto generated base class for the model RocketPayloadWeightModel.
 */
export const RocketPayloadWeightModelBase = ModelBase
  .named('RocketPayloadWeight')
  .props({
    __typename: types.optional(types.literal("RocketPayloadWeight"), "RocketPayloadWeight"),
    id: types.union(types.undefined, types.null, types.string),
    kg: types.union(types.undefined, types.null, types.integer),
    lb: types.union(types.undefined, types.null, types.integer),
    name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketPayloadWeightModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get kg() { return this.__attr(`kg`) }
  get lb() { return this.__attr(`lb`) }
  get name() { return this.__attr(`name`) }
}
export function selectFromRocketPayloadWeight() {
  return new RocketPayloadWeightModelSelector()
}

export const rocketPayloadWeightModelPrimitives = selectFromRocketPayloadWeight().kg.lb.name
