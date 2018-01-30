// log the `rnd` result in the console using all three async techniques.

const randomNumber = () => {
  return Math.random();
}

// 1. Make it wait for 1 sec. with `setTimeout` and log it on main function
const timeoutRandomNumber = (cb) => {
  setTimeout(function () {
    cb(rangedRandomNumber(randomNumber(),14,42));
  },1000);
}

// 2. Now wrap the timeout version to work with promises
const promiseRandomNumber = (cb) => {
  const prome = new Promise((resolve) => {
    resolve(setTimeout(() => {
      timeoutRandomNumber(cb);
    },1000));
  });
  prome.then(timeoutRandomNumber(cb));

}

// 3. Finally, code a final version with async await.
async function asyncRandomNumber (cb) {
  const result = await promiseRandomNumber(cb);
}

const rangedRandomNumber = (base, min, max) => {
  return Math.floor((base*(max-min))+min);
}

const main = () => {
  const rnd = randomNumber();
  console.log(rangedRandomNumber(rnd, 14, 42));
  function cb (data) {
    console.log(data);
  }

  // timeoutRandomNumber(cb);
  // promiseRandomNumber(cb);
  asyncRandomNumber(cb);
}

main();