function identity(a: number): number;
function identity(a: string): string;
function identity(a: number | string): number | string {
  if (typeof a === 'number') {
    return Math.ceil(a);
  } else {
    return Math.ceil(+a).toString();
  }
}
console.log(identity(4.6));
console.log(identity(4.4));
console.log(identity('4.6'));
console.log(identity('4.4'));
