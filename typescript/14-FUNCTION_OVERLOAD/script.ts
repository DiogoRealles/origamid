// FUNCTION 01
function sum(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
console.log('FUNCTION 01');
console.log(sum(3, 8));
console.log(sum(3, 8, 4));
console.log('\n');

// FUNCTION 02
const sub = (a: number, b: number): number => a - b;
console.log('FUNCTION 02');
console.log(sub(3, 6));
console.log('\n');

// FUNCTION 03
function bgScreen(color: string): void {
  document.body.style.background = color;
}
// if (bgScreen('black')) {
//   console.log('Pintou a tela.');
// } else {
//   console.log('Não pintou a tela.');
// }
console.log('FUNCTION 03');
console.log('[ERROR] fn bgScreen não retorna nada/void');
console.log('\n');

// FUNCTION 04
console.log('FUNCTION 04');
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === 'string') {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}
console.log(normalizar(' ProdUto '));
console.log(normalizar([' AbacaXI ', 'BanANa']));
console.log('\n');
