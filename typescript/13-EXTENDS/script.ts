// EXTENDS 01
function extractText<T extends HTMLElement>(el: T) {
  return {
    texto: el.innerText,
    el,
  };
}
const link = document.querySelector('a');
if (link) {
  console.log(extractText(link).el.href);
}

// EXTENDS 02
const link2 = document.querySelector<HTMLAnchorElement>('.link');
link2?.href;

// GENERICS
async function getData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  return await res.json();
}

interface INotebook {
  nome: string;
  preco: number;
}

async function handleData() {
  const notebook = await getData<INotebook>(
    'https://api.origamid.dev/json/notebook.json'
  );

  console.log('Nome:', notebook.nome, '| PREÇO:', notebook.preco);
}
handleData();
