async function fetchProduct() {
  const res = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await res.json();
  showProduct(data);
}

fetchProduct();

interface IEmpresa {
  nome: string;
  fundacao: number;
  pais: string;
}
interface IProduct {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: IEmpresa;
  empresaMontadora: IEmpresa;
}

const showProduct = (data: IProduct) => {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>

      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>

      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `;
};
