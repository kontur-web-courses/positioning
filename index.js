var button_close = document.getElementById('close');
button_close.onclick  = function() {

    document.getElementById('hidden').classList.add("hide");
    document.getElementById('lightbox').classList.add("hide"); 
    };

progressBar();

function progressBar(){
    let line = document.getElementById('line');;
    let count=0;
    let timerId = setInterval(
        function() {    
    if(count<100)
    count+=1;
    line.style.width = count + "%";
    }, 27);
    setTimeout(() => {if(count>=100) clearInterval(timerId);}, 3000);
}
