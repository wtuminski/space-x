/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * RoadsterBase
 * auto generated base class for the model RoadsterModel.
 */
export const RoadsterModelBase = ModelBase
  .named('Roadster')
  .props({
    __typename: types.optional(types.literal("Roadster"), "Roadster"),
    apoapsis_au: types.union(types.undefined, types.null, types.number),
    details: types.union(types.undefined, types.null, types.string),
    earth_distance_km: types.union(types.undefined, types.null, types.number),
    earth_distance_mi: types.union(types.undefined, types.null, types.number),
    eccentricity: types.union(types.undefined, types.null, types.number),
    epoch_jd: types.union(types.undefined, types.null, types.number),
    inclination: types.union(types.undefined, types.null, types.number),
    launch_date_unix: types.union(types.undefined, types.null, types.frozen()),
    launch_date_utc: types.union(types.undefined, types.null, types.frozen()),
    launch_mass_kg: types.union(types.undefined, types.null, types.integer),
    launch_mass_lbs: types.union(types.undefined, types.null, types.integer),
    longitude: types.union(types.undefined, types.null, types.number),
    mars_distance_km: types.union(types.undefined, types.null, types.number),
    mars_distance_mi: types.union(types.undefined, types.null, types.number),
    name: types.union(types.undefined, types.null, types.string),
    norad_id: types.union(types.undefined, types.null, types.integer),
    orbit_type: types.union(types.undefined, types.null, types.number),
    periapsis_arg: types.union(types.undefined, types.null, types.number),
    periapsis_au: types.union(types.undefined, types.null, types.number),
    period_days: types.union(types.undefined, types.null, types.number),
    semi_major_axis_au: types.union(types.undefined, types.null, types.number),
    speed_kph: types.union(types.undefined, types.null, types.number),
    speed_mph: types.union(types.undefined, types.null, types.number),
    wikipedia: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class RoadsterModelSelector extends QueryBuilder {
  get apoapsis_au() { return this.__attr(`apoapsis_au`) }
  get details() { return this.__attr(`details`) }
  get earth_distance_km() { return this.__attr(`earth_distance_km`) }
  get earth_distance_mi() { return this.__attr(`earth_distance_mi`) }
  get eccentricity() { return this.__attr(`eccentricity`) }
  get epoch_jd() { return this.__attr(`epoch_jd`) }
  get inclination() { return this.__attr(`inclination`) }
  get launch_date_unix() { return this.__attr(`launch_date_unix`) }
  get launch_date_utc() { return this.__attr(`launch_date_utc`) }
  get launch_mass_kg() { return this.__attr(`launch_mass_kg`) }
  get launch_mass_lbs() { return this.__attr(`launch_mass_lbs`) }
  get longitude() { return this.__attr(`longitude`) }
  get mars_distance_km() { return this.__attr(`mars_distance_km`) }
  get mars_distance_mi() { return this.__attr(`mars_distance_mi`) }
  get name() { return this.__attr(`name`) }
  get norad_id() { return this.__attr(`norad_id`) }
  get orbit_type() { return this.__attr(`orbit_type`) }
  get periapsis_arg() { return this.__attr(`periapsis_arg`) }
  get periapsis_au() { return this.__attr(`periapsis_au`) }
  get period_days() { return this.__attr(`period_days`) }
  get semi_major_axis_au() { return this.__attr(`semi_major_axis_au`) }
  get speed_kph() { return this.__attr(`speed_kph`) }
  get speed_mph() { return this.__attr(`speed_mph`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
}
export function selectFromRoadster() {
  return new RoadsterModelSelector()
}

export const roadsterModelPrimitives = selectFromRoadster().apoapsis_au.details.earth_distance_km.earth_distance_mi.eccentricity.epoch_jd.inclination.launch_date_unix.launch_date_utc.launch_mass_kg.launch_mass_lbs.longitude.mars_distance_km.mars_distance_mi.name.norad_id.orbit_type.periapsis_arg.periapsis_au.period_days.semi_major_axis_au.speed_kph.speed_mph.wikipedia
