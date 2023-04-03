document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});

let progress = 50;
function kekProgress() {
  progress = (progress + 25) % 100;
  document.querySelector(".front").style.clipPath = `inset(0 0 0 ${progress}%)`;
}
document.getElementById("kek").addEventListener("click", kekProgress);