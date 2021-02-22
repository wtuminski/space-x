/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ForceModel, ForceModelType } from "./ForceModel"
import { ForceModelSelector } from "./ForceModel.base"
import { RootStoreType } from "./index"


/**
 * RocketEnginesBase
 * auto generated base class for the model RocketEnginesModel.
 */
export const RocketEnginesModelBase = ModelBase
  .named('RocketEngines')
  .props({
    __typename: types.optional(types.literal("RocketEngines"), "RocketEngines"),
    number: types.union(types.undefined, types.null, types.integer),
    type: types.union(types.undefined, types.null, types.string),
    version: types.union(types.undefined, types.null, types.string),
    layout: types.union(types.undefined, types.null, types.string),
    engine_loss_max: types.union(types.undefined, types.null, types.string),
    propellant_1: types.union(types.undefined, types.null, types.string),
    propellant_2: types.union(types.undefined, types.null, types.string),
    thrust_sea_level: types.union(types.undefined, types.null, types.late((): any => ForceModel)),
    thrust_vacuum: types.union(types.undefined, types.null, types.late((): any => ForceModel)),
    thrust_to_weight: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RocketEnginesModelSelector extends QueryBuilder {
  get number() { return this.__attr(`number`) }
  get type() { return this.__attr(`type`) }
  get version() { return this.__attr(`version`) }
  get layout() { return this.__attr(`layout`) }
  get engine_loss_max() { return this.__attr(`engine_loss_max`) }
  get propellant_1() { return this.__attr(`propellant_1`) }
  get propellant_2() { return this.__attr(`propellant_2`) }
  get thrust_to_weight() { return this.__attr(`thrust_to_weight`) }
  thrust_sea_level(builder?: string | ForceModelSelector | ((selector: ForceModelSelector) => ForceModelSelector)) { return this.__child(`thrust_sea_level`, ForceModelSelector, builder) }
  thrust_vacuum(builder?: string | ForceModelSelector | ((selector: ForceModelSelector) => ForceModelSelector)) { return this.__child(`thrust_vacuum`, ForceModelSelector, builder) }
}
export function selectFromRocketEngines() {
  return new RocketEnginesModelSelector()
}

export const rocketEnginesModelPrimitives = selectFromRocketEngines().number.type.version.layout.engine_loss_max.propellant_1.propellant_2.thrust_to_weight
