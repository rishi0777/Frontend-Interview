function myReduce(cb, initialValue) {
  const self = this;
  let accumulator = initialValue;
  for (let i = 0; i < self.length; i++) {
    accumulator = accumulator ? cb(accumulator, self[i], i, self) : self[i];
  }
  return accumulator;
}

Array.prototype.myReduce = myReduce;
const arr = [1, 2, 3, 4, 5];
console.log(arr.myReduce((acc, cur) => (acc += cur), 0));
