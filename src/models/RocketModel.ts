import { Instance } from "mobx-state-tree"
import { RocketModelBase } from "./RocketModel.base"

/* The TypeScript type of an instance of RocketModel */
export interface RocketModelType extends Instance<typeof RocketModel.Type> {}

/* A graphql query fragment builders for RocketModel */
export { selectFromRocket, rocketModelPrimitives, RocketModelSelector } from "./RocketModel.base"

/**
 * RocketModel
 */
export const RocketModel = RocketModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
