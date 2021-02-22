/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { AddressModel, AddressModelType } from "./AddressModel"
import { AddressModelSelector } from "./AddressModel.base"
import { InfoLinksModel, InfoLinksModelType } from "./InfoLinksModel"
import { InfoLinksModelSelector } from "./InfoLinksModel.base"
import { RootStoreType } from "./index"


/**
 * InfoBase
 * auto generated base class for the model InfoModel.
 */
export const InfoModelBase = ModelBase
  .named('Info')
  .props({
    __typename: types.optional(types.literal("Info"), "Info"),
    ceo: types.union(types.undefined, types.null, types.string),
    coo: types.union(types.undefined, types.null, types.string),
    cto_propulsion: types.union(types.undefined, types.null, types.string),
    cto: types.union(types.undefined, types.null, types.string),
    employees: types.union(types.undefined, types.null, types.integer),
    founded: types.union(types.undefined, types.null, types.integer),
    founder: types.union(types.undefined, types.null, types.string),
    headquarters: types.union(types.undefined, types.null, types.late((): any => AddressModel)),
    launch_sites: types.union(types.undefined, types.null, types.integer),
    links: types.union(types.undefined, types.null, types.late((): any => InfoLinksModel)),
    name: types.union(types.undefined, types.null, types.string),
    summary: types.union(types.undefined, types.null, types.string),
    test_sites: types.union(types.undefined, types.null, types.integer),
    valuation: types.union(types.undefined, types.null, types.number),
    vehicles: types.union(types.undefined, types.null, types.integer),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class InfoModelSelector extends QueryBuilder {
  get ceo() { return this.__attr(`ceo`) }
  get coo() { return this.__attr(`coo`) }
  get cto_propulsion() { return this.__attr(`cto_propulsion`) }
  get cto() { return this.__attr(`cto`) }
  get employees() { return this.__attr(`employees`) }
  get founded() { return this.__attr(`founded`) }
  get founder() { return this.__attr(`founder`) }
  get launch_sites() { return this.__attr(`launch_sites`) }
  get name() { return this.__attr(`name`) }
  get summary() { return this.__attr(`summary`) }
  get test_sites() { return this.__attr(`test_sites`) }
  get valuation() { return this.__attr(`valuation`) }
  get vehicles() { return this.__attr(`vehicles`) }
  headquarters(builder?: string | AddressModelSelector | ((selector: AddressModelSelector) => AddressModelSelector)) { return this.__child(`headquarters`, AddressModelSelector, builder) }
  links(builder?: string | InfoLinksModelSelector | ((selector: InfoLinksModelSelector) => InfoLinksModelSelector)) { return this.__child(`links`, InfoLinksModelSelector, builder) }
}
export function selectFromInfo() {
  return new InfoModelSelector()
}

export const infoModelPrimitives = selectFromInfo().ceo.coo.cto_propulsion.cto.employees.founded.founder.launch_sites.name.summary.test_sites.valuation.vehicles
