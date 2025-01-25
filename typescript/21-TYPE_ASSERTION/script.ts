// TYPE ASSERTION 01
const link = document.querySelector('.link') as HTMLAnchorElement;
if (link) {
  console.log(link.text);
}
// #################

// TYPE ASSERTION 02
async function fetchProduct() {
  const res = await fetch('https://api.origamid.dev/json/notebook.json');
  return (await res.json()) as Promise<iProduct>;
}

interface iProduct {
  nome: string;
  preco: number;
}

async function handleProduct() {
  const product = await fetchProduct();
  console.log('Nome:', product.nome, '| R$', product.preco);
}
handleProduct();
// #################
