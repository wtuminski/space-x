/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * ForceBase
 * auto generated base class for the model ForceModel.
 */
export const ForceModelBase = ModelBase
  .named('Force')
  .props({
    __typename: types.optional(types.literal("Force"), "Force"),
    kN: types.union(types.undefined, types.null, types.number),
    lbf: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ForceModelSelector extends QueryBuilder {
  get kN() { return this.__attr(`kN`) }
  get lbf() { return this.__attr(`lbf`) }
}
export function selectFromForce() {
  return new ForceModelSelector()
}

export const forceModelPrimitives = selectFromForce().kN.lbf
