/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ResultModel, ResultModelType } from "./ResultModel"
import { ResultModelSelector } from "./ResultModel.base"
import { ShipModel, ShipModelType } from "./ShipModel"
import { ShipModelSelector } from "./ShipModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  data: IObservableArray<ShipModelType>;
}

/**
 * ShipsResultBase
 * auto generated base class for the model ShipsResultModel.
 */
export const ShipsResultModelBase = withTypedRefs<Refs>()(ModelBase
  .named('ShipsResult')
  .props({
    __typename: types.optional(types.literal("ShipsResult"), "ShipsResult"),
    result: types.union(types.undefined, types.null, types.late((): any => ResultModel)),
    data: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ShipModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class ShipsResultModelSelector extends QueryBuilder {
  result(builder?: string | ResultModelSelector | ((selector: ResultModelSelector) => ResultModelSelector)) { return this.__child(`result`, ResultModelSelector, builder) }
  data(builder?: string | ShipModelSelector | ((selector: ShipModelSelector) => ShipModelSelector)) { return this.__child(`data`, ShipModelSelector, builder) }
}
export function selectFromShipsResult() {
  return new ShipsResultModelSelector()
}

export const shipsResultModelPrimitives = selectFromShipsResult()
