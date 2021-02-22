/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { DistanceModel, DistanceModelType } from "./DistanceModel"
import { DistanceModelSelector } from "./DistanceModel.base"
import { RootStoreType } from "./index"


/**
 * RocketSecondStagePayloadCompositeFairingBase
 * auto generated base class for the model RocketSecondStagePayloadCompositeFairingModel.
 */
export const RocketSecondStagePayloadCompositeFairingModelBase = ModelBase
  .named('RocketSecondStagePayloadCompositeFairing')
  .props({
    __typename: types.optional(types.literal("RocketSecondStagePayloadCompositeFairing"), "RocketSecondStagePayloadCompositeFairing"),
    height: types.union(types.undefined, types.null, types.late((): any => DistanceModel)),
    diameter: types.union(types.undefined, types.null, types.late((): any => DistanceModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketSecondStagePayloadCompositeFairingModelSelector extends QueryBuilder {
  height(builder?: string | DistanceModelSelector | ((selector: DistanceModelSelector) => DistanceModelSelector)) { return this.__child(`height`, DistanceModelSelector, builder) }
  diameter(builder?: string | DistanceModelSelector | ((selector: DistanceModelSelector) => DistanceModelSelector)) { return this.__child(`diameter`, DistanceModelSelector, builder) }
}
export function selectFromRocketSecondStagePayloadCompositeFairing() {
  return new RocketSecondStagePayloadCompositeFairingModelSelector()
}

export const rocketSecondStagePayloadCompositeFairingModelPrimitives = selectFromRocketSecondStagePayloadCompositeFairing()
