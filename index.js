let progress = document.querySelector(".progress");
let lightbox = document.querySelector(".lightbox");
let shadow = document.querySelector(".shadow");
let closeButton = document.querySelector(".close");
let width = 600;
let value = 0;

closeButton.addEventListener("click",()=> {
    lightbox.style.display = 'none';
    shadow.style.display = 'none';
})

let progress_bar = setInterval(()=>{
    value += 3;
    if (value >= width)
        clearInterval(progress_bar);
    progress.style.width = String(value +"px");
},15);

setTimeout(() => {
    let p = document.querySelector(".text");
    p.style.display = "block";
}, 3000)

function closeLightbox(){
    
} 