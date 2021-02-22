/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ForceModel, ForceModelType } from "./ForceModel"
import { ForceModelSelector } from "./ForceModel.base"
import { RocketSecondStagePayloadsModel, RocketSecondStagePayloadsModelType } from "./RocketSecondStagePayloadsModel"
import { RocketSecondStagePayloadsModelSelector } from "./RocketSecondStagePayloadsModel.base"
import { RootStoreType } from "./index"


/**
 * RocketSecondStageBase
 * auto generated base class for the model RocketSecondStageModel.
 */
export const RocketSecondStageModelBase = ModelBase
  .named('RocketSecondStage')
  .props({
    __typename: types.optional(types.literal("RocketSecondStage"), "RocketSecondStage"),
    burn_time_sec: types.union(types.undefined, types.null, types.integer),
    engines: types.union(types.undefined, types.null, types.integer),
    fuel_amount_tons: types.union(types.undefined, types.null, types.number),
    payloads: types.union(types.undefined, types.null, types.late((): any => RocketSecondStagePayloadsModel)),
    thrust: types.union(types.undefined, types.null, types.late((): any => ForceModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketSecondStageModelSelector extends QueryBuilder {
  get burn_time_sec() { return this.__attr(`burn_time_sec`) }
  get engines() { return this.__attr(`engines`) }
  get fuel_amount_tons() { return this.__attr(`fuel_amount_tons`) }
  payloads(builder?: string | RocketSecondStagePayloadsModelSelector | ((selector: RocketSecondStagePayloadsModelSelector) => RocketSecondStagePayloadsModelSelector)) { return this.__child(`payloads`, RocketSecondStagePayloadsModelSelector, builder) }
  thrust(builder?: string | ForceModelSelector | ((selector: ForceModelSelector) => ForceModelSelector)) { return this.__child(`thrust`, ForceModelSelector, builder) }
}
export function selectFromRocketSecondStage() {
  return new RocketSecondStageModelSelector()
}

export const rocketSecondStageModelPrimitives = selectFromRocketSecondStage().burn_time_sec.engines.fuel_amount_tons
