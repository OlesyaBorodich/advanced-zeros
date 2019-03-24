module.exports = function getZerosCount(number, base) 
{
  const factors = (n) =>
   {
      const all = [];
      let del = 2;
      while (n >= 2) {
          if (n % del == 0) {
              all.push(del);
              n = n / del;
          }
          else {
              del++;
          }
      }
      const result = all.reduce(function (acc, el) {
          acc[el] = (acc[el] || 0) + 1;
          return acc;
      }, {});
      return result
  }
  const power = (n, N) =>
   {
      var counter = 0;
      for (var i = n; N / i >= 1; i *= n)
          counter += Math.floor(N / i);
      return counter;
  }
  var primes = factors(base);
  var res;
  for (key in primes)
   {
      if ((power(key, number) / primes[key]) < res || (!res)) {
          res = power(key, number) / primes[key]
      }
  }
  return Math.trunc(res)
}