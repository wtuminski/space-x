/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PayloadOrbitParamsModel, PayloadOrbitParamsModelType } from "./PayloadOrbitParamsModel"
import { PayloadOrbitParamsModelSelector } from "./PayloadOrbitParamsModel.base"
import { RootStoreType } from "./index"


/**
 * PayloadBase
 * auto generated base class for the model PayloadModel.
 */
export const PayloadModelBase = ModelBase
  .named('Payload')
  .props({
    __typename: types.optional(types.literal("Payload"), "Payload"),
    customers: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    id: types.identifier,
    manufacturer: types.union(types.undefined, types.null, types.string),
    nationality: types.union(types.undefined, types.null, types.string),
    norad_id: types.union(types.undefined, types.null, types.array(types.union(types.null, types.integer))),
    orbit_params: types.union(types.undefined, types.null, types.late((): any => PayloadOrbitParamsModel)),
    orbit: types.union(types.undefined, types.null, types.string),
    payload_mass_kg: types.union(types.undefined, types.null, types.number),
    payload_mass_lbs: types.union(types.undefined, types.null, types.number),
    payload_type: types.union(types.undefined, types.null, types.string),
    reused: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PayloadModelSelector extends QueryBuilder {
  get customers() { return this.__attr(`customers`) }
  get id() { return this.__attr(`id`) }
  get manufacturer() { return this.__attr(`manufacturer`) }
  get nationality() { return this.__attr(`nationality`) }
  get norad_id() { return this.__attr(`norad_id`) }
  get orbit() { return this.__attr(`orbit`) }
  get payload_mass_kg() { return this.__attr(`payload_mass_kg`) }
  get payload_mass_lbs() { return this.__attr(`payload_mass_lbs`) }
  get payload_type() { return this.__attr(`payload_type`) }
  get reused() { return this.__attr(`reused`) }
  orbit_params(builder?: string | PayloadOrbitParamsModelSelector | ((selector: PayloadOrbitParamsModelSelector) => PayloadOrbitParamsModelSelector)) { return this.__child(`orbit_params`, PayloadOrbitParamsModelSelector, builder) }
}
export function selectFromPayload() {
  return new PayloadModelSelector()
}

export const payloadModelPrimitives = selectFromPayload().customers.manufacturer.nationality.norad_id.orbit.payload_mass_kg.payload_mass_lbs.payload_type.reused
