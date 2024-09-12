// const obj1 = {
//   firstName: "Ram",
//   lastName: "Avtaar",
//   printName: function () {
//     console.log(this.firstName, this.lastName);
//   },
// };

// const obj2 = {
//   firstName: "Sita",
//   lastName: "Raman",
// };

// obj1.printName();
// obj1.printName.call(obj2);
// obj1.printName.myCall(obj2);

const obj1 = {
  color: "Red",
  company: "BMW",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchase ${this.color} - ${this.company} for ${currency}${price}`
  );
}

function myCall(context = {}, ...args) {
  const self = this;
  if (typeof self !== "function") {
    throw Error(this + " it is not callable");
  }

  // 1 Way   self.apply(context, [...args]);
  // 2 Way
  context.fn = self; // creating a new copy of calling function inside the passed context so that copy of new calling function has the passed context as this
  context.fn(...args);
}

Function.prototype.myCall = myCall;

purchaseCar.call(obj1, "$", 12345);
purchaseCar.myCall(obj1, "$", 12345);
// obj1.myCall(obj1, "$", 12345);
