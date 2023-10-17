// we need to specify type when declaring variables in typescript

let myName: string = "Dave";
let a: number;
let b: boolean;
// any type can take any data type in that variable
let c: any;

// union type
//union type can take either of the given types
let d: string | number;
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
let arr2: (string | number)[] = [];
// arr2 can store either string or number but not any other types
// arr2.unshift(true); //!invalid as only accepts either string or number
arr2.unshift("hello"); //*valid
arr2.unshift(65); //*valid
console.log(arr2);

// @ typescript does not restrict on size of array it only restricts on the type of the value of the elements

// TUPLE
// tuple is a special array in typescript which restrict the position of element and length of element in an array

let newArr: [string, boolean, number] = ["hello", true, 56]; //* valid syntax
console.log(newArr);

// the above syntax is not same as the below

let newArr2 = ["hello", true, 56];
// newArr is a tuple but newArr2 is an array

// OBJECT
const obj1 = {
  prop1: "hello", //prop 1 is set to string
  prop2: true, //prop 2 is set to boolean
};
// obj1.prop1 = 54; //!invalid as number can not be assigned to string

obj1.prop2 = false; //*valid

//annotating object type

// we use `type` key word to create type of an object

type newType = {
  prop1: boolean;
  prop2: number;
  prop3: string;
};

// now we can use this type in any object
const obj2: newType = {
  prop1: true,
  prop2: 43,
  prop3: "hello",
};

// all three properties are mandatory but we can make props optional by adding a `?` mark

type newType2 = {
  name: string;
  year?: number | string; //here year is opitonal
  album: boolean;
};

// object of type newType 2 without year properties
const obj3: newType2 = {
  name: "bidyut",
  album: true,
};

//we can also pass object of type custom made type like this
const callFunc = (param1: newType2) => {
  return `hello ${param1.name}!`;
};
console.log(callFunc(obj3));
//output hello Bidyut!

// Scenario: if you work on a property that is optional and might not be provided when working on it then we need to make the function optional also by adding a `?`
// example

type coder = {
  name?: string;
  age: number;
  active: boolean;
};

const Student1: coder = {
  age: 23,
  active: false,
};

// lets say we call a function that operates on name property

const makeCapital = (obj: coder) => {
  // return `turned to upper case ${obj.name.toUpperCase()}`;
  //!invalid as name is optional property

  return `turned to upper case ${obj.name?.toUpperCase()}`;
  //we made the operation optional using `?`
};
console.log(makeCapital(Student1));

//type aliases
// we can create a custom type and use that type to annotate other variable or properties
// example

type eitherStringOrNumber = string | number;
type eitherStringOrNumberArray = (string | number)[];

// we can use this to annotate other variable or properties
type newObjectType = {
  prop1: eitherStringOrNumber;
  prop2: boolean;
  prop3: eitherStringOrNumberArray; // this type will represent (string|number)[]
  //this is called type aliases
};

//literal types
// these are mainly putting the expected values in the variable aliases or properties
// example
let userName: "bidyut" | "bkd" | "BKDas";
// in typescript
// now we can username can only accept values of the specified
// userName='mota';//!invalid only specified values are accepted
userName = "bidyut"; //*valid
