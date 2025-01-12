// STRING
const username: string = 'Diogo';
console.log(username, typeof username);

// NUMBER
const age: number = 37;
console.log(age, typeof username);

// BOOLEAN
const sleeping: boolean = false;
console.log(age, typeof username);

// OBJECT
const car: {
  brand: string;
  doors: number;
} = {
  brand: 'Audi',
  doors: 4,
};
console.log(car);

// ARRAY STRING
const fruits1: string[] = ['apple', 'banana', 'cherry', 'damasco'];
console.log(fruits1);

// ARRAY NUMBER
const fruits2: number[] = [5, 3, 7, 9];
console.log(fruits2);

// ARRAY BOOLEAN
const fruits3: boolean[] = [false, true, false];
console.log(fruits3);

// ARRAY TUPLE
const fruits4: [string, number] = ['', 9];
console.log(fruits4);

// FUNCTION STRING
const greeting = (name: string): string => {
  return `Hello ${name}!`;
};
console.log(greeting('Diogo'));

// FUNCTION NUMBER
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(4, 7));

// FUNCTION BOOLEAN
const biggest = (a: number, b: number): boolean => {
  return a > b;
};
console.log(biggest(4, 7));

// OBJECT
const nintendo = {
  name: 'Nintendo',
  price: '3000',
};
function transformPrice(product: { name: string; price: string }) {
  product.price = `R$ ${product.price}`;
  return product;
}
const newProduct = transformPrice(nintendo);
console.log(newProduct);

// TYPE GUARD
if (typeof username === 'string') {
  console.log(username.toUpperCase());
} else {
  console.log('Username não é uma string!');
}

// UNION TYPES
let total: string | number = 200;
console.log(total, typeof total);
total = '200';
console.log(total, typeof total);

// OPTIONAL CHANING
// const button = document.querySelector('button');
button?.click();
