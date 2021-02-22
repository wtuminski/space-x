/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { DragonTrunkCargoModel, DragonTrunkCargoModelType } from "./DragonTrunkCargoModel"
import { DragonTrunkCargoModelSelector } from "./DragonTrunkCargoModel.base"
import { VolumeModel, VolumeModelType } from "./VolumeModel"
import { VolumeModelSelector } from "./VolumeModel.base"
import { RootStoreType } from "./index"


/**
 * DragonTrunkBase
 * auto generated base class for the model DragonTrunkModel.
 */
export const DragonTrunkModelBase = ModelBase
  .named('DragonTrunk')
  .props({
    __typename: types.optional(types.literal("DragonTrunk"), "DragonTrunk"),
    cargo: types.union(types.undefined, types.null, types.late((): any => DragonTrunkCargoModel)),
    trunk_volume: types.union(types.undefined, types.null, types.late((): any => VolumeModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DragonTrunkModelSelector extends QueryBuilder {
  cargo(builder?: string | DragonTrunkCargoModelSelector | ((selector: DragonTrunkCargoModelSelector) => DragonTrunkCargoModelSelector)) { return this.__child(`cargo`, DragonTrunkCargoModelSelector, builder) }
  trunk_volume(builder?: string | VolumeModelSelector | ((selector: VolumeModelSelector) => VolumeModelSelector)) { return this.__child(`trunk_volume`, VolumeModelSelector, builder) }
}
export function selectFromDragonTrunk() {
  return new DragonTrunkModelSelector()
}

export const dragonTrunkModelPrimitives = selectFromDragonTrunk()
