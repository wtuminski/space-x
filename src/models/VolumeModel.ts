import { Instance } from "mobx-state-tree"
import { VolumeModelBase } from "./VolumeModel.base"

/* The TypeScript type of an instance of VolumeModel */
export interface VolumeModelType extends Instance<typeof VolumeModel.Type> {}

/* A graphql query fragment builders for VolumeModel */
export { selectFromVolume, volumeModelPrimitives, VolumeModelSelector } from "./VolumeModel.base"

/**
 * VolumeModel
 */
export const VolumeModel = VolumeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
