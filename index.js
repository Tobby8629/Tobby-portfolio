const hamburger = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
const panel = document.querySelector('.panel');
const cancel = document.querySelector('#cancel-panel');

hamburger.addEventListener('click', () => {
  menu.classList.add('absolute');
});

cancel.addEventListener('click', () => {
  menu.classList.remove('absolute');
});

panel.addEventListener('click', () => {
  menu.classList.remove('absolute');
});
