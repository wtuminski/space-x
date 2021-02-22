/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CapsuleMissionModel, CapsuleMissionModelType } from "./CapsuleMissionModel"
import { CapsuleMissionModelSelector } from "./CapsuleMissionModel.base"
import { RootStoreType } from "./index"


/**
 * CoreBase
 * auto generated base class for the model CoreModel.
 */
export const CoreModelBase = ModelBase
  .named('Core')
  .props({
    __typename: types.optional(types.literal("Core"), "Core"),
    asds_attempts: types.union(types.undefined, types.null, types.integer),
    asds_landings: types.union(types.undefined, types.null, types.integer),
    block: types.union(types.undefined, types.null, types.integer),
    id: types.identifier,
    missions: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => CapsuleMissionModel)))),
    original_launch: types.union(types.undefined, types.null, types.frozen()),
    reuse_count: types.union(types.undefined, types.null, types.integer),
    rtls_attempts: types.union(types.undefined, types.null, types.integer),
    rtls_landings: types.union(types.undefined, types.null, types.integer),
    status: types.union(types.undefined, types.null, types.string),
    water_landing: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CoreModelSelector extends QueryBuilder {
  get asds_attempts() { return this.__attr(`asds_attempts`) }
  get asds_landings() { return this.__attr(`asds_landings`) }
  get block() { return this.__attr(`block`) }
  get id() { return this.__attr(`id`) }
  get original_launch() { return this.__attr(`original_launch`) }
  get reuse_count() { return this.__attr(`reuse_count`) }
  get rtls_attempts() { return this.__attr(`rtls_attempts`) }
  get rtls_landings() { return this.__attr(`rtls_landings`) }
  get status() { return this.__attr(`status`) }
  get water_landing() { return this.__attr(`water_landing`) }
  missions(builder?: string | CapsuleMissionModelSelector | ((selector: CapsuleMissionModelSelector) => CapsuleMissionModelSelector)) { return this.__child(`missions`, CapsuleMissionModelSelector, builder) }
}
export function selectFromCore() {
  return new CoreModelSelector()
}

export const coreModelPrimitives = selectFromCore().asds_attempts.asds_landings.block.original_launch.reuse_count.rtls_attempts.rtls_landings.status.water_landing
