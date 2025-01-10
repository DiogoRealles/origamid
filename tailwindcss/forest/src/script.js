const mobileButton = document.querySelector('#mobile-button');
const mobileMenu = document.querySelector('#mobile-menu');

mobileButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
});

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
});
