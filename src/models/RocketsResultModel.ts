import { Instance } from "mobx-state-tree"
import { RocketsResultModelBase } from "./RocketsResultModel.base"

/* The TypeScript type of an instance of RocketsResultModel */
export interface RocketsResultModelType extends Instance<typeof RocketsResultModel.Type> {}

/* A graphql query fragment builders for RocketsResultModel */
export { selectFromRocketsResult, rocketsResultModelPrimitives, RocketsResultModelSelector } from "./RocketsResultModel.base"

/**
 * RocketsResultModel
 */
export const RocketsResultModel = RocketsResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
