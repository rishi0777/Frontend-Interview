// const arr = [0, 1, 2, 3, 4, 5];
// const newArr = arr.filter((val) => val < 3).map((val) => val + 5);
// console.log(newArr);

const mssg = "hi my name is ram";
const newMssg = mssg
  .split(" ")
  .map((val) => val[0].toLocaleUpperCase() + val.slice(1))
  .join(" ");
console.log(newMssg);
