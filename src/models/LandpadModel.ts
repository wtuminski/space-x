import { Instance } from "mobx-state-tree"
import { LandpadModelBase } from "./LandpadModel.base"

/* The TypeScript type of an instance of LandpadModel */
export interface LandpadModelType extends Instance<typeof LandpadModel.Type> {}

/* A graphql query fragment builders for LandpadModel */
export { selectFromLandpad, landpadModelPrimitives, LandpadModelSelector } from "./LandpadModel.base"

/**
 * LandpadModel
 */
export const LandpadModel = LandpadModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
