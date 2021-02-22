/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * InfoLinksBase
 * auto generated base class for the model InfoLinksModel.
 */
export const InfoLinksModelBase = ModelBase
  .named('InfoLinks')
  .props({
    __typename: types.optional(types.literal("InfoLinks"), "InfoLinks"),
    elon_twitter: types.union(types.undefined, types.null, types.string),
    flickr: types.union(types.undefined, types.null, types.string),
    twitter: types.union(types.undefined, types.null, types.string),
    website: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class InfoLinksModelSelector extends QueryBuilder {
  get elon_twitter() { return this.__attr(`elon_twitter`) }
  get flickr() { return this.__attr(`flickr`) }
  get twitter() { return this.__attr(`twitter`) }
  get website() { return this.__attr(`website`) }
}
export function selectFromInfoLinks() {
  return new InfoLinksModelSelector()
}

export const infoLinksModelPrimitives = selectFromInfoLinks().elon_twitter.flickr.twitter.website
