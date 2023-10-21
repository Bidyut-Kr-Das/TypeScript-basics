// type assertion is a way to overwrite the type of a variable
// we use the keyword `as`
type one = string;
type two = number | string;
type three = "constraint";

let a1: number = 5;

// a1 is a number but with the use of as we changed it to string or number
let b1 = a1 as two; // but this is less specific
let c1 = b1 as three; // we are being more specific as it will only be 'constraint'

// type assertion is used to tell typescript that we know more about what type to expect
//When typescript is not sure what will be type

// The DOM(document object model)

let img = document.querySelector("img");

//img.src; //! this is not liked by typescript as img can either be HTMLImageElement or null we cant use src in null.

// if we use like this

let nextImg = document.querySelector("img") as HTMLImageElement;

nextImg.src;

// we can also tell typescript that the element is not null

let nextToNextImage = document.querySelector("img")!;
// The exclamation mark tells the typescript the element is not null

nextToNextImage.src;

// type assertion does not mean that the output will be errorless
// example of wrong assertion

let addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "concat") return "" + a + b;
  return a + b;
};

let myval: number = addOrConcat(2, 2, "add") as number; //as we are confirming typescript that the function will return a number

let nextval: string = addOrConcat(2, 2, "add") as string; // we are telling typescript that the function will return string but the function is actually returning number which will throw an error and our information about the return statement is wrong.

// practice of type assertion
// js code
// const yearDiv = document.getElementById("year");
// const thisyear = new Date().getFullYear();
// yearDiv.setAttribute("dateTime", thisyear);
// yearDiv.textContent = thisyear;

// ts refractoring
const yearDiv = document.getElementById("year")!;
const thisyear = new Date().getFullYear().toString();

yearDiv.setAttribute("dateTime", thisyear);
// yearDiv.textContent = thisyear;
