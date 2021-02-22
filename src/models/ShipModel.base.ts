/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ShipLocationModel, ShipLocationModelType } from "./ShipLocationModel"
import { ShipLocationModelSelector } from "./ShipLocationModel.base"
import { ShipMissionModel, ShipMissionModelType } from "./ShipMissionModel"
import { ShipMissionModelSelector } from "./ShipMissionModel.base"
import { RootStoreType } from "./index"


/**
 * ShipBase
 * auto generated base class for the model ShipModel.
 */
export const ShipModelBase = ModelBase
  .named('Ship')
  .props({
    __typename: types.optional(types.literal("Ship"), "Ship"),
    abs: types.union(types.undefined, types.null, types.integer),
    active: types.union(types.undefined, types.null, types.boolean),
    attempted_landings: types.union(types.undefined, types.null, types.integer),
    class: types.union(types.undefined, types.null, types.integer),
    course_deg: types.union(types.undefined, types.null, types.integer),
    home_port: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    image: types.union(types.undefined, types.null, types.string),
    imo: types.union(types.undefined, types.null, types.integer),
    missions: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => ShipMissionModel)))),
    mmsi: types.union(types.undefined, types.null, types.integer),
    model: types.union(types.undefined, types.null, types.string),
    name: types.union(types.undefined, types.null, types.string),
    position: types.union(types.undefined, types.null, types.late((): any => ShipLocationModel)),
    roles: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    speed_kn: types.union(types.undefined, types.null, types.number),
    status: types.union(types.undefined, types.null, types.string),
    successful_landings: types.union(types.undefined, types.null, types.integer),
    type: types.union(types.undefined, types.null, types.string),
    url: types.union(types.undefined, types.null, types.string),
    weight_kg: types.union(types.undefined, types.null, types.integer),
    weight_lbs: types.union(types.undefined, types.null, types.integer),
    year_built: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class ShipModelSelector extends QueryBuilder {
  get abs() { return this.__attr(`abs`) }
  get active() { return this.__attr(`active`) }
  get attempted_landings() { return this.__attr(`attempted_landings`) }
  get class() { return this.__attr(`class`) }
  get course_deg() { return this.__attr(`course_deg`) }
  get home_port() { return this.__attr(`home_port`) }
  get id() { return this.__attr(`id`) }
  get image() { return this.__attr(`image`) }
  get imo() { return this.__attr(`imo`) }
  get mmsi() { return this.__attr(`mmsi`) }
  get model() { return this.__attr(`model`) }
  get name() { return this.__attr(`name`) }
  get roles() { return this.__attr(`roles`) }
  get speed_kn() { return this.__attr(`speed_kn`) }
  get status() { return this.__attr(`status`) }
  get successful_landings() { return this.__attr(`successful_landings`) }
  get type() { return this.__attr(`type`) }
  get url() { return this.__attr(`url`) }
  get weight_kg() { return this.__attr(`weight_kg`) }
  get weight_lbs() { return this.__attr(`weight_lbs`) }
  get year_built() { return this.__attr(`year_built`) }
  missions(builder?: string | ShipMissionModelSelector | ((selector: ShipMissionModelSelector) => ShipMissionModelSelector)) { return this.__child(`missions`, ShipMissionModelSelector, builder) }
  position(builder?: string | ShipLocationModelSelector | ((selector: ShipLocationModelSelector) => ShipLocationModelSelector)) { return this.__child(`position`, ShipLocationModelSelector, builder) }
}
export function selectFromShip() {
  return new ShipModelSelector()
}

export const shipModelPrimitives = selectFromShip().abs.active.attempted_landings.class.course_deg.home_port.image.imo.mmsi.model.name.roles.speed_kn.status.successful_landings.type.url.weight_kg.weight_lbs.year_built
