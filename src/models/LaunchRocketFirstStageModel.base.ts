/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LaunchRocketFirstStageCoreModel, LaunchRocketFirstStageCoreModelType } from "./LaunchRocketFirstStageCoreModel"
import { LaunchRocketFirstStageCoreModelSelector } from "./LaunchRocketFirstStageCoreModel.base"
import { RootStoreType } from "./index"


/**
 * LaunchRocketFirstStageBase
 * auto generated base class for the model LaunchRocketFirstStageModel.
 */
export const LaunchRocketFirstStageModelBase = ModelBase
  .named('LaunchRocketFirstStage')
  .props({
    __typename: types.optional(types.literal("LaunchRocketFirstStage"), "LaunchRocketFirstStage"),
    cores: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => LaunchRocketFirstStageCoreModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class LaunchRocketFirstStageModelSelector extends QueryBuilder {
  cores(builder?: string | LaunchRocketFirstStageCoreModelSelector | ((selector: LaunchRocketFirstStageCoreModelSelector) => LaunchRocketFirstStageCoreModelSelector)) { return this.__child(`cores`, LaunchRocketFirstStageCoreModelSelector, builder) }
}
export function selectFromLaunchRocketFirstStage() {
  return new LaunchRocketFirstStageModelSelector()
}

export const launchRocketFirstStageModelPrimitives = selectFromLaunchRocketFirstStage()
