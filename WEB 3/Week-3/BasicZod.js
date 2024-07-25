const zod = require("zod");

const s = zod.string();

// This is the string zod schema.
// console.log(s.safeParse("Hello"), s.safeParse(20));

// this is the new object zod schema
const user = zod.object({
  username: s,
  password: s,
});

console.log(user.parse({ username: "Jay Vegad", password: "20002" }));
