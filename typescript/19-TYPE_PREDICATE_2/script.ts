async function fetchProduct() {
  const res = await fetch(
    'https://ranekapi.origamid.dev/json/api/produto/notebook'
  );
  const json = await res.json();

  handleProduct(json);
}

fetchProduct();

interface iProduct {
  nome: string;
  preco: number;
}

function isProduct(value: unknown): value is iProduct {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'preco' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduct(data: unknown) {
  if (isProduct(data)) {
    console.log(data);
  }
}
