import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { ourCustomer } from "./ourCustomer";
import { contact } from "./contact";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, ourCustomer, contact],
};
