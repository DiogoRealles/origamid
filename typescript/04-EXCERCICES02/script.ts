const toNumber = (value: number | string) => {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return +value;
  } else {
    throw 'Value deve ser um numero ou texto!';
  }
};

console.log(toNumber(37));
console.log(toNumber('47'));
// toNumber(true);
