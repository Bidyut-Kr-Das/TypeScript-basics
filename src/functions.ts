// in typescript we can specify types and parameters in a function and return type of funcitons
// example
const add = (a: number, b: number) => {
  return a + b;
};
//this function returns number implicitly
// we can specify return type the following way
const add2 = (a: number, b: number): number => {
  return a + b;
};

// function type

// lets say we will create a calculator that will add subtract and multiply 2 numbers and all the functions will return a number
//So to follow DRY we can create a function type aliases and use it in those

type mathFunction = (a: number, b: number) => number;
//now we can use this mathFunction type to create other functions

//subtract is a type of mathFunction
const subtract: mathFunction = (c, d) => {
  return c - d;
};

//optional parameter
// rules: 1. optional parameters should be last parameter in the function.
// 2. we need to put 'typeGuard' in the function body so that it doesn't return undefined
// example:
//Here c is optional and made optional using ?
const sum = (a: number, b: number, c?: number): number => {
  // the type of c is number | undefined
  //   so we need to put typeGuard when value is passed undefined
  if (typeof c !== "undefined") {
    //When value is not undefined add c else exclude c
    //@This is called typeGuard
    return a + b + c;
  }
  return a + b;
};

//default parameters in a function
// It is also a way to make parameter of a function optional
// example:
const addAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
  //Here we dont need to type Guard as when c is not provided at function call the default value of 2 will be taken
};
