import { Instance } from "mobx-state-tree"
import { MassModelBase } from "./MassModel.base"

/* The TypeScript type of an instance of MassModel */
export interface MassModelType extends Instance<typeof MassModel.Type> {}

/* A graphql query fragment builders for MassModel */
export { selectFromMass, massModelPrimitives, MassModelSelector } from "./MassModel.base"

/**
 * MassModel
 */
export const MassModel = MassModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
