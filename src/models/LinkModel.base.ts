/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LinkBase
 * auto generated base class for the model LinkModel.
 */
export const LinkModelBase = ModelBase
  .named('Link')
  .props({
    __typename: types.optional(types.literal("Link"), "Link"),
    article: types.union(types.undefined, types.null, types.string),
    reddit: types.union(types.undefined, types.null, types.string),
    wikipedia: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LinkModelSelector extends QueryBuilder {
  get article() { return this.__attr(`article`) }
  get reddit() { return this.__attr(`reddit`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
}
export function selectFromLink() {
  return new LinkModelSelector()
}

export const linkModelPrimitives = selectFromLink().article.reddit.wikipedia
