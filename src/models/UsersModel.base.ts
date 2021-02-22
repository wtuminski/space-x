/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * UsersBase
 * auto generated base class for the model UsersModel.
 *
 * columns and relationships of "users"
 */
export const UsersModelBase = ModelBase
  .named('Users')
  .props({
    __typename: types.optional(types.literal("users"), "users"),
    id: types.union(types.undefined, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
    rocket: types.union(types.undefined, types.null, types.string),
    timestamp: types.union(types.undefined, types.frozen()),
    twitter: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UsersModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get rocket() { return this.__attr(`rocket`) }
  get timestamp() { return this.__attr(`timestamp`) }
  get twitter() { return this.__attr(`twitter`) }
}
export function selectFromUsers() {
  return new UsersModelSelector()
}

export const usersModelPrimitives = selectFromUsers().name.rocket.timestamp.twitter
