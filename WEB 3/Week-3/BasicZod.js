/*
 * In this file i make all the code related zod for learning perpose and here
 * author: @JayVegad
 * date: 25-07-2024
 */

const zod = require("zod");

const s = zod.string();

// This is the string zod schema.
console.log(s.safeParse("Hello"), s.safeParse(20));

// this is the new object zod schema
// This is the object schema.
const user = zod.object({
  username: s,
  password: s,
});

console.log(user.parse({ username: "Jay Vegad", password: "20002" }));

// Now explore the all the primitives in this zod library
// Primitive values

const string = zod.string();
const number = zod.number();
const bigint = zod.bigint();
const boolean = zod.boolean();
const date = zod.date();
const symbol = zod.symbol();

// Empty types

const undefined = zod.undefined();
const nullSchema = zod.null();
const voidSchema = zod.void(); // accepts undefined

// catch-all types
// allows any values
const any = zod.any();
const unknown = zod.unknown();

// Nerver type
// allows no values
zod.never();
