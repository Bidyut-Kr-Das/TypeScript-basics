"use strict";
let a1 = 5;
// a1 is a number but with the use of as we changed it to string or number
let b1 = a1; // but this is less specific
let c1 = b1; // we are being more specific as it will only be 'constraint'
// type assertion is used to tell typescript that we know more about what type to expect
//When typescript is not sure what will be type
// The DOM(document object model)
let img = document.querySelector("img");
//img.src; //! this is not liked by typescript as img can either be HTMLImageElement or null we cant use src in null.
// if we use like this
let nextImg = document.querySelector("img");
nextImg.src;
// type assertion does not mean that the output will be errorless
// example of wrong assertion
let addOrConcat = (a, b, c) => {
    if (c === "concat")
        return "" + a + b;
    return a + b;
};
let myval = addOrConcat(2, 2, "add"); //as we are confirming typescript that the function will return a number
let nextval = addOrConcat(2, 2, "add"); // we are telling typescript that the function will return string but the function is actually return number which will throw an error and our information about the return statement is wrong.
