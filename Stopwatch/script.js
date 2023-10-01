var hour = 0;
var minute = 0;
var second = 0;

var appendSecond = document.getElementById("second");
var appendMinute = document.getElementById("minute");
var appendHour = document.getElementById("hour");

var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

var timerInterval;
var isRunning = false;

function startTimer() {
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;
            hour++;
        }
    }

    appendSecond.innerHTML = second;
    appendMinute.innerHTML = minute;
    appendHour.innerHTML = hour;
}

startButton.onclick = function () {
    if (!isRunning) {
        timerInterval = setInterval(startTimer, 1000);
        isRunning = true;
    }
};

stopButton.onclick = function () {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
};

resetButton.onclick = function () {
    clearInterval(timerInterval);
    hour = 0;
    minute = 0;
    second = 0;
    appendSecond.innerHTML = second;
    appendMinute.innerHTML = minute;
    appendHour.innerHTML = hour;
    isRunning = false;
};
