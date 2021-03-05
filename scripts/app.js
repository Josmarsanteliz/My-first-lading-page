const btnEl = document.getElementById('btn');
const menuEl = document.getElementById('menu');
const cancelEl = document.getElementById('cancel');


btn.addEventListener('click', () => {
  menuEl.classList.add('right');
});


cancelEl.addEventListener('click', () => {
  menuEl.classList.remove('right');
})
