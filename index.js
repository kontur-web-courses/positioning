/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

document.querySelector(".closeModal").addEventListener('click', () => {
    document.querySelector('.modalWindow').style.visibility = 'hidden';
})
document.querySelector(".openModal").addEventListener('click', () => {
    document.querySelector('.modalWindow').style.visibility = 'visible';

})

let width = 0;
setInterval(() => {
    showProgress()
}, 10)

function showProgress() {
    let redProgressBar = document.querySelector('.redColorProgressBar')
    redProgressBar.style.clip = `rect(0 ${width+=1}px 40px 0)`
}
