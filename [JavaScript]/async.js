const foo = async () => {
  return "Hello World";
};

const res = foo();
console.log(res);

// First tell me the output -> Promise 
// Second how you can get the value of Hello World in console.log(res) line
(async () => {
  const res = await foo();
  console.log(res);
})();
