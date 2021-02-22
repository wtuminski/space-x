/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LaunchModel, LaunchModelType } from "./LaunchModel"
import { LaunchModelSelector } from "./LaunchModel.base"
import { ResultModel, ResultModelType } from "./ResultModel"
import { ResultModelSelector } from "./ResultModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<LaunchModelType>;
}

/**
 * LaunchesPastResultBase
 * auto generated base class for the model LaunchesPastResultModel.
 */
export const LaunchesPastResultModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LaunchesPastResult')
  .props({
    __typename: types.optional(types.literal("LaunchesPastResult"), "LaunchesPastResult"),
    result: types.union(types.undefined, types.null, types.late((): any => ResultModel)),
    data: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => LaunchModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LaunchesPastResultModelSelector extends QueryBuilder {
  result(builder?: string | ResultModelSelector | ((selector: ResultModelSelector) => ResultModelSelector)) { return this.__child(`result`, ResultModelSelector, builder) }
  data(builder?: string | LaunchModelSelector | ((selector: LaunchModelSelector) => LaunchModelSelector)) { return this.__child(`data`, LaunchModelSelector, builder) }
}
export function selectFromLaunchesPastResult() {
  return new LaunchesPastResultModelSelector()
}

export const launchesPastResultModelPrimitives = selectFromLaunchesPastResult()
