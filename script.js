let startTime = 0;
let elapsed = 0;
let interval;

function startTimer(){
    if(interval) return;

    startTime = Date.now() - elapsed;

    interval = setInterval(function(){

        elapsed = Date.now() - startTime;

        const timeEl = document.getElementById("time");

        let seconds = Math.floor(elapsed / 1000);
        let milliseconds = Math.floor((elapsed % 1000) / 10);

        timeEl.textContent = 
            seconds + ":" + (milliseconds < 10 ? "0" : "") + milliseconds;

    }, 10);
}

function resetTimer(){
    clearInterval(interval);
    interval = null;

    elapsed = 0;

    document.getElementById("time").textContent = "0:00";
}

function pauseTimer(){
    clearInterval(interval);
    interval = null;
    const timeEl = document.getElementById("time");
    timeEl.style.color = "white";
}