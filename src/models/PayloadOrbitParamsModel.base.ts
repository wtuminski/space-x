/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PayloadOrbitParamsBase
 * auto generated base class for the model PayloadOrbitParamsModel.
 */
export const PayloadOrbitParamsModelBase = ModelBase
  .named('PayloadOrbitParams')
  .props({
    __typename: types.optional(types.literal("PayloadOrbitParams"), "PayloadOrbitParams"),
    apoapsis_km: types.union(types.undefined, types.null, types.number),
    arg_of_pericenter: types.union(types.undefined, types.null, types.number),
    eccentricity: types.union(types.undefined, types.null, types.number),
    epoch: types.union(types.undefined, types.null, types.frozen()),
    inclination_deg: types.union(types.undefined, types.null, types.number),
    lifespan_years: types.union(types.undefined, types.null, types.number),
    longitude: types.union(types.undefined, types.null, types.number),
    mean_anomaly: types.union(types.undefined, types.null, types.number),
    mean_motion: types.union(types.undefined, types.null, types.number),
    periapsis_km: types.union(types.undefined, types.null, types.number),
    period_min: types.union(types.undefined, types.null, types.number),
    raan: types.union(types.undefined, types.null, types.number),
    reference_system: types.union(types.undefined, types.null, types.string),
    regime: types.union(types.undefined, types.null, types.string),
    semi_major_axis_km: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PayloadOrbitParamsModelSelector extends QueryBuilder {
  get apoapsis_km() { return this.__attr(`apoapsis_km`) }
  get arg_of_pericenter() { return this.__attr(`arg_of_pericenter`) }
  get eccentricity() { return this.__attr(`eccentricity`) }
  get epoch() { return this.__attr(`epoch`) }
  get inclination_deg() { return this.__attr(`inclination_deg`) }
  get lifespan_years() { return this.__attr(`lifespan_years`) }
  get longitude() { return this.__attr(`longitude`) }
  get mean_anomaly() { return this.__attr(`mean_anomaly`) }
  get mean_motion() { return this.__attr(`mean_motion`) }
  get periapsis_km() { return this.__attr(`periapsis_km`) }
  get period_min() { return this.__attr(`period_min`) }
  get raan() { return this.__attr(`raan`) }
  get reference_system() { return this.__attr(`reference_system`) }
  get regime() { return this.__attr(`regime`) }
  get semi_major_axis_km() { return this.__attr(`semi_major_axis_km`) }
}
export function selectFromPayloadOrbitParams() {
  return new PayloadOrbitParamsModelSelector()
}

export const payloadOrbitParamsModelPrimitives = selectFromPayloadOrbitParams().apoapsis_km.arg_of_pericenter.eccentricity.epoch.inclination_deg.lifespan_years.longitude.mean_anomaly.mean_motion.periapsis_km.period_min.raan.reference_system.regime.semi_major_axis_km
