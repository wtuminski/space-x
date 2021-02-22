import { Instance } from "mobx-state-tree"
import { HistoryModelBase } from "./HistoryModel.base"

/* The TypeScript type of an instance of HistoryModel */
export interface HistoryModelType extends Instance<typeof HistoryModel.Type> {}

/* A graphql query fragment builders for HistoryModel */
export { selectFromHistory, historyModelPrimitives, HistoryModelSelector } from "./HistoryModel.base"

/**
 * HistoryModel
 */
export const HistoryModel = HistoryModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
