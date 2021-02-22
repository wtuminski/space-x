import { Instance } from "mobx-state-tree"
import { InfoLinksModelBase } from "./InfoLinksModel.base"

/* The TypeScript type of an instance of InfoLinksModel */
export interface InfoLinksModelType extends Instance<typeof InfoLinksModel.Type> {}

/* A graphql query fragment builders for InfoLinksModel */
export { selectFromInfoLinks, infoLinksModelPrimitives, InfoLinksModelSelector } from "./InfoLinksModel.base"

/**
 * InfoLinksModel
 */
export const InfoLinksModel = InfoLinksModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
