import { Instance } from "mobx-state-tree"
import { RoadsterModelBase } from "./RoadsterModel.base"

/* The TypeScript type of an instance of RoadsterModel */
export interface RoadsterModelType extends Instance<typeof RoadsterModel.Type> {}

/* A graphql query fragment builders for RoadsterModel */
export { selectFromRoadster, roadsterModelPrimitives, RoadsterModelSelector } from "./RoadsterModel.base"

/**
 * RoadsterModel
 */
export const RoadsterModel = RoadsterModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
