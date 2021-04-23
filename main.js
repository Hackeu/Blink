let tab = "Welcome to the shop";
let i = 0;
let temps=100;
function write(){
    let wel = document.querySelector('.welcome');
    let cursor = document.querySelector('.cursor');
    if(i<tab.length){
        wel.textContent += tab.charAt(i);
        i++;
    }
    else{
        wel.textContent = '';
        i=0;
    }
    if(i==tab.length){
        temps=3000;
        cursor.classList.add('blink');
    }
    else{
        temps=100;
        cursor.classList.remove('blink');
    }
    setTimeout(write,temps);
}
write();