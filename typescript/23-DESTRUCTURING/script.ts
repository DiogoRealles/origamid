// DESTRUCTURING 01
const { body }: { body: HTMLElement } = document;
console.log(body);
// ###############

// DESTRUCTURING 02
interface iProduct {
  nome: string;
  preco?: number;
}

function handleData({ nome, preco }: iProduct) {
  console.log(nome.includes('book'));
  console.log(preco?.toFixed());
}

handleData({ nome: 'Notebook', preco: 3500 });
// ###############

// DESTRUCTURING 03
function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse Click em x: ${pageX}</h1>`;
  }
}

document.documentElement.addEventListener('click', handleClick);
// ###############

// DESTRUCTURING 04
function comparar(tipo: 'menor' | 'maior', ...numeros: number[]) {
  if (tipo === 'menor') {
    return Math.min(...numeros);
  }
  if (tipo === 'maior') {
    return Math.max(...numeros);
  }
}

console.log(comparar('menor', 1, 8, 4, 3, 7, 5, 10));
console.log(comparar('maior', 1, 8, 4, 3, 7, 5, 10));
// ###############
