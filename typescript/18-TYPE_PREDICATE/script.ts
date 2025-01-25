// TYPE PREDICATE 01
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function handleData(data: unknown) {
  if (isString(data)) {
    return data.toLowerCase();
  }
}

console.log(handleData('OrigamiD'));
console.log(handleData(200)); // [undefined: Number not String]
// #################
