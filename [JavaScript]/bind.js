let obj = {
  firstName: "Sita",
  lastName: "Raman",
};

const printName = function (city, state) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      city +
      " present in " +
      state
  );
};

const printMyName = printName.bind(obj);
printMyName();

// function myBind(context, ...args) {
//   const self = this;
//   return function (...params) {
//     self.call(context, ...args, ...params);
//   };
// }

// Function.prototype.myBind = myBind;
// const printMyName2 = printName.myBind(obj, "Ayodhya");
// printMyName2("UP");
