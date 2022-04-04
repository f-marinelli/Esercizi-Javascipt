function memoize(fn) {
  let cache = {};

  return (num) => {
    // console.log('////');
    if (cache.hasOwnProperty(num))
      return `Fetching from cache for ${cache[num]}`;
    result = fn(num);
    cache[num] = result;
    return result;
  };
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));
