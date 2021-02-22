import { Instance } from "mobx-state-tree"
import { ForceModelBase } from "./ForceModel.base"

/* The TypeScript type of an instance of ForceModel */
export interface ForceModelType extends Instance<typeof ForceModel.Type> {}

/* A graphql query fragment builders for ForceModel */
export { selectFromForce, forceModelPrimitives, ForceModelSelector } from "./ForceModel.base"

/**
 * ForceModel
 */
export const ForceModel = ForceModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
