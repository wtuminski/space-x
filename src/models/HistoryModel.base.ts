/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LaunchModel, LaunchModelType } from "./LaunchModel"
import { LaunchModelSelector } from "./LaunchModel.base"
import { LinkModel, LinkModelType } from "./LinkModel"
import { LinkModelSelector } from "./LinkModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  flight: LaunchModelType;
}

/**
 * HistoryBase
 * auto generated base class for the model HistoryModel.
 */
export const HistoryModelBase = withTypedRefs<Refs>()(ModelBase
  .named('History')
  .props({
    __typename: types.optional(types.literal("History"), "History"),
    details: types.union(types.undefined, types.null, types.string),
    event_date_unix: types.union(types.undefined, types.null, types.frozen()),
    event_date_utc: types.union(types.undefined, types.null, types.frozen()),
    id: types.identifier,
    links: types.union(types.undefined, types.null, types.late((): any => LinkModel)),
    title: types.union(types.undefined, types.null, types.string),
    flight: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => LaunchModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class HistoryModelSelector extends QueryBuilder {
  get details() { return this.__attr(`details`) }
  get event_date_unix() { return this.__attr(`event_date_unix`) }
  get event_date_utc() { return this.__attr(`event_date_utc`) }
  get id() { return this.__attr(`id`) }
  get title() { return this.__attr(`title`) }
  links(builder?: string | LinkModelSelector | ((selector: LinkModelSelector) => LinkModelSelector)) { return this.__child(`links`, LinkModelSelector, builder) }
  flight(builder?: string | LaunchModelSelector | ((selector: LaunchModelSelector) => LaunchModelSelector)) { return this.__child(`flight`, LaunchModelSelector, builder) }
}
export function selectFromHistory() {
  return new HistoryModelSelector()
}

export const historyModelPrimitives = selectFromHistory().details.event_date_unix.event_date_utc.title
