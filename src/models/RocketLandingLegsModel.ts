import { Instance } from "mobx-state-tree"
import { RocketLandingLegsModelBase } from "./RocketLandingLegsModel.base"

/* The TypeScript type of an instance of RocketLandingLegsModel */
export interface RocketLandingLegsModelType extends Instance<typeof RocketLandingLegsModel.Type> {}

/* A graphql query fragment builders for RocketLandingLegsModel */
export { selectFromRocketLandingLegs, rocketLandingLegsModelPrimitives, RocketLandingLegsModelSelector } from "./RocketLandingLegsModel.base"

/**
 * RocketLandingLegsModel
 */
export const RocketLandingLegsModel = RocketLandingLegsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
