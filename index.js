/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
document.addEventListener('DOMContentLoaded', () => {
    let progress = 0; 
    const interval = 30;
    const duration = 3000;
    const step = interval / duration * 100;
  
    const progressElement = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
  
    const intervalId = setInterval(() => {
      progress += step;
      if (progress >= 100) {
        progress = 100;
        clearInterval(intervalId);
      }
  
      progressElement.style.width = `${progress}%`;}, interval);
  });
  