document.querySelectorAll('.flip').forEach(el => {
  el.addEventListener('click', () => el.classList.toggle('flipped'));
});
