/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PayloadModel, PayloadModelType } from "./PayloadModel"
import { PayloadModelSelector } from "./PayloadModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  payloads: IObservableArray<PayloadModelType>;
}

/**
 * LaunchRocketSecondStageBase
 * auto generated base class for the model LaunchRocketSecondStageModel.
 */
export const LaunchRocketSecondStageModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LaunchRocketSecondStage')
  .props({
    __typename: types.optional(types.literal("LaunchRocketSecondStage"), "LaunchRocketSecondStage"),
    block: types.union(types.undefined, types.null, types.integer),
    payloads: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PayloadModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LaunchRocketSecondStageModelSelector extends QueryBuilder {
  get block() { return this.__attr(`block`) }
  payloads(builder?: string | PayloadModelSelector | ((selector: PayloadModelSelector) => PayloadModelSelector)) { return this.__child(`payloads`, PayloadModelSelector, builder) }
}
export function selectFromLaunchRocketSecondStage() {
  return new LaunchRocketSecondStageModelSelector()
}

export const launchRocketSecondStageModelPrimitives = selectFromLaunchRocketSecondStage().block
