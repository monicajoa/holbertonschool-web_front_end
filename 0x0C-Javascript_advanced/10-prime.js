#!/usr/bin/node

function countPrimeNumbers() {
  let j = 0;
  let flag = false;
  for (let i = 2; i <= 100; i++) {
    for (let k = i; k >= 2; k--) {
      if (i != k && i % k === 0) {
        flag = true;
      }
    }
    if (flag === false) {
      j++;
    }
    flag = false;
  }
  return j;
}
const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
