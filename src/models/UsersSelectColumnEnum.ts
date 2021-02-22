/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum UsersSelectColumn {
  id="id",
name="name",
rocket="rocket",
timestamp="timestamp",
twitter="twitter"
}

/**
* UsersSelectColumn
 *
 * select columns of table "users"
*/
export const UsersSelectColumnEnumType = types.enumeration("UsersSelectColumn", [
        "id", // column name
  "name", // column name
  "rocket", // column name
  "timestamp", // column name
  "twitter", // column name
      ])
