/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { DistanceModel, DistanceModelType } from "./DistanceModel"
import { DistanceModelSelector } from "./DistanceModel.base"
import { MassModel, MassModelType } from "./MassModel"
import { MassModelSelector } from "./MassModel.base"
import { RocketEnginesModel, RocketEnginesModelType } from "./RocketEnginesModel"
import { RocketEnginesModelSelector } from "./RocketEnginesModel.base"
import { RocketFirstStageModel, RocketFirstStageModelType } from "./RocketFirstStageModel"
import { RocketFirstStageModelSelector } from "./RocketFirstStageModel.base"
import { RocketLandingLegsModel, RocketLandingLegsModelType } from "./RocketLandingLegsModel"
import { RocketLandingLegsModelSelector } from "./RocketLandingLegsModel.base"
import { RocketPayloadWeightModel, RocketPayloadWeightModelType } from "./RocketPayloadWeightModel"
import { RocketPayloadWeightModelSelector } from "./RocketPayloadWeightModel.base"
import { RocketSecondStageModel, RocketSecondStageModelType } from "./RocketSecondStageModel"
import { RocketSecondStageModelSelector } from "./RocketSecondStageModel.base"
import { RootStoreType } from "./index"


/**
 * RocketBase
 * auto generated base class for the model RocketModel.
 */
export const RocketModelBase = ModelBase
  .named('Rocket')
  .props({
    __typename: types.optional(types.literal("Rocket"), "Rocket"),
    active: types.union(types.undefined, types.null, types.boolean),
    boosters: types.union(types.undefined, types.null, types.integer),
    company: types.union(types.undefined, types.null, types.string),
    cost_per_launch: types.union(types.undefined, types.null, types.integer),
    country: types.union(types.undefined, types.null, types.string),
    description: types.union(types.undefined, types.null, types.string),
    diameter: types.union(types.undefined, types.null, types.late((): any => DistanceModel)),
    engines: types.union(types.undefined, types.null, types.late((): any => RocketEnginesModel)),
    first_flight: types.union(types.undefined, types.null, types.frozen()),
    first_stage: types.union(types.undefined, types.null, types.late((): any => RocketFirstStageModel)),
    height: types.union(types.undefined, types.null, types.late((): any => DistanceModel)),
    id: types.identifier,
    landing_legs: types.union(types.undefined, types.null, types.late((): any => RocketLandingLegsModel)),
    mass: types.union(types.undefined, types.null, types.late((): any => MassModel)),
    name: types.union(types.undefined, types.null, types.string),
    payload_weights: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => RocketPayloadWeightModel)))),
    second_stage: types.union(types.undefined, types.null, types.late((): any => RocketSecondStageModel)),
    stages: types.union(types.undefined, types.null, types.integer),
    success_rate_pct: types.union(types.undefined, types.null, types.integer),
    type: types.union(types.undefined, types.null, types.string),
    wikipedia: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketModelSelector extends QueryBuilder {
  get active() { return this.__attr(`active`) }
  get boosters() { return this.__attr(`boosters`) }
  get company() { return this.__attr(`company`) }
  get cost_per_launch() { return this.__attr(`cost_per_launch`) }
  get country() { return this.__attr(`country`) }
  get description() { return this.__attr(`description`) }
  get first_flight() { return this.__attr(`first_flight`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get stages() { return this.__attr(`stages`) }
  get success_rate_pct() { return this.__attr(`success_rate_pct`) }
  get type() { return this.__attr(`type`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
  diameter(builder?: string | DistanceModelSelector | ((selector: DistanceModelSelector) => DistanceModelSelector)) { return this.__child(`diameter`, DistanceModelSelector, builder) }
  engines(builder?: string | RocketEnginesModelSelector | ((selector: RocketEnginesModelSelector) => RocketEnginesModelSelector)) { return this.__child(`engines`, RocketEnginesModelSelector, builder) }
  first_stage(builder?: string | RocketFirstStageModelSelector | ((selector: RocketFirstStageModelSelector) => RocketFirstStageModelSelector)) { return this.__child(`first_stage`, RocketFirstStageModelSelector, builder) }
  height(builder?: string | DistanceModelSelector | ((selector: DistanceModelSelector) => DistanceModelSelector)) { return this.__child(`height`, DistanceModelSelector, builder) }
  landing_legs(builder?: string | RocketLandingLegsModelSelector | ((selector: RocketLandingLegsModelSelector) => RocketLandingLegsModelSelector)) { return this.__child(`landing_legs`, RocketLandingLegsModelSelector, builder) }
  mass(builder?: string | MassModelSelector | ((selector: MassModelSelector) => MassModelSelector)) { return this.__child(`mass`, MassModelSelector, builder) }
  payload_weights(builder?: string | RocketPayloadWeightModelSelector | ((selector: RocketPayloadWeightModelSelector) => RocketPayloadWeightModelSelector)) { return this.__child(`payload_weights`, RocketPayloadWeightModelSelector, builder) }
  second_stage(builder?: string | RocketSecondStageModelSelector | ((selector: RocketSecondStageModelSelector) => RocketSecondStageModelSelector)) { return this.__child(`second_stage`, RocketSecondStageModelSelector, builder) }
}
export function selectFromRocket() {
  return new RocketModelSelector()
}

export const rocketModelPrimitives = selectFromRocket().active.boosters.company.cost_per_launch.country.description.first_flight.name.stages.success_rate_pct.type.wikipedia
