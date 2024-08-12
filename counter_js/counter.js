// var counter = document.querySelector(".count");
var timeLeftSpan = document.querySelector(".timeleft .time");
var count= document.getElementById("count");
var add= document.getElementById("add");
let timer = 10;
let isTimerRunning = true;
let interval=setInterval(() => {
    if (timer > 0) {
        timer--;
        timeLeftSpan.innerHTML = timer;
    }else{
        stoptimer()
    }
}, 1000);
const stoptimer=()=>{
    isTimerRunning = false;
    clearInterval(interval); 
    add.removeEventListener("click", incrementCount); 
}
const incrementCount=()=>{
    if(isTimerRunning){
        count.textContent=parseInt(count.textContent)+1;
    }
    
}


add.addEventListener("click",incrementCount)