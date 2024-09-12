function myFilter(cb) {
  const self = this;
  const res = [];
  for (let i = 0; i < self.length; i++) {
    if (cb(self[i], i, self)) res.push(self[i]);
  }
  return res;
}

Array.prototype.myFilter = myFilter; // using prototypal inheritance
const arr = [1, 2, 3, 4, 5];
console.log(arr.myFilter((el, ind) => el % 2!==0));
