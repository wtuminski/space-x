import { Instance } from "mobx-state-tree"
import { PayloadOrbitParamsModelBase } from "./PayloadOrbitParamsModel.base"

/* The TypeScript type of an instance of PayloadOrbitParamsModel */
export interface PayloadOrbitParamsModelType extends Instance<typeof PayloadOrbitParamsModel.Type> {}

/* A graphql query fragment builders for PayloadOrbitParamsModel */
export { selectFromPayloadOrbitParams, payloadOrbitParamsModelPrimitives, PayloadOrbitParamsModelSelector } from "./PayloadOrbitParamsModel.base"

/**
 * PayloadOrbitParamsModel
 */
export const PayloadOrbitParamsModel = PayloadOrbitParamsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
