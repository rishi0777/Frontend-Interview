const sum = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(sum(1,2)(3)());

const sum2 = (a, b, c) => {
  return a + b + c;
};

const twoSumPlus3 = sum2.bind(this, 3);
console.log(twoSumPlus3(1, 2));
