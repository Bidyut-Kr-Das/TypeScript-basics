"use strict";
const createUser = (U) => {
    let tempObj = U;
};
const obj11 = {
    _id: "1234",
    name: "Bidyut",
    age: 123,
    language: "typescript",
};
const obj12 = {
    _id: "1234",
    language: "typescript",
};
const newUser = {
    _id: "1234",
    name: "bidyut",
    age: 23,
    CreditCardDetails: {
        cardNumber: 1234,
        cardDate: "12-10-2023",
    },
};
createUser(newUser); //*valid as it matches the `user` interface
