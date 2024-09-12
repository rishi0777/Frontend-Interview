const obj1 = {
  color: "Red",
  company: "BMW",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchase ${this.color} - ${this.company} for ${currency}${price}`
  );
}

function myBind(context, ...args) {
  const self = this;

  if (typeof self !== "function") {
    throw new Error(this + " it is not callable");
  }

  return (...params) => {
    context.fn = self;
    context.fn(...args, ...params);
  };
}

Function.prototype.myBind = myBind;

const purchaseBMW = purchaseCar.bind(obj1);
purchaseBMW("$", 12345);
purchaseBMW("₹", 12345);

const purchaseMyBMW = purchaseCar.myBind(obj1);
purchaseMyBMW("$", 12345);
purchaseMyBMW("₹", 12345);
