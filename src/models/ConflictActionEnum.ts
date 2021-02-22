/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum ConflictAction {
  ignore="ignore",
update="update"
}

/**
* ConflictAction
 *
 * conflict action
*/
export const ConflictActionEnumType = types.enumeration("ConflictAction", [
        "ignore", // ignore the insert on this row
  "update", // update the row with the given values
      ])
