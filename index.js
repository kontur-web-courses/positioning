/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

setTimeout(() => {
  const progress = document.querySelector(".progress__redWrapper");

  let percentage = 0;
  let id = setInterval(() => {
    progress.style.width = `${percentage}%`;
    percentage += 3;
    if (percentage > 100) {
      progress.style.width = `100%`;
      clearInterval(id);
    }
  }, 100);
}, 100);
