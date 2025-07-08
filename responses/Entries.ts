import type { Building } from "../types/Building"
import type { Chamber } from "../types/Chamber"
import type { ItemState } from "../types/ItemState"

export type Response = {
  generalID: string,
  itemID: string,
  name: string,
  state: ItemState,
  building: Building,
  chamber: Chamber,
  shelf: string,
}