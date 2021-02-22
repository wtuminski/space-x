/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VolumeModel, VolumeModelType } from "./VolumeModel"
import { VolumeModelSelector } from "./VolumeModel.base"
import { RootStoreType } from "./index"


/**
 * DragonPressurizedCapsuleBase
 * auto generated base class for the model DragonPressurizedCapsuleModel.
 */
export const DragonPressurizedCapsuleModelBase = ModelBase
  .named('DragonPressurizedCapsule')
  .props({
    __typename: types.optional(types.literal("DragonPressurizedCapsule"), "DragonPressurizedCapsule"),
    payload_volume: types.union(types.undefined, types.null, types.late((): any => VolumeModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DragonPressurizedCapsuleModelSelector extends QueryBuilder {
  payload_volume(builder?: string | VolumeModelSelector | ((selector: VolumeModelSelector) => VolumeModelSelector)) { return this.__child(`payload_volume`, VolumeModelSelector, builder) }
}
export function selectFromDragonPressurizedCapsule() {
  return new DragonPressurizedCapsuleModelSelector()
}

export const dragonPressurizedCapsuleModelPrimitives = selectFromDragonPressurizedCapsule()
