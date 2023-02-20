let hi = "hello";
let timeoutPromise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("1 sec");
  }, 1000);
})

timeoutPromise.then(console.log);

import add from './util';
const value = add(1,2);

console.log(value);