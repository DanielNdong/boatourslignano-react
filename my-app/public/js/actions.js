const button = document.querySelector('#buttonHeader');
const asideHeader = document.querySelector('#asidemain');
const asideInner = document.querySelector('#asideinner');

/* Show aside wrapper */
button.addEventListener('click', (e) => {
  asideHeader.classList.toggle('isActive');
});
