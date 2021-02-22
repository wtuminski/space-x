/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LaunchSiteBase
 * auto generated base class for the model LaunchSiteModel.
 */
export const LaunchSiteModelBase = ModelBase
  .named('LaunchSite')
  .props({
    __typename: types.optional(types.literal("LaunchSite"), "LaunchSite"),
    site_id: types.union(types.undefined, types.null, types.string),
    site_name_long: types.union(types.undefined, types.null, types.string),
    site_name: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LaunchSiteModelSelector extends QueryBuilder {
  get site_id() { return this.__attr(`site_id`) }
  get site_name_long() { return this.__attr(`site_name_long`) }
  get site_name() { return this.__attr(`site_name`) }
}
export function selectFromLaunchSite() {
  return new LaunchSiteModelSelector()
}

export const launchSiteModelPrimitives = selectFromLaunchSite().site_id.site_name_long.site_name
