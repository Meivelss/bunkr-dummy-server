import { Type, type Static } from '@sinclair/typebox'

import { Building } from "../types/Building"
import { Chamber } from "../types/Chamber"
import { ItemState } from "../types/ItemState"

export const ResponseSchema = Type.Object({
  generalID: Type.String(),
  itemID: Type.String(),
  name: Type.String(),
  state: Type.Enum(ItemState),
  building: Type.Enum(Building),
  chamber: Type.Enum(Chamber),
  shelf: Type.String(),
});

export type Response = Static<typeof ResponseSchema>;