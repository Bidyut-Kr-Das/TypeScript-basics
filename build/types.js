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
// d = 'hello'; //*valid
// d = 6; //*valid
c = 6;
c = "hello";
console.log(c);
//array types
// let arr1:any[] = [];
//or
// let arr1 = [];
// both of these create an array of type any means it can store value of type any
// example:
let arr1 = [];
arr1.unshift(5); //*valid
arr1.push("hello world"); //*valid
console.log(arr1);
console.log(typeof arr1);
// union type array
let arr2 = [];
// arr2 can store either string or number but not any other types
// arr2.unshift(true); //!invalid as only accepts either string or number
arr2.unshift("hello"); //*valid
arr2.unshift(65); //*valid
console.log(arr2);
// @ typescript does not restrict on size of array it only restricts on the type of the value of the elements
// TUPLE
// tuple is a special array in typescript which restrict the position of element and length of element in an array
let newArr = ["hello", true, 56]; //* valid syntax
console.log(newArr);
// the above syntax is not same as the below
let newArr2 = ["hello", true, 56];
// newArr is a tuple but newArr2 is an array
// OBJECT
const obj1 = {
    prop1: "hello",
    prop2: true, //prop 2 is set to boolean
};
// obj1.prop1 = 54; //!invalid as number can not be assigned to string
obj1.prop2 = false; //*valid
// now we can use this type in any object
const obj2 = {
    prop1: true,
    prop2: 43,
    prop3: "hello",
};
// object of type newType 2 without year properties
const obj3 = {
    name: "bidyut",
    album: true,
};
//we can also pass object of type custom made type like this
const callFunc = (param1) => {
    return `hello ${param1.name}!`;
};
console.log(callFunc(obj3));
const Student1 = {
    age: 23,
    active: false,
};
// lets say we call a function that operates on name property
const makeCapital = (obj) => {
    // return `turned to upper case ${obj.name.toUpperCase()}`;
    //!invalid as name is optional property
    var _a;
    return `turned to upper case ${(_a = obj.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    //we made the operation optional using `?`
};
console.log(makeCapital(Student1));
//literal types
// these are mainly putting the expected values in the variable aliases or properties
// example
let userName;
// in typescript
// now we can username can only accept values of the specified
// userName='mota';  //!invalid only specified values are accepted
userName = "bidyut"; //*valid
