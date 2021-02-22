import { Instance } from "mobx-state-tree"
import { ResultModelBase } from "./ResultModel.base"

/* The TypeScript type of an instance of ResultModel */
export interface ResultModelType extends Instance<typeof ResultModel.Type> {}

/* A graphql query fragment builders for ResultModel */
export { selectFromResult, resultModelPrimitives, ResultModelSelector } from "./ResultModel.base"

/**
 * ResultModel
 */
export const ResultModel = ResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
