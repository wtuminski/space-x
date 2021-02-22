import { Instance } from "mobx-state-tree"
import { HistoriesResultModelBase } from "./HistoriesResultModel.base"

/* The TypeScript type of an instance of HistoriesResultModel */
export interface HistoriesResultModelType extends Instance<typeof HistoriesResultModel.Type> {}

/* A graphql query fragment builders for HistoriesResultModel */
export { selectFromHistoriesResult, historiesResultModelPrimitives, HistoriesResultModelSelector } from "./HistoriesResultModel.base"

/**
 * HistoriesResultModel
 */
export const HistoriesResultModel = HistoriesResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
