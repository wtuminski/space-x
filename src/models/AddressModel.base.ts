/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * AddressBase
 * auto generated base class for the model AddressModel.
 */
export const AddressModelBase = ModelBase
  .named('Address')
  .props({
    __typename: types.optional(types.literal("Address"), "Address"),
    address: types.union(types.undefined, types.null, types.string),
    city: types.union(types.undefined, types.null, types.string),
    state: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class AddressModelSelector extends QueryBuilder {
  get address() { return this.__attr(`address`) }
  get city() { return this.__attr(`city`) }
  get state() { return this.__attr(`state`) }
}
export function selectFromAddress() {
  return new AddressModelSelector()
}

export const addressModelPrimitives = selectFromAddress().address.city.state
