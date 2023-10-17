"use strict";
// we need to specify type when declaring variables in typescript
let myName = "Dave";
let a;
let b;
// any type can take any data type in that variable
let c;
// union type
//union type can take either of the given types
let d;
// d can take either string or number
// d = true; //!error
d = c = 6;
c = "hello";
