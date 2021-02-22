/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PayloadModel, PayloadModelType } from "./PayloadModel"
import { PayloadModelSelector } from "./PayloadModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  payloads: IObservableArray<PayloadModelType>;
}

/**
 * MissionBase
 * auto generated base class for the model MissionModel.
 */
export const MissionModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Mission')
  .props({
    __typename: types.optional(types.literal("Mission"), "Mission"),
    description: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    manufacturers: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    name: types.union(types.undefined, types.null, types.string),
    twitter: types.union(types.undefined, types.null, types.string),
    website: types.union(types.undefined, types.null, types.string),
    wikipedia: types.union(types.undefined, types.null, types.string),
    payloads: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => PayloadModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class MissionModelSelector extends QueryBuilder {
  get description() { return this.__attr(`description`) }
  get id() { return this.__attr(`id`) }
  get manufacturers() { return this.__attr(`manufacturers`) }
  get name() { return this.__attr(`name`) }
  get twitter() { return this.__attr(`twitter`) }
  get website() { return this.__attr(`website`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
  payloads(builder?: string | PayloadModelSelector | ((selector: PayloadModelSelector) => PayloadModelSelector)) { return this.__child(`payloads`, PayloadModelSelector, builder) }
}
export function selectFromMission() {
  return new MissionModelSelector()
}

export const missionModelPrimitives = selectFromMission().description.manufacturers.name.twitter.website.wikipedia
