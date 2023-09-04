function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => promise.then(resolve).catch(reject));
  });
}

const testPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first promise");
});

const testPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "second promise");
});

const testPromise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "third promise");
});

race([testPromise1, testPromise2, testPromise3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

Promise.race([testPromise1, testPromise2, testPromise3])
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
