/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * LaunchLinksBase
 * auto generated base class for the model LaunchLinksModel.
 */
export const LaunchLinksModelBase = ModelBase
  .named('LaunchLinks')
  .props({
    __typename: types.optional(types.literal("LaunchLinks"), "LaunchLinks"),
    article_link: types.union(types.undefined, types.null, types.string),
    flickr_images: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    mission_patch_small: types.union(types.undefined, types.null, types.string),
    mission_patch: types.union(types.undefined, types.null, types.string),
    presskit: types.union(types.undefined, types.null, types.string),
    reddit_campaign: types.union(types.undefined, types.null, types.string),
    reddit_launch: types.union(types.undefined, types.null, types.string),
    reddit_media: types.union(types.undefined, types.null, types.string),
    reddit_recovery: types.union(types.undefined, types.null, types.string),
    video_link: types.union(types.undefined, types.null, types.string),
    wikipedia: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LaunchLinksModelSelector extends QueryBuilder {
  get article_link() { return this.__attr(`article_link`) }
  get flickr_images() { return this.__attr(`flickr_images`) }
  get mission_patch_small() { return this.__attr(`mission_patch_small`) }
  get mission_patch() { return this.__attr(`mission_patch`) }
  get presskit() { return this.__attr(`presskit`) }
  get reddit_campaign() { return this.__attr(`reddit_campaign`) }
  get reddit_launch() { return this.__attr(`reddit_launch`) }
  get reddit_media() { return this.__attr(`reddit_media`) }
  get reddit_recovery() { return this.__attr(`reddit_recovery`) }
  get video_link() { return this.__attr(`video_link`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
}
export function selectFromLaunchLinks() {
  return new LaunchLinksModelSelector()
}

export const launchLinksModelPrimitives = selectFromLaunchLinks().article_link.flickr_images.mission_patch_small.mission_patch.presskit.reddit_campaign.reddit_launch.reddit_media.reddit_recovery.video_link.wikipedia
