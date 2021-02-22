/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RocketSecondStagePayloadCompositeFairingModel, RocketSecondStagePayloadCompositeFairingModelType } from "./RocketSecondStagePayloadCompositeFairingModel"
import { RocketSecondStagePayloadCompositeFairingModelSelector } from "./RocketSecondStagePayloadCompositeFairingModel.base"
import { RootStoreType } from "./index"


/**
 * RocketSecondStagePayloadsBase
 * auto generated base class for the model RocketSecondStagePayloadsModel.
 */
export const RocketSecondStagePayloadsModelBase = ModelBase
  .named('RocketSecondStagePayloads')
  .props({
    __typename: types.optional(types.literal("RocketSecondStagePayloads"), "RocketSecondStagePayloads"),
    option_1: types.union(types.undefined, types.null, types.string),
    composite_fairing: types.union(types.undefined, types.null, types.late((): any => RocketSecondStagePayloadCompositeFairingModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketSecondStagePayloadsModelSelector extends QueryBuilder {
  get option_1() { return this.__attr(`option_1`) }
  composite_fairing(builder?: string | RocketSecondStagePayloadCompositeFairingModelSelector | ((selector: RocketSecondStagePayloadCompositeFairingModelSelector) => RocketSecondStagePayloadCompositeFairingModelSelector)) { return this.__child(`composite_fairing`, RocketSecondStagePayloadCompositeFairingModelSelector, builder) }
}
export function selectFromRocketSecondStagePayloads() {
  return new RocketSecondStagePayloadsModelSelector()
}

export const rocketSecondStagePayloadsModelPrimitives = selectFromRocketSecondStagePayloads().option_1
