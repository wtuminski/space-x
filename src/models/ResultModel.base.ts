/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ResultBase
 * auto generated base class for the model ResultModel.
 */
export const ResultModelBase = ModelBase
  .named('Result')
  .props({
    __typename: types.optional(types.literal("Result"), "Result"),
    totalCount: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ResultModelSelector extends QueryBuilder {
  get totalCount() { return this.__attr(`totalCount`) }
}
export function selectFromResult() {
  return new ResultModelSelector()
}

export const resultModelPrimitives = selectFromResult().totalCount
