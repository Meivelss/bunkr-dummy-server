import { Type, type Static } from '@sinclair/typebox'

import { Building } from "../types/Building"
import { Chamber } from "../types/Chamber"
import { ItemState } from "../types/ItemState"
import { TypeCompiler } from '@sinclair/typebox/compiler';

const ResponseSchema = Type.Object({
  generalID: Type.String(),
  itemID: Type.String(),
  name: Type.String(),
  state: Type.Enum(ItemState),
  building: Type.Enum(Building),
  chamber: Type.Enum(Chamber),
  shelf: Type.String(),
});

const POSTSchema = Type.Object({
  generalID: Type.String(),
  name: Type.String(),
  state: Type.Enum(ItemState),
  building: Type.Enum(Building),
  chamber: Type.Enum(Chamber),
  shelf: Type.String(),
});

type GneralResponse = Static<typeof ResponseSchema>;
type POSTResponse = Static<typeof POSTSchema>;

const GeneralResponseCompiler = TypeCompiler.Compile(ResponseSchema);
const POSTcompiler = TypeCompiler.Compile(POSTSchema);

export { 
  ResponseSchema,
  POSTSchema, 
  type GneralResponse, 
  type POSTResponse, 
  POSTcompiler 
};