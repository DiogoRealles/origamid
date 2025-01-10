const video = document.querySelector('#video');
const temperature = document.querySelector('#temperature');
const weather = document.querySelector('#weather');
const week = document.querySelector('#week');

const random = Math.floor(Math.random() * 10) + 20;
temperature.innerText = `${random}°`;
weather.innerText = random < 25 ? `🌧️ ${random + 5}%` : `🌤️`;
const date = new Date();
week.innerText = date
  .toLocaleDateString('pt-BR', {
    weekday: 'long',
  })
  .replace('-feira', '');

video.src = random < 25 ? `./img/video_chuva.mp4` : `./img/video_sol.mp4`;

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
