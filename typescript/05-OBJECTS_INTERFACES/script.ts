const fillDatas = (datas: {
  name: string;
  price: number;
  keyboard: boolean;
}) => {
  document.body.innerHTML += `
  <div>
    <h2>${datas.name}</h2>
    <p>R$ ${datas.price}</p>
    <p>Inclui teclado: ${datas.keyboard ? 'Sim' : 'Não'}</p>
  </div>
  `;
};

fillDatas({
  name: 'Computador',
  price: 2000,
  keyboard: true,
});

fillDatas({
  name: 'Notebook',
  price: 2500,
  keyboard: false,
});
