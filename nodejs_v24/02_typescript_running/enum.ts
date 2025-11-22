enum Example {
  name = 'ANDRII'
}

let user: Example = Example.name;
console.log(user);

/**
 * node --experimental-transform-types enum.ts
 */
