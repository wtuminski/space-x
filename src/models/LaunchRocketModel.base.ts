/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LaunchRocketFairingsModel, LaunchRocketFairingsModelType } from "./LaunchRocketFairingsModel"
import { LaunchRocketFairingsModelSelector } from "./LaunchRocketFairingsModel.base"
import { LaunchRocketFirstStageModel, LaunchRocketFirstStageModelType } from "./LaunchRocketFirstStageModel"
import { LaunchRocketFirstStageModelSelector } from "./LaunchRocketFirstStageModel.base"
import { LaunchRocketSecondStageModel, LaunchRocketSecondStageModelType } from "./LaunchRocketSecondStageModel"
import { LaunchRocketSecondStageModelSelector } from "./LaunchRocketSecondStageModel.base"
import { RocketModel, RocketModelType } from "./RocketModel"
import { RocketModelSelector } from "./RocketModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  rocket: RocketModelType;
}

/**
 * LaunchRocketBase
 * auto generated base class for the model LaunchRocketModel.
 */
export const LaunchRocketModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LaunchRocket')
  .props({
    __typename: types.optional(types.literal("LaunchRocket"), "LaunchRocket"),
    fairings: types.union(types.undefined, types.null, types.late((): any => LaunchRocketFairingsModel)),
    first_stage: types.union(types.undefined, types.null, types.late((): any => LaunchRocketFirstStageModel)),
    rocket_name: types.union(types.undefined, types.null, types.string),
    rocket_type: types.union(types.undefined, types.null, types.string),
    rocket: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => RocketModel))),
    second_stage: types.union(types.undefined, types.null, types.late((): any => LaunchRocketSecondStageModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LaunchRocketModelSelector extends QueryBuilder {
  get rocket_name() { return this.__attr(`rocket_name`) }
  get rocket_type() { return this.__attr(`rocket_type`) }
  fairings(builder?: string | LaunchRocketFairingsModelSelector | ((selector: LaunchRocketFairingsModelSelector) => LaunchRocketFairingsModelSelector)) { return this.__child(`fairings`, LaunchRocketFairingsModelSelector, builder) }
  first_stage(builder?: string | LaunchRocketFirstStageModelSelector | ((selector: LaunchRocketFirstStageModelSelector) => LaunchRocketFirstStageModelSelector)) { return this.__child(`first_stage`, LaunchRocketFirstStageModelSelector, builder) }
  rocket(builder?: string | RocketModelSelector | ((selector: RocketModelSelector) => RocketModelSelector)) { return this.__child(`rocket`, RocketModelSelector, builder) }
  second_stage(builder?: string | LaunchRocketSecondStageModelSelector | ((selector: LaunchRocketSecondStageModelSelector) => LaunchRocketSecondStageModelSelector)) { return this.__child(`second_stage`, LaunchRocketSecondStageModelSelector, builder) }
}
export function selectFromLaunchRocket() {
  return new LaunchRocketModelSelector()
}

export const launchRocketModelPrimitives = selectFromLaunchRocket().rocket_name.rocket_type
