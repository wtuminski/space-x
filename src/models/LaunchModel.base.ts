/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LaunchLinksModel, LaunchLinksModelType } from "./LaunchLinksModel"
import { LaunchLinksModelSelector } from "./LaunchLinksModel.base"
import { LaunchRocketModel, LaunchRocketModelType } from "./LaunchRocketModel"
import { LaunchRocketModelSelector } from "./LaunchRocketModel.base"
import { LaunchSiteModel, LaunchSiteModelType } from "./LaunchSiteModel"
import { LaunchSiteModelSelector } from "./LaunchSiteModel.base"
import { LaunchTelemetryModel, LaunchTelemetryModelType } from "./LaunchTelemetryModel"
import { LaunchTelemetryModelSelector } from "./LaunchTelemetryModel.base"
import { ShipModel, ShipModelType } from "./ShipModel"
import { ShipModelSelector } from "./ShipModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  ships: IObservableArray<ShipModelType>;
}

/**
 * LaunchBase
 * auto generated base class for the model LaunchModel.
 */
export const LaunchModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Launch')
  .props({
    __typename: types.optional(types.literal("Launch"), "Launch"),
    details: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    is_tentative: types.union(types.undefined, types.null, types.boolean),
    launch_date_local: types.union(types.undefined, types.null, types.frozen()),
    launch_date_unix: types.union(types.undefined, types.null, types.frozen()),
    launch_date_utc: types.union(types.undefined, types.null, types.frozen()),
    launch_site: types.union(types.undefined, types.null, types.late((): any => LaunchSiteModel)),
    launch_success: types.union(types.undefined, types.null, types.boolean),
    launch_year: types.union(types.undefined, types.null, types.string),
    links: types.union(types.undefined, types.null, types.late((): any => LaunchLinksModel)),
    mission_id: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    mission_name: types.union(types.undefined, types.null, types.string),
    rocket: types.union(types.undefined, types.null, types.late((): any => LaunchRocketModel)),
    static_fire_date_unix: types.union(types.undefined, types.null, types.frozen()),
    static_fire_date_utc: types.union(types.undefined, types.null, types.frozen()),
    telemetry: types.union(types.undefined, types.null, types.late((): any => LaunchTelemetryModel)),
    tentative_max_precision: types.union(types.undefined, types.null, types.string),
    upcoming: types.union(types.undefined, types.null, types.boolean),
    ships: types.union(types.undefined, types.null, types.array(types.union(types.null, MSTGQLRef(types.late((): any => ShipModel))))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LaunchModelSelector extends QueryBuilder {
  get details() { return this.__attr(`details`) }
  get id() { return this.__attr(`id`) }
  get is_tentative() { return this.__attr(`is_tentative`) }
  get launch_date_local() { return this.__attr(`launch_date_local`) }
  get launch_date_unix() { return this.__attr(`launch_date_unix`) }
  get launch_date_utc() { return this.__attr(`launch_date_utc`) }
  get launch_success() { return this.__attr(`launch_success`) }
  get launch_year() { return this.__attr(`launch_year`) }
  get mission_id() { return this.__attr(`mission_id`) }
  get mission_name() { return this.__attr(`mission_name`) }
  get static_fire_date_unix() { return this.__attr(`static_fire_date_unix`) }
  get static_fire_date_utc() { return this.__attr(`static_fire_date_utc`) }
  get tentative_max_precision() { return this.__attr(`tentative_max_precision`) }
  get upcoming() { return this.__attr(`upcoming`) }
  launch_site(builder?: string | LaunchSiteModelSelector | ((selector: LaunchSiteModelSelector) => LaunchSiteModelSelector)) { return this.__child(`launch_site`, LaunchSiteModelSelector, builder) }
  links(builder?: string | LaunchLinksModelSelector | ((selector: LaunchLinksModelSelector) => LaunchLinksModelSelector)) { return this.__child(`links`, LaunchLinksModelSelector, builder) }
  rocket(builder?: string | LaunchRocketModelSelector | ((selector: LaunchRocketModelSelector) => LaunchRocketModelSelector)) { return this.__child(`rocket`, LaunchRocketModelSelector, builder) }
  telemetry(builder?: string | LaunchTelemetryModelSelector | ((selector: LaunchTelemetryModelSelector) => LaunchTelemetryModelSelector)) { return this.__child(`telemetry`, LaunchTelemetryModelSelector, builder) }
  ships(builder?: string | ShipModelSelector | ((selector: ShipModelSelector) => ShipModelSelector)) { return this.__child(`ships`, ShipModelSelector, builder) }
}
export function selectFromLaunch() {
  return new LaunchModelSelector()
}

export const launchModelPrimitives = selectFromLaunch().details.is_tentative.launch_date_local.launch_date_unix.launch_date_utc.launch_success.launch_year.mission_id.mission_name.static_fire_date_unix.static_fire_date_utc.tentative_max_precision.upcoming
