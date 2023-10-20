"use strict";
// in typescript we can specify types and parameters in a function and return type of funcitons
// example
const add = (a, b) => {
    return a + b;
};
//this function returns number implicitly
// we can specify return type the following way
const add2 = (a, b) => {
    return a + b;
};
//now we can use this mathFunction type to create other functions
//subtract is a type of mathFunction
const subtract = (c, d) => {
    return c - d;
};
//optional parameter
// rules: 1. optional parameters should be last parameter in the function.
// 2. we need to put 'typeGuard' in the function body so that it doesn't return undefined
// example:
//Here c is optional and made optional using ?
const sum = (a, b, c) => {
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
const addAll = (a, b, c = 2) => {
    return a + b + c;
    //Here we dont need to type Guard as when c is not provided at function call the default value of 2 will be taken
};
// Rest operator or spread operator `...param`
// lets create sum function to better under stand this operator
const sumAll = (firstParam, ...restOfTheParams) => {
    //Explanation of the function :
    //The function can take as many args as many provided first argument will be stored at `firstParam` parameter as a single value and rest of the arguments will be stored as an array in the `restOfTheparam` parameter that is used using rest/spread operator Then the function will return sum of the first parameter + rest of the parameter
    //as rest of the parameters are in an array named `restOfTheParams` we can use .reduce method and calculate sum of values in restOfTheParams array
    //@Note: reduce returns a single value performing operations specified in the function body  to the array elements.
    return (firstParam +
        restOfTheParams.reduce((prev, next) => {
            return prev + next;
        }));
};
//* The NEVER TYPE
//When a function explicitly throws error or goes in an infinite loop without break statement then the funciton returns never type
// example:
const createError = (errmsg) => {
    throw new Error(errmsg);
};
const infiniteLoop = (value) => {
    //returns never type as its in an infinite loop
    while (true) {
        value++;
    }
};
// applications:
// Create a custom typeguard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//use the typeGuard in a function and also show use of never type function
const newFunction = (value) => {
    //use of the custom typeGuard function
    if (isNumber(value))
        return "number";
    if (typeof value === "string")
        return "string";
    //The newFunction returns string but we are returning never type which is allowed
    return createError("There is an error");
};
