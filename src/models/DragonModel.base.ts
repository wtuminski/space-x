/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { DistanceModel, DistanceModelType } from "./DistanceModel"
import { DistanceModelSelector } from "./DistanceModel.base"
import { DragonHeatShieldModel, DragonHeatShieldModelType } from "./DragonHeatShieldModel"
import { DragonHeatShieldModelSelector } from "./DragonHeatShieldModel.base"
import { DragonPressurizedCapsuleModel, DragonPressurizedCapsuleModelType } from "./DragonPressurizedCapsuleModel"
import { DragonPressurizedCapsuleModelSelector } from "./DragonPressurizedCapsuleModel.base"
import { DragonThrustModel, DragonThrustModelType } from "./DragonThrustModel"
import { DragonThrustModelSelector } from "./DragonThrustModel.base"
import { DragonTrunkModel, DragonTrunkModelType } from "./DragonTrunkModel"
import { DragonTrunkModelSelector } from "./DragonTrunkModel.base"
import { MassModel, MassModelType } from "./MassModel"
import { MassModelSelector } from "./MassModel.base"
import { VolumeModel, VolumeModelType } from "./VolumeModel"
import { VolumeModelSelector } from "./VolumeModel.base"
import { RootStoreType } from "./index"


/**
 * DragonBase
 * auto generated base class for the model DragonModel.
 */
export const DragonModelBase = ModelBase
  .named('Dragon')
  .props({
    __typename: types.optional(types.literal("Dragon"), "Dragon"),
    active: types.union(types.undefined, types.null, types.boolean),
    crew_capacity: types.union(types.undefined, types.null, types.integer),
    description: types.union(types.undefined, types.null, types.string),
    diameter: types.union(types.undefined, types.null, types.late((): any => DistanceModel)),
    dry_mass_kg: types.union(types.undefined, types.null, types.integer),
    dry_mass_lb: types.union(types.undefined, types.null, types.integer),
    first_flight: types.union(types.undefined, types.null, types.string),
    heat_shield: types.union(types.undefined, types.null, types.late((): any => DragonHeatShieldModel)),
    height_w_trunk: types.union(types.undefined, types.null, types.late((): any => DistanceModel)),
    id: types.identifier,
    launch_payload_mass: types.union(types.undefined, types.null, types.late((): any => MassModel)),
    launch_payload_vol: types.union(types.undefined, types.null, types.late((): any => VolumeModel)),
    name: types.union(types.undefined, types.null, types.string),
    orbit_duration_yr: types.union(types.undefined, types.null, types.integer),
    pressurized_capsule: types.union(types.undefined, types.null, types.late((): any => DragonPressurizedCapsuleModel)),
    return_payload_mass: types.union(types.undefined, types.null, types.late((): any => MassModel)),
    return_payload_vol: types.union(types.undefined, types.null, types.late((): any => VolumeModel)),
    sidewall_angle_deg: types.union(types.undefined, types.null, types.number),
    thrusters: types.union(types.undefined, types.null, types.array(types.union(types.null, types.late((): any => DragonThrustModel)))),
    trunk: types.union(types.undefined, types.null, types.late((): any => DragonTrunkModel)),
    type: types.union(types.undefined, types.null, types.string),
    wikipedia: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class DragonModelSelector extends QueryBuilder {
  get active() { return this.__attr(`active`) }
  get crew_capacity() { return this.__attr(`crew_capacity`) }
  get description() { return this.__attr(`description`) }
  get dry_mass_kg() { return this.__attr(`dry_mass_kg`) }
  get dry_mass_lb() { return this.__attr(`dry_mass_lb`) }
  get first_flight() { return this.__attr(`first_flight`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get orbit_duration_yr() { return this.__attr(`orbit_duration_yr`) }
  get sidewall_angle_deg() { return this.__attr(`sidewall_angle_deg`) }
  get type() { return this.__attr(`type`) }
  get wikipedia() { return this.__attr(`wikipedia`) }
  diameter(builder?: string | DistanceModelSelector | ((selector: DistanceModelSelector) => DistanceModelSelector)) { return this.__child(`diameter`, DistanceModelSelector, builder) }
  heat_shield(builder?: string | DragonHeatShieldModelSelector | ((selector: DragonHeatShieldModelSelector) => DragonHeatShieldModelSelector)) { return this.__child(`heat_shield`, DragonHeatShieldModelSelector, builder) }
  height_w_trunk(builder?: string | DistanceModelSelector | ((selector: DistanceModelSelector) => DistanceModelSelector)) { return this.__child(`height_w_trunk`, DistanceModelSelector, builder) }
  launch_payload_mass(builder?: string | MassModelSelector | ((selector: MassModelSelector) => MassModelSelector)) { return this.__child(`launch_payload_mass`, MassModelSelector, builder) }
  launch_payload_vol(builder?: string | VolumeModelSelector | ((selector: VolumeModelSelector) => VolumeModelSelector)) { return this.__child(`launch_payload_vol`, VolumeModelSelector, builder) }
  pressurized_capsule(builder?: string | DragonPressurizedCapsuleModelSelector | ((selector: DragonPressurizedCapsuleModelSelector) => DragonPressurizedCapsuleModelSelector)) { return this.__child(`pressurized_capsule`, DragonPressurizedCapsuleModelSelector, builder) }
  return_payload_mass(builder?: string | MassModelSelector | ((selector: MassModelSelector) => MassModelSelector)) { return this.__child(`return_payload_mass`, MassModelSelector, builder) }
  return_payload_vol(builder?: string | VolumeModelSelector | ((selector: VolumeModelSelector) => VolumeModelSelector)) { return this.__child(`return_payload_vol`, VolumeModelSelector, builder) }
  thrusters(builder?: string | DragonThrustModelSelector | ((selector: DragonThrustModelSelector) => DragonThrustModelSelector)) { return this.__child(`thrusters`, DragonThrustModelSelector, builder) }
  trunk(builder?: string | DragonTrunkModelSelector | ((selector: DragonTrunkModelSelector) => DragonTrunkModelSelector)) { return this.__child(`trunk`, DragonTrunkModelSelector, builder) }
}
export function selectFromDragon() {
  return new DragonModelSelector()
}

export const dragonModelPrimitives = selectFromDragon().active.crew_capacity.description.dry_mass_kg.dry_mass_lb.first_flight.name.orbit_duration_yr.sidewall_angle_deg.type.wikipedia
