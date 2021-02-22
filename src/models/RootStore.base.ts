/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { UsersModel, UsersModelType } from "./UsersModel"
import { usersModelPrimitives, UsersModelSelector } from "./UsersModel.base"
import { UsersAggregateModel, UsersAggregateModelType } from "./UsersAggregateModel"
import { usersAggregateModelPrimitives, UsersAggregateModelSelector } from "./UsersAggregateModel.base"
import { UsersAggregateFieldsModel, UsersAggregateFieldsModelType } from "./UsersAggregateFieldsModel"
import { usersAggregateFieldsModelPrimitives, UsersAggregateFieldsModelSelector } from "./UsersAggregateFieldsModel.base"
import { UsersMaxFieldsModel, UsersMaxFieldsModelType } from "./UsersMaxFieldsModel"
import { usersMaxFieldsModelPrimitives, UsersMaxFieldsModelSelector } from "./UsersMaxFieldsModel.base"
import { UsersMinFieldsModel, UsersMinFieldsModelType } from "./UsersMinFieldsModel"
import { usersMinFieldsModelPrimitives, UsersMinFieldsModelSelector } from "./UsersMinFieldsModel.base"
import { CapsuleModel, CapsuleModelType } from "./CapsuleModel"
import { capsuleModelPrimitives, CapsuleModelSelector } from "./CapsuleModel.base"
import { CapsuleMissionModel, CapsuleMissionModelType } from "./CapsuleMissionModel"
import { capsuleMissionModelPrimitives, CapsuleMissionModelSelector } from "./CapsuleMissionModel.base"
import { DragonModel, DragonModelType } from "./DragonModel"
import { dragonModelPrimitives, DragonModelSelector } from "./DragonModel.base"
import { DistanceModel, DistanceModelType } from "./DistanceModel"
import { distanceModelPrimitives, DistanceModelSelector } from "./DistanceModel.base"
import { DragonHeatShieldModel, DragonHeatShieldModelType } from "./DragonHeatShieldModel"
import { dragonHeatShieldModelPrimitives, DragonHeatShieldModelSelector } from "./DragonHeatShieldModel.base"
import { MassModel, MassModelType } from "./MassModel"
import { massModelPrimitives, MassModelSelector } from "./MassModel.base"
import { VolumeModel, VolumeModelType } from "./VolumeModel"
import { volumeModelPrimitives, VolumeModelSelector } from "./VolumeModel.base"
import { DragonPressurizedCapsuleModel, DragonPressurizedCapsuleModelType } from "./DragonPressurizedCapsuleModel"
import { dragonPressurizedCapsuleModelPrimitives, DragonPressurizedCapsuleModelSelector } from "./DragonPressurizedCapsuleModel.base"
import { DragonThrustModel, DragonThrustModelType } from "./DragonThrustModel"
import { dragonThrustModelPrimitives, DragonThrustModelSelector } from "./DragonThrustModel.base"
import { ForceModel, ForceModelType } from "./ForceModel"
import { forceModelPrimitives, ForceModelSelector } from "./ForceModel.base"
import { DragonTrunkModel, DragonTrunkModelType } from "./DragonTrunkModel"
import { dragonTrunkModelPrimitives, DragonTrunkModelSelector } from "./DragonTrunkModel.base"
import { DragonTrunkCargoModel, DragonTrunkCargoModelType } from "./DragonTrunkCargoModel"
import { dragonTrunkCargoModelPrimitives, DragonTrunkCargoModelSelector } from "./DragonTrunkCargoModel.base"
import { InfoModel, InfoModelType } from "./InfoModel"
import { infoModelPrimitives, InfoModelSelector } from "./InfoModel.base"
import { AddressModel, AddressModelType } from "./AddressModel"
import { addressModelPrimitives, AddressModelSelector } from "./AddressModel.base"
import { InfoLinksModel, InfoLinksModelType } from "./InfoLinksModel"
import { infoLinksModelPrimitives, InfoLinksModelSelector } from "./InfoLinksModel.base"
import { CoreModel, CoreModelType } from "./CoreModel"
import { coreModelPrimitives, CoreModelSelector } from "./CoreModel.base"
import { HistoryModel, HistoryModelType } from "./HistoryModel"
import { historyModelPrimitives, HistoryModelSelector } from "./HistoryModel.base"
import { LinkModel, LinkModelType } from "./LinkModel"
import { linkModelPrimitives, LinkModelSelector } from "./LinkModel.base"
import { LaunchModel, LaunchModelType } from "./LaunchModel"
import { launchModelPrimitives, LaunchModelSelector } from "./LaunchModel.base"
import { LaunchSiteModel, LaunchSiteModelType } from "./LaunchSiteModel"
import { launchSiteModelPrimitives, LaunchSiteModelSelector } from "./LaunchSiteModel.base"
import { LaunchLinksModel, LaunchLinksModelType } from "./LaunchLinksModel"
import { launchLinksModelPrimitives, LaunchLinksModelSelector } from "./LaunchLinksModel.base"
import { LaunchRocketModel, LaunchRocketModelType } from "./LaunchRocketModel"
import { launchRocketModelPrimitives, LaunchRocketModelSelector } from "./LaunchRocketModel.base"
import { LaunchRocketFairingsModel, LaunchRocketFairingsModelType } from "./LaunchRocketFairingsModel"
import { launchRocketFairingsModelPrimitives, LaunchRocketFairingsModelSelector } from "./LaunchRocketFairingsModel.base"
import { LaunchRocketFirstStageModel, LaunchRocketFirstStageModelType } from "./LaunchRocketFirstStageModel"
import { launchRocketFirstStageModelPrimitives, LaunchRocketFirstStageModelSelector } from "./LaunchRocketFirstStageModel.base"
import { LaunchRocketFirstStageCoreModel, LaunchRocketFirstStageCoreModelType } from "./LaunchRocketFirstStageCoreModel"
import { launchRocketFirstStageCoreModelPrimitives, LaunchRocketFirstStageCoreModelSelector } from "./LaunchRocketFirstStageCoreModel.base"
import { RocketModel, RocketModelType } from "./RocketModel"
import { rocketModelPrimitives, RocketModelSelector } from "./RocketModel.base"
import { RocketEnginesModel, RocketEnginesModelType } from "./RocketEnginesModel"
import { rocketEnginesModelPrimitives, RocketEnginesModelSelector } from "./RocketEnginesModel.base"
import { RocketFirstStageModel, RocketFirstStageModelType } from "./RocketFirstStageModel"
import { rocketFirstStageModelPrimitives, RocketFirstStageModelSelector } from "./RocketFirstStageModel.base"
import { RocketLandingLegsModel, RocketLandingLegsModelType } from "./RocketLandingLegsModel"
import { rocketLandingLegsModelPrimitives, RocketLandingLegsModelSelector } from "./RocketLandingLegsModel.base"
import { RocketPayloadWeightModel, RocketPayloadWeightModelType } from "./RocketPayloadWeightModel"
import { rocketPayloadWeightModelPrimitives, RocketPayloadWeightModelSelector } from "./RocketPayloadWeightModel.base"
import { RocketSecondStageModel, RocketSecondStageModelType } from "./RocketSecondStageModel"
import { rocketSecondStageModelPrimitives, RocketSecondStageModelSelector } from "./RocketSecondStageModel.base"
import { RocketSecondStagePayloadsModel, RocketSecondStagePayloadsModelType } from "./RocketSecondStagePayloadsModel"
import { rocketSecondStagePayloadsModelPrimitives, RocketSecondStagePayloadsModelSelector } from "./RocketSecondStagePayloadsModel.base"
import { RocketSecondStagePayloadCompositeFairingModel, RocketSecondStagePayloadCompositeFairingModelType } from "./RocketSecondStagePayloadCompositeFairingModel"
import { rocketSecondStagePayloadCompositeFairingModelPrimitives, RocketSecondStagePayloadCompositeFairingModelSelector } from "./RocketSecondStagePayloadCompositeFairingModel.base"
import { LaunchRocketSecondStageModel, LaunchRocketSecondStageModelType } from "./LaunchRocketSecondStageModel"
import { launchRocketSecondStageModelPrimitives, LaunchRocketSecondStageModelSelector } from "./LaunchRocketSecondStageModel.base"
import { PayloadModel, PayloadModelType } from "./PayloadModel"
import { payloadModelPrimitives, PayloadModelSelector } from "./PayloadModel.base"
import { PayloadOrbitParamsModel, PayloadOrbitParamsModelType } from "./PayloadOrbitParamsModel"
import { payloadOrbitParamsModelPrimitives, PayloadOrbitParamsModelSelector } from "./PayloadOrbitParamsModel.base"
import { LaunchTelemetryModel, LaunchTelemetryModelType } from "./LaunchTelemetryModel"
import { launchTelemetryModelPrimitives, LaunchTelemetryModelSelector } from "./LaunchTelemetryModel.base"
import { ShipModel, ShipModelType } from "./ShipModel"
import { shipModelPrimitives, ShipModelSelector } from "./ShipModel.base"
import { ShipMissionModel, ShipMissionModelType } from "./ShipMissionModel"
import { shipMissionModelPrimitives, ShipMissionModelSelector } from "./ShipMissionModel.base"
import { ShipLocationModel, ShipLocationModelType } from "./ShipLocationModel"
import { shipLocationModelPrimitives, ShipLocationModelSelector } from "./ShipLocationModel.base"
import { HistoriesResultModel, HistoriesResultModelType } from "./HistoriesResultModel"
import { historiesResultModelPrimitives, HistoriesResultModelSelector } from "./HistoriesResultModel.base"
import { ResultModel, ResultModelType } from "./ResultModel"
import { resultModelPrimitives, ResultModelSelector } from "./ResultModel.base"
import { LandpadModel, LandpadModelType } from "./LandpadModel"
import { landpadModelPrimitives, LandpadModelSelector } from "./LandpadModel.base"
import { LocationModel, LocationModelType } from "./LocationModel"
import { locationModelPrimitives, LocationModelSelector } from "./LocationModel.base"
import { LaunchesPastResultModel, LaunchesPastResultModelType } from "./LaunchesPastResultModel"
import { launchesPastResultModelPrimitives, LaunchesPastResultModelSelector } from "./LaunchesPastResultModel.base"
import { LaunchpadModel, LaunchpadModelType } from "./LaunchpadModel"
import { launchpadModelPrimitives, LaunchpadModelSelector } from "./LaunchpadModel.base"
import { MissionModel, MissionModelType } from "./MissionModel"
import { missionModelPrimitives, MissionModelSelector } from "./MissionModel.base"
import { MissionResultModel, MissionResultModelType } from "./MissionResultModel"
import { missionResultModelPrimitives, MissionResultModelSelector } from "./MissionResultModel.base"
import { RoadsterModel, RoadsterModelType } from "./RoadsterModel"
import { roadsterModelPrimitives, RoadsterModelSelector } from "./RoadsterModel.base"
import { RocketsResultModel, RocketsResultModelType } from "./RocketsResultModel"
import { rocketsResultModelPrimitives, RocketsResultModelSelector } from "./RocketsResultModel.base"
import { ShipsResultModel, ShipsResultModelType } from "./ShipsResultModel"
import { shipsResultModelPrimitives, ShipsResultModelSelector } from "./ShipsResultModel.base"
import { UsersMutationResponseModel, UsersMutationResponseModelType } from "./UsersMutationResponseModel"
import { usersMutationResponseModelPrimitives, UsersMutationResponseModelSelector } from "./UsersMutationResponseModel.base"
import { CoreMissionModel, CoreMissionModelType } from "./CoreMissionModel"
import { coreMissionModelPrimitives, CoreMissionModelSelector } from "./CoreMissionModel.base"


import { UsersSelectColumn } from "./UsersSelectColumnEnum"
import { OrderBy } from "./OrderByEnum"
import { UsersConstraint } from "./UsersConstraintEnum"
import { UsersUpdateColumn } from "./UsersUpdateColumnEnum"
import { ConflictAction } from "./ConflictActionEnum"

export type UsersOrderBy = {
  id?: OrderBy
  name?: OrderBy
  rocket?: OrderBy
  timestamp?: OrderBy
  twitter?: OrderBy
}
export type UsersBoolExp = {
  _and?: UsersBoolExp[]
  _not?: UsersBoolExp
  _or?: UsersBoolExp[]
  id?: UuidComparisonExp
  name?: StringComparisonExp
  rocket?: StringComparisonExp
  timestamp?: TimestamptzComparisonExp
  twitter?: StringComparisonExp
}
export type UuidComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type StringComparisonExp = {
  _eq?: string
  _gt?: string
  _gte?: string
  _ilike?: string
  _in?: string[]
  _is_null?: boolean
  _like?: string
  _lt?: string
  _lte?: string
  _neq?: string
  _nilike?: string
  _nin?: string[]
  _nlike?: string
  _nsimilar?: string
  _similar?: string
}
export type TimestamptzComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type CapsulesFind = {
  id?: string
  landings?: number
  mission?: string
  original_launch?: any
  reuse_count?: number
  status?: string
  type?: string
}
export type CoresFind = {
  asds_attempts?: number
  asds_landings?: number
  block?: number
  id?: string
  missions?: string
  original_launch?: any
  reuse_count?: number
  rtls_attempts?: number
  rtls_landings?: number
  status?: string
  water_landing?: boolean
}
export type HistoryFind = {
  end?: any
  flight_number?: number
  id?: string
  start?: any
}
export type LaunchFind = {
  apoapsis_km?: number
  block?: number
  cap_serial?: string
  capsule_reuse?: string
  core_flight?: number
  core_reuse?: string
  core_serial?: string
  customer?: string
  eccentricity?: number
  end?: any
  epoch?: any
  fairings_recovered?: string
  fairings_recovery_attempt?: string
  fairings_reuse?: string
  fairings_reused?: string
  fairings_ship?: string
  gridfins?: string
  id?: string
  inclination_deg?: number
  land_success?: string
  landing_intent?: string
  landing_type?: string
  landing_vehicle?: string
  launch_date_local?: any
  launch_date_utc?: any
  launch_success?: string
  launch_year?: string
  legs?: string
  lifespan_years?: number
  longitude?: number
  manufacturer?: string
  mean_motion?: number
  mission_id?: string
  mission_name?: string
  nationality?: string
  norad_id?: number
  orbit?: string
  payload_id?: string
  payload_type?: string
  periapsis_km?: number
  period_min?: number
  raan?: number
  reference_system?: string
  regime?: string
  reused?: string
  rocket_id?: string
  rocket_name?: string
  rocket_type?: string
  second_stage_block?: string
  semi_major_axis_km?: number
  ship?: string
  side_core1_reuse?: string
  side_core2_reuse?: string
  site_id?: string
  site_name_long?: string
  site_name?: string
  start?: any
  tbd?: string
  tentative_max_precision?: string
  tentative?: string
}
export type MissionsFind = {
  id?: string
  manufacturer?: string
  name?: string
  payload_id?: string
}
export type PayloadsFind = {
  apoapsis_km?: number
  customer?: string
  eccentricity?: number
  epoch?: any
  inclination_deg?: number
  lifespan_years?: number
  longitude?: number
  manufacturer?: string
  mean_motion?: number
  nationality?: string
  norad_id?: number
  orbit?: string
  payload_id?: string
  payload_type?: string
  periapsis_km?: number
  period_min?: number
  raan?: number
  reference_system?: string
  regime?: string
  reused?: boolean
  semi_major_axis_km?: number
}
export type ShipsFind = {
  id?: string
  name?: string
  model?: string
  type?: string
  role?: string
  active?: boolean
  imo?: number
  mmsi?: number
  abs?: number
  class?: number
  weight_lbs?: number
  weight_kg?: number
  year_built?: number
  home_port?: string
  status?: string
  speed_kn?: number
  course_deg?: number
  latitude?: number
  longitude?: number
  successful_landings?: number
  attempted_landings?: number
  mission?: string
}
export type UsersInsertInput = {
  id?: any
  name?: string
  rocket?: string
  timestamp?: any
  twitter?: string
}
export type UsersOnConflict = {
  constraint: UsersConstraint
  update_columns: UsersUpdateColumn[]
}
export type UsersSetInput = {
  id?: any
  name?: string
  rocket?: string
  timestamp?: any
  twitter?: string
}
export type UsersAggregateOrderBy = {
  count?: OrderBy
  max?: UsersMaxOrderBy
  min?: UsersMinOrderBy
}
export type UsersMaxOrderBy = {
  name?: OrderBy
  rocket?: OrderBy
  timestamp?: OrderBy
  twitter?: OrderBy
}
export type UsersMinOrderBy = {
  name?: OrderBy
  rocket?: OrderBy
  timestamp?: OrderBy
  twitter?: OrderBy
}
export type UsersArrRelInsertInput = {
  data: UsersInsertInput[]
  on_conflict?: UsersOnConflict
}
export type UsersObjRelInsertInput = {
  data: UsersInsertInput
  on_conflict?: UsersOnConflict
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  capsules: ObservableMap<string, CapsuleModelType>,
  dragons: ObservableMap<string, DragonModelType>,
  cores: ObservableMap<string, CoreModelType>,
  histories: ObservableMap<string, HistoryModelType>,
  launches: ObservableMap<string, LaunchModelType>,
  rockets: ObservableMap<string, RocketModelType>,
  payloads: ObservableMap<string, PayloadModelType>,
  ships: ObservableMap<string, ShipModelType>,
  landpads: ObservableMap<string, LandpadModelType>,
  launchpads: ObservableMap<string, LaunchpadModelType>,
  missions: ObservableMap<string, MissionModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryUsers="queryUsers",
queryUsers_aggregate="queryUsers_aggregate",
queryUsers_by_pk="queryUsers_by_pk",
queryCapsules="queryCapsules",
queryCapsulesPast="queryCapsulesPast",
queryCapsulesUpcoming="queryCapsulesUpcoming",
queryCapsule="queryCapsule",
queryCompany="queryCompany",
queryCores="queryCores",
queryCoresPast="queryCoresPast",
queryCoresUpcoming="queryCoresUpcoming",
queryCore="queryCore",
queryDragons="queryDragons",
queryDragon="queryDragon",
queryHistories="queryHistories",
queryHistoriesResult="queryHistoriesResult",
queryHistory="queryHistory",
queryLandpads="queryLandpads",
queryLandpad="queryLandpad",
queryLaunches="queryLaunches",
queryLaunchesPast="queryLaunchesPast",
queryLaunchesPastResult="queryLaunchesPastResult",
queryLaunchesUpcoming="queryLaunchesUpcoming",
queryLaunch="queryLaunch",
queryLaunchLatest="queryLaunchLatest",
queryLaunchNext="queryLaunchNext",
queryLaunchpads="queryLaunchpads",
queryLaunchpad="queryLaunchpad",
queryMissions="queryMissions",
queryMissionsResult="queryMissionsResult",
queryMission="queryMission",
queryPayloads="queryPayloads",
queryPayload="queryPayload",
queryRoadster="queryRoadster",
queryRockets="queryRockets",
queryRocketsResult="queryRocketsResult",
queryRocket="queryRocket",
queryShips="queryShips",
queryShipsResult="queryShipsResult",
queryShip="queryShip"
}
export enum RootStoreBaseMutations {
mutateDelete_users="mutateDelete_users",
mutateInsert_users="mutateInsert_users",
mutateUpdate_users="mutateUpdate_users"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['users', () => UsersModel], ['users_aggregate', () => UsersAggregateModel], ['users_aggregate_fields', () => UsersAggregateFieldsModel], ['users_max_fields', () => UsersMaxFieldsModel], ['users_min_fields', () => UsersMinFieldsModel], ['Capsule', () => CapsuleModel], ['CapsuleMission', () => CapsuleMissionModel], ['Dragon', () => DragonModel], ['Distance', () => DistanceModel], ['DragonHeatShield', () => DragonHeatShieldModel], ['Mass', () => MassModel], ['Volume', () => VolumeModel], ['DragonPressurizedCapsule', () => DragonPressurizedCapsuleModel], ['DragonThrust', () => DragonThrustModel], ['Force', () => ForceModel], ['DragonTrunk', () => DragonTrunkModel], ['DragonTrunkCargo', () => DragonTrunkCargoModel], ['Info', () => InfoModel], ['Address', () => AddressModel], ['InfoLinks', () => InfoLinksModel], ['Core', () => CoreModel], ['History', () => HistoryModel], ['Link', () => LinkModel], ['Launch', () => LaunchModel], ['LaunchSite', () => LaunchSiteModel], ['LaunchLinks', () => LaunchLinksModel], ['LaunchRocket', () => LaunchRocketModel], ['LaunchRocketFairings', () => LaunchRocketFairingsModel], ['LaunchRocketFirstStage', () => LaunchRocketFirstStageModel], ['LaunchRocketFirstStageCore', () => LaunchRocketFirstStageCoreModel], ['Rocket', () => RocketModel], ['RocketEngines', () => RocketEnginesModel], ['RocketFirstStage', () => RocketFirstStageModel], ['RocketLandingLegs', () => RocketLandingLegsModel], ['RocketPayloadWeight', () => RocketPayloadWeightModel], ['RocketSecondStage', () => RocketSecondStageModel], ['RocketSecondStagePayloads', () => RocketSecondStagePayloadsModel], ['RocketSecondStagePayloadCompositeFairing', () => RocketSecondStagePayloadCompositeFairingModel], ['LaunchRocketSecondStage', () => LaunchRocketSecondStageModel], ['Payload', () => PayloadModel], ['PayloadOrbitParams', () => PayloadOrbitParamsModel], ['LaunchTelemetry', () => LaunchTelemetryModel], ['Ship', () => ShipModel], ['ShipMission', () => ShipMissionModel], ['ShipLocation', () => ShipLocationModel], ['HistoriesResult', () => HistoriesResultModel], ['Result', () => ResultModel], ['Landpad', () => LandpadModel], ['Location', () => LocationModel], ['LaunchesPastResult', () => LaunchesPastResultModel], ['Launchpad', () => LaunchpadModel], ['Mission', () => MissionModel], ['MissionResult', () => MissionResultModel], ['Roadster', () => RoadsterModel], ['RocketsResult', () => RocketsResultModel], ['ShipsResult', () => ShipsResultModel], ['users_mutation_response', () => UsersMutationResponseModel], ['CoreMission', () => CoreMissionModel]], ['Capsule', 'Dragon', 'Core', 'History', 'Launch', 'Rocket', 'Payload', 'Ship', 'Landpad', 'Launchpad', 'Mission'], "js"))
  .props({
    capsules: types.optional(types.map(types.late((): any => CapsuleModel)), {}),
    dragons: types.optional(types.map(types.late((): any => DragonModel)), {}),
    cores: types.optional(types.map(types.late((): any => CoreModel)), {}),
    histories: types.optional(types.map(types.late((): any => HistoryModel)), {}),
    launches: types.optional(types.map(types.late((): any => LaunchModel)), {}),
    rockets: types.optional(types.map(types.late((): any => RocketModel)), {}),
    payloads: types.optional(types.map(types.late((): any => PayloadModel)), {}),
    ships: types.optional(types.map(types.late((): any => ShipModel)), {}),
    landpads: types.optional(types.map(types.late((): any => LandpadModel)), {}),
    launchpads: types.optional(types.map(types.late((): any => LaunchpadModel)), {}),
    missions: types.optional(types.map(types.late((): any => MissionModel)), {})
  })
  .actions(self => ({
    // fetch data from the table: "users"
    queryUsers(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users: UsersModelType[]}>(`query users($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch aggregated fields from the table: "users"
    queryUsers_aggregate(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersAggregateModelSelector) => UsersAggregateModelSelector) = usersAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users_aggregate: UsersAggregateModelType}>(`query users_aggregate($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "users" using primary key columns
    queryUsers_by_pk(variables: { id: any }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ users_by_pk: UsersModelType}>(`query users_by_pk($id: uuid!) { users_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCapsules(variables: { find?: CapsulesFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: CapsuleModelSelector) => CapsuleModelSelector) = capsuleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ capsules: CapsuleModelType[]}>(`query capsules($find: CapsulesFind, $limit: Int, $offset: Int, $order: String, $sort: String) { capsules(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new CapsuleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCapsulesPast(variables: { find?: CapsulesFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: CapsuleModelSelector) => CapsuleModelSelector) = capsuleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ capsulesPast: CapsuleModelType[]}>(`query capsulesPast($find: CapsulesFind, $limit: Int, $offset: Int, $order: String, $sort: String) { capsulesPast(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new CapsuleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCapsulesUpcoming(variables: { find?: CapsulesFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: CapsuleModelSelector) => CapsuleModelSelector) = capsuleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ capsulesUpcoming: CapsuleModelType[]}>(`query capsulesUpcoming($find: CapsulesFind, $limit: Int, $offset: Int, $order: String, $sort: String) { capsulesUpcoming(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new CapsuleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCapsule(variables: { id: string }, resultSelector: string | ((qb: CapsuleModelSelector) => CapsuleModelSelector) = capsuleModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ capsule: CapsuleModelType}>(`query capsule($id: ID!) { capsule(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CapsuleModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCompany(variables?: {  }, resultSelector: string | ((qb: InfoModelSelector) => InfoModelSelector) = infoModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ company: InfoModelType}>(`query company { company {
        ${typeof resultSelector === "function" ? resultSelector(new InfoModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCores(variables: { find?: CoresFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: CoreModelSelector) => CoreModelSelector) = coreModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ cores: CoreModelType[]}>(`query cores($find: CoresFind, $limit: Int, $offset: Int, $order: String, $sort: String) { cores(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new CoreModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCoresPast(variables: { find?: CoresFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: CoreModelSelector) => CoreModelSelector) = coreModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ coresPast: CoreModelType[]}>(`query coresPast($find: CoresFind, $limit: Int, $offset: Int, $order: String, $sort: String) { coresPast(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new CoreModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCoresUpcoming(variables: { find?: CoresFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: CoreModelSelector) => CoreModelSelector) = coreModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ coresUpcoming: CoreModelType[]}>(`query coresUpcoming($find: CoresFind, $limit: Int, $offset: Int, $order: String, $sort: String) { coresUpcoming(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new CoreModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryCore(variables: { id: string }, resultSelector: string | ((qb: CoreModelSelector) => CoreModelSelector) = coreModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ core: CoreModelType}>(`query core($id: ID!) { core(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new CoreModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryDragons(variables: { limit?: number, offset?: number }, resultSelector: string | ((qb: DragonModelSelector) => DragonModelSelector) = dragonModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ dragons: DragonModelType[]}>(`query dragons($limit: Int, $offset: Int) { dragons(limit: $limit, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new DragonModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryDragon(variables: { id: string }, resultSelector: string | ((qb: DragonModelSelector) => DragonModelSelector) = dragonModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ dragon: DragonModelType}>(`query dragon($id: ID!) { dragon(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new DragonModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryHistories(variables: { find?: HistoryFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: HistoryModelSelector) => HistoryModelSelector) = historyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ histories: HistoryModelType[]}>(`query histories($find: HistoryFind, $limit: Int, $offset: Int, $order: String, $sort: String) { histories(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new HistoryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryHistoriesResult(variables: { find?: HistoryFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: HistoriesResultModelSelector) => HistoriesResultModelSelector) = historiesResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ historiesResult: HistoriesResultModelType}>(`query historiesResult($find: HistoryFind, $limit: Int, $offset: Int, $order: String, $sort: String) { historiesResult(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new HistoriesResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryHistory(variables: { id: string }, resultSelector: string | ((qb: HistoryModelSelector) => HistoryModelSelector) = historyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ history: HistoryModelType}>(`query history($id: ID!) { history(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new HistoryModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLandpads(variables: { limit?: number, offset?: number }, resultSelector: string | ((qb: LandpadModelSelector) => LandpadModelSelector) = landpadModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ landpads: LandpadModelType[]}>(`query landpads($limit: Int, $offset: Int) { landpads(limit: $limit, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new LandpadModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLandpad(variables: { id: string }, resultSelector: string | ((qb: LandpadModelSelector) => LandpadModelSelector) = landpadModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ landpad: LandpadModelType}>(`query landpad($id: ID!) { landpad(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LandpadModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunches(variables: { find?: LaunchFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: LaunchModelSelector) => LaunchModelSelector) = launchModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launches: LaunchModelType[]}>(`query launches($find: LaunchFind, $limit: Int, $offset: Int, $order: String, $sort: String) { launches(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunchesPast(variables: { find?: LaunchFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: LaunchModelSelector) => LaunchModelSelector) = launchModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launchesPast: LaunchModelType[]}>(`query launchesPast($find: LaunchFind, $limit: Int, $offset: Int, $order: String, $sort: String) { launchesPast(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunchesPastResult(variables: { find?: LaunchFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: LaunchesPastResultModelSelector) => LaunchesPastResultModelSelector) = launchesPastResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launchesPastResult: LaunchesPastResultModelType}>(`query launchesPastResult($find: LaunchFind, $limit: Int, $offset: Int, $order: String, $sort: String) { launchesPastResult(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchesPastResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunchesUpcoming(variables: { find?: LaunchFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: LaunchModelSelector) => LaunchModelSelector) = launchModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launchesUpcoming: LaunchModelType[]}>(`query launchesUpcoming($find: LaunchFind, $limit: Int, $offset: Int, $order: String, $sort: String) { launchesUpcoming(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunch(variables: { id: string }, resultSelector: string | ((qb: LaunchModelSelector) => LaunchModelSelector) = launchModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launch: LaunchModelType}>(`query launch($id: ID!) { launch(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunchLatest(variables: { offset?: number }, resultSelector: string | ((qb: LaunchModelSelector) => LaunchModelSelector) = launchModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launchLatest: LaunchModelType}>(`query launchLatest($offset: Int) { launchLatest(offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunchNext(variables: { offset?: number }, resultSelector: string | ((qb: LaunchModelSelector) => LaunchModelSelector) = launchModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launchNext: LaunchModelType}>(`query launchNext($offset: Int) { launchNext(offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunchpads(variables: { limit?: number, offset?: number }, resultSelector: string | ((qb: LaunchpadModelSelector) => LaunchpadModelSelector) = launchpadModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launchpads: LaunchpadModelType[]}>(`query launchpads($limit: Int, $offset: Int) { launchpads(limit: $limit, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchpadModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryLaunchpad(variables: { id: string }, resultSelector: string | ((qb: LaunchpadModelSelector) => LaunchpadModelSelector) = launchpadModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ launchpad: LaunchpadModelType}>(`query launchpad($id: ID!) { launchpad(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new LaunchpadModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryMissions(variables: { find?: MissionsFind, limit?: number, offset?: number }, resultSelector: string | ((qb: MissionModelSelector) => MissionModelSelector) = missionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ missions: MissionModelType[]}>(`query missions($find: MissionsFind, $limit: Int, $offset: Int) { missions(find: $find, limit: $limit, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new MissionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryMissionsResult(variables: { find?: MissionsFind, limit?: number, offset?: number }, resultSelector: string | ((qb: MissionResultModelSelector) => MissionResultModelSelector) = missionResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ missionsResult: MissionResultModelType}>(`query missionsResult($find: MissionsFind, $limit: Int, $offset: Int) { missionsResult(find: $find, limit: $limit, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new MissionResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryMission(variables: { id: string }, resultSelector: string | ((qb: MissionModelSelector) => MissionModelSelector) = missionModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ mission: MissionModelType}>(`query mission($id: ID!) { mission(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new MissionModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPayloads(variables: { find?: PayloadsFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: PayloadModelSelector) => PayloadModelSelector) = payloadModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ payloads: PayloadModelType[]}>(`query payloads($find: PayloadsFind, $limit: Int, $offset: Int, $order: String, $sort: String) { payloads(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new PayloadModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPayload(variables: { id: string }, resultSelector: string | ((qb: PayloadModelSelector) => PayloadModelSelector) = payloadModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ payload: PayloadModelType}>(`query payload($id: ID!) { payload(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new PayloadModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryRoadster(variables?: {  }, resultSelector: string | ((qb: RoadsterModelSelector) => RoadsterModelSelector) = roadsterModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ roadster: RoadsterModelType}>(`query roadster { roadster {
        ${typeof resultSelector === "function" ? resultSelector(new RoadsterModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryRockets(variables: { limit?: number, offset?: number }, resultSelector: string | ((qb: RocketModelSelector) => RocketModelSelector) = rocketModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ rockets: RocketModelType[]}>(`query rockets($limit: Int, $offset: Int) { rockets(limit: $limit, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new RocketModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryRocketsResult(variables: { limit?: number, offset?: number }, resultSelector: string | ((qb: RocketsResultModelSelector) => RocketsResultModelSelector) = rocketsResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ rocketsResult: RocketsResultModelType}>(`query rocketsResult($limit: Int, $offset: Int) { rocketsResult(limit: $limit, offset: $offset) {
        ${typeof resultSelector === "function" ? resultSelector(new RocketsResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryRocket(variables: { id: string }, resultSelector: string | ((qb: RocketModelSelector) => RocketModelSelector) = rocketModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ rocket: RocketModelType}>(`query rocket($id: ID!) { rocket(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new RocketModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryShips(variables: { find?: ShipsFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: ShipModelSelector) => ShipModelSelector) = shipModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ ships: ShipModelType[]}>(`query ships($find: ShipsFind, $limit: Int, $offset: Int, $order: String, $sort: String) { ships(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new ShipModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryShipsResult(variables: { find?: ShipsFind, limit?: number, offset?: number, order?: string, sort?: string }, resultSelector: string | ((qb: ShipsResultModelSelector) => ShipsResultModelSelector) = shipsResultModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ shipsResult: ShipsResultModelType}>(`query shipsResult($find: ShipsFind, $limit: Int, $offset: Int, $order: String, $sort: String) { shipsResult(find: $find, limit: $limit, offset: $offset, order: $order, sort: $sort) {
        ${typeof resultSelector === "function" ? resultSelector(new ShipsResultModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryShip(variables: { id: string }, resultSelector: string | ((qb: ShipModelSelector) => ShipModelSelector) = shipModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ ship: ShipModelType}>(`query ship($id: ID!) { ship(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new ShipModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // delete data from the table: "users"
    mutateDelete_users(variables: { where: UsersBoolExp }, resultSelector: string | ((qb: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector) = usersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_users: UsersMutationResponseModelType}>(`mutation delete_users($where: users_bool_exp!) { delete_users(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert data into the table: "users"
    mutateInsert_users(variables: { objects: UsersInsertInput[], onConflict?: UsersOnConflict }, resultSelector: string | ((qb: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector) = usersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_users: UsersMutationResponseModelType}>(`mutation insert_users($objects: [users_insert_input!]!, $onConflict: users_on_conflict) { insert_users(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update data of the table: "users"
    mutateUpdate_users(variables: { set?: UsersSetInput, where: UsersBoolExp }, resultSelector: string | ((qb: UsersMutationResponseModelSelector) => UsersMutationResponseModelSelector) = usersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_users: UsersMutationResponseModelType}>(`mutation update_users($set: users_set_input, $where: users_bool_exp!) { update_users(_set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // fetch data from the table: "users"
    subscribeUsers(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ users: UsersModelType[]}>(`subscription users($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch aggregated fields from the table: "users"
    subscribeUsers_aggregate(variables: { distinctOn?: UsersSelectColumn[], limit?: number, offset?: number, orderBy?: UsersOrderBy[], where?: UsersBoolExp }, resultSelector: string | ((qb: UsersAggregateModelSelector) => UsersAggregateModelSelector) = usersAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ users_aggregate: UsersAggregateModelType}>(`subscription users_aggregate($distinctOn: [users_select_column!], $limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) { users_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "users" using primary key columns
    subscribeUsers_by_pk(variables: { id: any }, resultSelector: string | ((qb: UsersModelSelector) => UsersModelSelector) = usersModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ users_by_pk: UsersModelType}>(`subscription users_by_pk($id: uuid!) { users_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new UsersModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
  })))
