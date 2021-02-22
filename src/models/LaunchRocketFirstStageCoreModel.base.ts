/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { CoreModel, CoreModelType } from "./CoreModel"
import { CoreModelSelector } from "./CoreModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  core: CoreModelType;
}

/**
 * LaunchRocketFirstStageCoreBase
 * auto generated base class for the model LaunchRocketFirstStageCoreModel.
 */
export const LaunchRocketFirstStageCoreModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LaunchRocketFirstStageCore')
  .props({
    __typename: types.optional(types.literal("LaunchRocketFirstStageCore"), "LaunchRocketFirstStageCore"),
    block: types.union(types.undefined, types.null, types.integer),
    core: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => CoreModel))),
    flight: types.union(types.undefined, types.null, types.integer),
    gridfins: types.union(types.undefined, types.null, types.boolean),
    land_success: types.union(types.undefined, types.null, types.boolean),
    landing_intent: types.union(types.undefined, types.null, types.boolean),
    landing_type: types.union(types.undefined, types.null, types.string),
    landing_vehicle: types.union(types.undefined, types.null, types.string),
    legs: types.union(types.undefined, types.null, types.boolean),
    reused: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LaunchRocketFirstStageCoreModelSelector extends QueryBuilder {
  get block() { return this.__attr(`block`) }
  get flight() { return this.__attr(`flight`) }
  get gridfins() { return this.__attr(`gridfins`) }
  get land_success() { return this.__attr(`land_success`) }
  get landing_intent() { return this.__attr(`landing_intent`) }
  get landing_type() { return this.__attr(`landing_type`) }
  get landing_vehicle() { return this.__attr(`landing_vehicle`) }
  get legs() { return this.__attr(`legs`) }
  get reused() { return this.__attr(`reused`) }
  core(builder?: string | CoreModelSelector | ((selector: CoreModelSelector) => CoreModelSelector)) { return this.__child(`core`, CoreModelSelector, builder) }
}
export function selectFromLaunchRocketFirstStageCore() {
  return new LaunchRocketFirstStageCoreModelSelector()
}

export const launchRocketFirstStageCoreModelPrimitives = selectFromLaunchRocketFirstStageCore().block.flight.gridfins.land_success.landing_intent.landing_type.landing_vehicle.legs.reused
