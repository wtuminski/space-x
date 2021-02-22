/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MassBase
 * auto generated base class for the model MassModel.
 */
export const MassModelBase = ModelBase
  .named('Mass')
  .props({
    __typename: types.optional(types.literal("Mass"), "Mass"),
    kg: types.union(types.undefined, types.null, types.integer),
    lb: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MassModelSelector extends QueryBuilder {
  get kg() { return this.__attr(`kg`) }
  get lb() { return this.__attr(`lb`) }
}
export function selectFromMass() {
  return new MassModelSelector()
}

export const massModelPrimitives = selectFromMass().kg.lb
