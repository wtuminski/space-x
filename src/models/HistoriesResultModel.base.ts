/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { HistoryModel, HistoryModelType } from "./HistoryModel"
import { HistoryModelSelector } from "./HistoryModel.base"
import { ResultModel, ResultModelType } from "./ResultModel"
import { ResultModelSelector } from "./ResultModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<HistoryModelType>;
}

/**
 * HistoriesResultBase
 * auto generated base class for the model HistoriesResultModel.
 */
export const HistoriesResultModelBase = withTypedRefs<Refs>()(ModelBase
  .named('HistoriesResult')
  .props({
    __typename: types.optional(types.literal("HistoriesResult"), "HistoriesResult"),
    result: types.union(types.undefined, types.null, types.late((): any => ResultModel)),
    data: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => HistoryModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class HistoriesResultModelSelector extends QueryBuilder {
  result(builder?: string | ResultModelSelector | ((selector: ResultModelSelector) => ResultModelSelector)) { return this.__child(`result`, ResultModelSelector, builder) }
  data(builder?: string | HistoryModelSelector | ((selector: HistoryModelSelector) => HistoryModelSelector)) { return this.__child(`data`, HistoryModelSelector, builder) }
}
export function selectFromHistoriesResult() {
  return new HistoriesResultModelSelector()
}

export const historiesResultModelPrimitives = selectFromHistoriesResult()
