/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UsersMaxFieldsBase
 * auto generated base class for the model UsersMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const UsersMaxFieldsModelBase = ModelBase
  .named('UsersMaxFields')
  .props({
    __typename: types.optional(types.literal("users_max_fields"), "users_max_fields"),
    name: types.union(types.undefined, types.null, types.string),
    rocket: types.union(types.undefined, types.null, types.string),
    timestamp: types.union(types.undefined, types.null, types.frozen()),
    twitter: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersMaxFieldsModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get rocket() { return this.__attr(`rocket`) }
  get timestamp() { return this.__attr(`timestamp`) }
  get twitter() { return this.__attr(`twitter`) }
}
export function selectFromUsersMaxFields() {
  return new UsersMaxFieldsModelSelector()
}

export const usersMaxFieldsModelPrimitives = selectFromUsersMaxFields().name.rocket.timestamp.twitter
