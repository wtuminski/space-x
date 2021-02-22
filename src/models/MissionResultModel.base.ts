/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MissionModel, MissionModelType } from "./MissionModel"
import { MissionModelSelector } from "./MissionModel.base"
import { ResultModel, ResultModelType } from "./ResultModel"
import { ResultModelSelector } from "./ResultModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<MissionModelType>;
}

/**
 * MissionResultBase
 * auto generated base class for the model MissionResultModel.
 */
export const MissionResultModelBase = withTypedRefs<Refs>()(ModelBase
  .named('MissionResult')
  .props({
    __typename: types.optional(types.literal("MissionResult"), "MissionResult"),
    result: types.union(types.undefined, types.null, types.late((): any => ResultModel)),
    data: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => MissionModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class MissionResultModelSelector extends QueryBuilder {
  result(builder?: string | ResultModelSelector | ((selector: ResultModelSelector) => ResultModelSelector)) { return this.__child(`result`, ResultModelSelector, builder) }
  data(builder?: string | MissionModelSelector | ((selector: MissionModelSelector) => MissionModelSelector)) { return this.__child(`data`, MissionModelSelector, builder) }
}
export function selectFromMissionResult() {
  return new MissionResultModelSelector()
}

export const missionResultModelPrimitives = selectFromMissionResult()
