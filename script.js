const burger = document.getElementById('burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
