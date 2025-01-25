function typeGuard(value: unknown) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

console.log(typeGuard('Hello World'));
console.log(typeGuard(30.21));
console.log(typeGuard(document.body));
