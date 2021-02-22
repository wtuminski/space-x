/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ForceModel, ForceModelType } from "./ForceModel"
import { ForceModelSelector } from "./ForceModel.base"
import { RootStoreType } from "./index"


/**
 * RocketFirstStageBase
 * auto generated base class for the model RocketFirstStageModel.
 */
export const RocketFirstStageModelBase = ModelBase
  .named('RocketFirstStage')
  .props({
    __typename: types.optional(types.literal("RocketFirstStage"), "RocketFirstStage"),
    burn_time_sec: types.union(types.undefined, types.null, types.integer),
    engines: types.union(types.undefined, types.null, types.integer),
    fuel_amount_tons: types.union(types.undefined, types.null, types.number),
    reusable: types.union(types.undefined, types.null, types.boolean),
    thrust_sea_level: types.union(types.undefined, types.null, types.late((): any => ForceModel)),
    thrust_vacuum: types.union(types.undefined, types.null, types.late((): any => ForceModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketFirstStageModelSelector extends QueryBuilder {
  get burn_time_sec() { return this.__attr(`burn_time_sec`) }
  get engines() { return this.__attr(`engines`) }
  get fuel_amount_tons() { return this.__attr(`fuel_amount_tons`) }
  get reusable() { return this.__attr(`reusable`) }
  thrust_sea_level(builder?: string | ForceModelSelector | ((selector: ForceModelSelector) => ForceModelSelector)) { return this.__child(`thrust_sea_level`, ForceModelSelector, builder) }
  thrust_vacuum(builder?: string | ForceModelSelector | ((selector: ForceModelSelector) => ForceModelSelector)) { return this.__child(`thrust_vacuum`, ForceModelSelector, builder) }
}
export function selectFromRocketFirstStage() {
  return new RocketFirstStageModelSelector()
}

export const rocketFirstStageModelPrimitives = selectFromRocketFirstStage().burn_time_sec.engines.fuel_amount_tons.reusable
