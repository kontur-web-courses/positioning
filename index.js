const pbar = document.querySelector('.progress-bar .bg');
pbar.style.width = '100%';
const iterations = 100;
const interval = 3000 / iterations;
let i = 0;

setInterval(() => {
  pbar.style.width = `${++i}%`;
  if (i === iterations) {
      i = 0;
  }
}, interval);