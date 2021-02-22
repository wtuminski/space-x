import { Instance } from "mobx-state-tree"
import { RocketEnginesModelBase } from "./RocketEnginesModel.base"

/* The TypeScript type of an instance of RocketEnginesModel */
export interface RocketEnginesModelType extends Instance<typeof RocketEnginesModel.Type> {}

/* A graphql query fragment builders for RocketEnginesModel */
export { selectFromRocketEngines, rocketEnginesModelPrimitives, RocketEnginesModelSelector } from "./RocketEnginesModel.base"

/**
 * RocketEnginesModel
 */
export const RocketEnginesModel = RocketEnginesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
