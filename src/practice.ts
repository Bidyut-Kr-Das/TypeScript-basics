interface user {
  readonly _id: string;
  name: string;
  age: number;
  language?: string;
}

const createUser = (U: user) => {
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

// createUser(obj12); //!invalid as obj12 does not math type user
// createUser(obj11); //*valid as obj11 matches the type user

//software getting credit card feature!! implement the feature :)

// lets create a type CreditCardDetails
type creditCardNumber = {
  cardNumber: number;
};
type creditCardDate = {
  cardDate: string;
};
//lets add creditCardDetails member in the interface named user which accepts both creditcardNumber and creditCardDate so we used `&` operator
//some time this is also called `reopening` the interface
interface user {
  CreditCardDetails: creditCardNumber & creditCardDate;
}

const newUser: user = {
  _id: "1234",
  name: "bidyut",
  age: 23,
  CreditCardDetails: {
    cardNumber: 1234,
    cardDate: "12-10-2023",
  },
};

createUser(newUser); //*valid as it matches the `user` interface
