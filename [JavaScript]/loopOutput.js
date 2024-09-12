const arr = [3, 4, 5, 6];
arr.fo = "hi";

for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}

console.log(arr)