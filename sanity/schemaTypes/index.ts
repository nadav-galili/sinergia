import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { ourCustomer } from "./ourCustomer";
import { contact } from "./contact";
import { ourServices } from "./ourServices";
import { blockContentType } from "./blockContentType";
import { post } from "./post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, ourCustomer, contact, ourServices, blockContentType, post],
};
