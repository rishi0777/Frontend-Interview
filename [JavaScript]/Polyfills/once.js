function once(cb, context) {
  let alreadyExecuted = false;

  return (...args) => {
    if (!alreadyExecuted) {
      alreadyExecuted = true;
      cb.call(context, ...args);
    }
  };
}

const helloFromRam = once((greet) =>
  console.log(`Hello From Ram ${greet ? greet : ""}`)
);

// helloFromRam("Good Morning");
helloFromRam();
helloFromRam();
