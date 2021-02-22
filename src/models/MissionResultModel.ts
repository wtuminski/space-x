import { Instance } from "mobx-state-tree"
import { MissionResultModelBase } from "./MissionResultModel.base"

/* The TypeScript type of an instance of MissionResultModel */
export interface MissionResultModelType extends Instance<typeof MissionResultModel.Type> {}

/* A graphql query fragment builders for MissionResultModel */
export { selectFromMissionResult, missionResultModelPrimitives, MissionResultModelSelector } from "./MissionResultModel.base"

/**
 * MissionResultModel
 */
export const MissionResultModel = MissionResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
