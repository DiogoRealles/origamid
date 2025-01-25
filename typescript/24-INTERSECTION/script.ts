// INTERSECTION 01
type tProduct = {
  price: number;
};

type tCar = {
  wheels: number;
  doors: number;
};

function handleProductCar(datas: tCar & tProduct) {
  datas.wheels;
  datas.doors;
  datas.price;
}

console.log(
  handleProductCar({
    doors: 4,
    price: 20000,
    wheels: 4,
  })
);
// #############

// INTERSECTION 02
type tCar2 = {
  wheels: number;
  doors: number;
};

type tCarWhitPrice = tCar2 & {
  price: number;
};
// #############
