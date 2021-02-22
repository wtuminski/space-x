import { Instance } from "mobx-state-tree"
import { LaunchSiteModelBase } from "./LaunchSiteModel.base"

/* The TypeScript type of an instance of LaunchSiteModel */
export interface LaunchSiteModelType extends Instance<typeof LaunchSiteModel.Type> {}

/* A graphql query fragment builders for LaunchSiteModel */
export { selectFromLaunchSite, launchSiteModelPrimitives, LaunchSiteModelSelector } from "./LaunchSiteModel.base"

/**
 * LaunchSiteModel
 */
export const LaunchSiteModel = LaunchSiteModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
