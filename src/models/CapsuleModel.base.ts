/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CapsuleMissionModel, CapsuleMissionModelType } from "./CapsuleMissionModel"
import { CapsuleMissionModelSelector } from "./CapsuleMissionModel.base"
import { DragonModel, DragonModelType } from "./DragonModel"
import { DragonModelSelector } from "./DragonModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  dragon: DragonModelType;
}

/**
 * CapsuleBase
 * auto generated base class for the model CapsuleModel.
 */
export const CapsuleModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Capsule')
  .props({
    __typename: types.optional(types.literal("Capsule"), "Capsule"),
    id: types.identifier,
    landings: types.union(types.undefined, types.null, types.integer),
    missions: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => CapsuleMissionModel)))),
    original_launch: types.union(types.undefined, types.null, types.frozen()),
    reuse_count: types.union(types.undefined, types.null, types.integer),
    status: types.union(types.undefined, types.null, types.string),
    type: types.union(types.undefined, types.null, types.string),
    dragon: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => DragonModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class CapsuleModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get landings() { return this.__attr(`landings`) }
  get original_launch() { return this.__attr(`original_launch`) }
  get reuse_count() { return this.__attr(`reuse_count`) }
  get status() { return this.__attr(`status`) }
  get type() { return this.__attr(`type`) }
  missions(builder?: string | CapsuleMissionModelSelector | ((selector: CapsuleMissionModelSelector) => CapsuleMissionModelSelector)) { return this.__child(`missions`, CapsuleMissionModelSelector, builder) }
  dragon(builder?: string | DragonModelSelector | ((selector: DragonModelSelector) => DragonModelSelector)) { return this.__child(`dragon`, DragonModelSelector, builder) }
}
export function selectFromCapsule() {
  return new CapsuleModelSelector()
}

export const capsuleModelPrimitives = selectFromCapsule().landings.original_launch.reuse_count.status.type
