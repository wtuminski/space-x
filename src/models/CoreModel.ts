import { Instance } from "mobx-state-tree"
import { CoreModelBase } from "./CoreModel.base"

/* The TypeScript type of an instance of CoreModel */
export interface CoreModelType extends Instance<typeof CoreModel.Type> {}

/* A graphql query fragment builders for CoreModel */
export { selectFromCore, coreModelPrimitives, CoreModelSelector } from "./CoreModel.base"

/**
 * CoreModel
 */
export const CoreModel = CoreModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
