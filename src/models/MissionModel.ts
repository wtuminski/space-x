import { Instance } from "mobx-state-tree"
import { MissionModelBase } from "./MissionModel.base"

/* The TypeScript type of an instance of MissionModel */
export interface MissionModelType extends Instance<typeof MissionModel.Type> {}

/* A graphql query fragment builders for MissionModel */
export { selectFromMission, missionModelPrimitives, MissionModelSelector } from "./MissionModel.base"

/**
 * MissionModel
 */
export const MissionModel = MissionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
