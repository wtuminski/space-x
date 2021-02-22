/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ResultModel, ResultModelType } from "./ResultModel"
import { ResultModelSelector } from "./ResultModel.base"
import { RocketModel, RocketModelType } from "./RocketModel"
import { RocketModelSelector } from "./RocketModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<RocketModelType>;
}

/**
 * RocketsResultBase
 * auto generated base class for the model RocketsResultModel.
 */
export const RocketsResultModelBase = withTypedRefs<Refs>()(ModelBase
  .named('RocketsResult')
  .props({
    __typename: types.optional(types.literal("RocketsResult"), "RocketsResult"),
    result: types.union(types.undefined, types.null, types.late((): any => ResultModel)),
    data: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => RocketModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class RocketsResultModelSelector extends QueryBuilder {
  result(builder?: string | ResultModelSelector | ((selector: ResultModelSelector) => ResultModelSelector)) { return this.__child(`result`, ResultModelSelector, builder) }
  data(builder?: string | RocketModelSelector | ((selector: RocketModelSelector) => RocketModelSelector)) { return this.__child(`data`, RocketModelSelector, builder) }
}
export function selectFromRocketsResult() {
  return new RocketsResultModelSelector()
}

export const rocketsResultModelPrimitives = selectFromRocketsResult()
