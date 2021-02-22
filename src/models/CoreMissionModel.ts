import { Instance } from "mobx-state-tree"
import { CoreMissionModelBase } from "./CoreMissionModel.base"

/* The TypeScript type of an instance of CoreMissionModel */
export interface CoreMissionModelType extends Instance<typeof CoreMissionModel.Type> {}

/* A graphql query fragment builders for CoreMissionModel */
export { selectFromCoreMission, coreMissionModelPrimitives, CoreMissionModelSelector } from "./CoreMissionModel.base"

/**
 * CoreMissionModel
 */
export const CoreMissionModel = CoreMissionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
