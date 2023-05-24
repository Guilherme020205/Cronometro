var sec = 00;
var min = 00;
var hor = 00;
var interval;

function twoDigits(digit){
    if(digit < 10){
        return('0' + digit)
    }else{
        return(digit)
    }
}
function start() {
    watch()
    interval = setInterval(watch, 1000);
}
function pause() {
    clearInterval(interval);
}
function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('watch').innerText = "00:00:00";

}

//watch = relógio
function watch() {
    sec++
    if (sec == 60) {
        min++;
        sec = 00;
        if (min == 60) {
            min = 0;
            hor++

        }
    }
    document.getElementById('watch').innerText = twoDigits(hor) + ":" + twoDigits(min) + ":" + twoDigits(sec);

}