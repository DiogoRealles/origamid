// GENERICS 01
function retorno<variavel>(a: variavel): variavel {
  return a;
}
console.log('Generics 01');
console.log(retorno<string>('The Last of Us'));
console.log(retorno<number>(200));
console.log(retorno<boolean>(true));
console.log('\n');

// GENERICS 02
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas: string[] = [
  'Amora',
  'Banana',
  'Cereja',
  'Damasco',
  'Embaúba',
  'Framboesa',
  'Goiaba',
];
function firstFive<T>(lista: T[]): T[] {
  return lista.slice(0, 5);
}
console.log('Generics 02');
console.log(firstFive(numeros));
console.log(firstFive(frutas).map((item) => item.toUpperCase()));
console.log('\n');

// GENERICS 03
function notNull<T>(arg: T) {
  if (arg !== null) return arg;
  else return null;
}
console.log('Generics 03');
console.log(notNull('Diogo')?.toUpperCase());
console.log(notNull(200)?.toFixed());
console.log('\n');

// GENERICS 04
function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}
console.log('Generics 04');
tipoDado(true).dado;
tipoDado('Diogo').tipo;
tipoDado(200).tipo;
console.log('\n');
