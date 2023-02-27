const hour = document.getElementById('hour');
const minute = document.getElementById('min');
const second = document.getElementById('sec');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const display = document.getElementById('text');
var x = document.getElementById("myAudio");

var interval = null;//For making the timer Zero when refreshing
var Total = 0;// 

function playAudio() { 
    x.play(); 
}

start.addEventListener('click',()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000);   
    display.innerText = "Timer started";
});
reset.addEventListener('click',()=>{
    clearInterval(interval);
    hour.value = "Hour";
    minute.value = "Minute";
    second.value = "Second";
    
});

totalValue = ()=>{
    Total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}
Timer = ()=>{
    totalValue();
    Total--;

    if(Total>=0){
        var hr = Math.floor(Total/3600);
        var min = Math.floor((Total/60) - (hr*60));
        var sec = Total - ((hr*3600) + (min*60));

        hour.value = hr;
        minute.value = min;
        second.value = sec;
    }
  
    else{
         alert("Time is Up...");
         if(Timer === 0){
            playAudio();
         }
   }

}

