//Create a promise that resolves to the string "Hello, Promises!"

const hello = () => {
  const promise = new Promise((resolve, reject) => {
    console.log("Hello, Promises!");
    resolve();
  });
  return promise;
};

hello();
