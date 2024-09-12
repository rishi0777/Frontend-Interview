const memoize = (cb, context) => {
  let res = {};

  return (...args) => {
    if (!res[JSON.stringify(...args)])
      return (res[JSON.stringify(...args)] = cb.call(context, ...args));

    return res[JSON.stringify(...args)];
  };
};

const clumsySquare = (num1, num2) => {
  for (let i = 1; i < 1000000000; i++) {}

  return num1 * num2;
};

const memoizedSquare = memoize(clumsySquare);

console.time("First Call");
console.log(clumsySquare(1234, 5678));
console.timeEnd("First Call");
console.time("Second Call");
console.log(clumsySquare(1234, 5678));
console.timeEnd("Second Call");

console.log(
  "--------------------------------- Memoized -----------------------------------"
);
console.time("First Memoized Call");
console.log(memoizedSquare(1234, 5678));
console.timeEnd("First Memoized Call");
console.time("Second Memoized Call");
console.log(memoizedSquare(1234, 5678));
console.timeEnd("Second Memoized Call");
