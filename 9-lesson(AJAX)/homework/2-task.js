//Create a function that returns a promise. The promise should resolve after a
//random delay (between 1 to 5 seconds) with a message like "Promise resolved after X seconds".

const randomDelay = Math.floor(Math.random() * 4000) + 1000;

const resolve = () => {
  const promise = new Promise((resolve, reject) => {
    console.log(`Promise resolved after ${randomDelay} seconds`);
    resolve();
  });
  return promise;
};

const setTimer = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, randomDelay);
  });
  return promise;
};

setTimer().then(() => {
  return resolve();
});

// const randomDelay = Math.floor(Math.random() * 4000) + 1000;

// const setTimer = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Promise resolved after ${randomDelay} seconds`);
//     }, randomDelay);
//   });
//   return promise;
// };

// setTimer().then(() => {
//   console.log("Done");
// });
