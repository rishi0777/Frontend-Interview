// Remember arrow function wont work here because this inside arrow points to global this
function myMap(cb) {
  const self = this;
  const res = [];
  for (let i = 0; i < self.length; i++) {
    res.push(cb(self[i], i, self));
  }
  return res;
}

Array.prototype.myMap = myMap; // using prototypal inheritance
const arr = [1, 2, 3, 4, 5];
console.log(arr.myMap((el, ind) => el * 2));
