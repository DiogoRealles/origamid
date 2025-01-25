// TYPE GUARD 01
/*
function typeGuard(value: any) {
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

console.log(typeGuard(200));
console.log(typeGuard('Hello World!'));
console.log(typeGuard(document.body));
*/
// ######################
// TYPE GUARD 02
/*
const obj = {
  name: 'Origamid',
};
if ('name' in obj) {
  console.log('Possui prop.');
}

interface iProduct {
  nome: string;
  preco: number;
}

async function FetchProduct() {
  const res = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await res.json();

  handleProduct(json);
}

const handleProduct = (data: iProduct) => {
  console.log(data);
  if ('nome' in data && 'preco' in data) {
    document.body.innerHTML = `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco}</p>
    `;
  }
};
FetchProduct();
*/
// ######################
