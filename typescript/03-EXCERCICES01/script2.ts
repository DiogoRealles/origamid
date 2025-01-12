const input = document.querySelector('input');
const total = localStorage.getItem('total');

if (input && total) {
  input.value = total;
  calculatePercent(Number(input.value));
}

function calculatePercent(value: number) {
  const p = document.querySelector('p');

  if (p) {
    p.innerText = `Ganho total: R$ ${value + 100 - value * 0.2}`;
  }
}

function handleTotal() {
  if (input) {
    localStorage.setItem('total', input.value);
    calculatePercent(Number(input.value));
  }
}

if (input) {
  input.addEventListener('keyup', handleTotal);
}
