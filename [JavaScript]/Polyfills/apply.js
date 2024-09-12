const obj1 = {
  color: "Red",
  company: "BMW",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchase ${this.color} - ${this.company} for ${currency}${price}`
  );
}

function myApply(context = {}, args = []) {
  const self = this;
  if (typeof self !== "function") {
    throw new Error(this + " it is not callable");
  }

  if (!Array.isArray(args)) {
    throw new TypeError(args + " it is not an array");
  }
  // 1 Way   self.call(context, ...args);
  // 2 Way
  context.fn = self; // creating a new copy of calling function inside the passed context so that copy of new calling function has the passed context as this
  context.fn(...args);
}

Function.prototype.myApply = myApply;

purchaseCar.apply(obj1, ["$", 12345]);
purchaseCar.myApply(obj1, ["$", 12345]);
// obj1.myApply(obj1, "$", 12345);
