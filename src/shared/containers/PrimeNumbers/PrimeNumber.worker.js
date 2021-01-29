//Remember, don't use the import statement here.  It's not a ts file and won't be transpiled to something that IE can't read
const axios = require("axios");
const ctx = self;

//This method was pulled from the net.
const calculate = (limit) => {
  const sieve = [];
  const primes = [];
  let k;
  let l;

  sieve[1] = false;
  for (k = 2; k <= limit; k += 1) {
    sieve[k] = true;
  }

  for (k = 2; k * k <= limit; k += 1) {
    if (sieve[k] !== true) {
      continue;
    }
    for (l = k * k; l <= limit; l += k) {
      sieve[l] = false;
    }
  }
  sieve.forEach(function (value, key) {
    if (value) {
      primes.push(key);
    }
  });

  return primes;
};
//This method was pulled from the net.

ctx.addEventListener("message", async (event) => {
  const limit = event.data.limit;
  const primes = calculate(limit);
  ctx.postMessage({ primes });
});
