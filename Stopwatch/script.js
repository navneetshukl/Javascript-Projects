
    var hour = 0;
    var minute = 0;
    var second = 0 ;

    var appendSecond=document.getElementById("second")
    var appendMinute=document.getElementById("minute")
    var appendHour=document.getElementById("hour")

    var start=document.getElementById("start")
    var stop=document.getElementById("stop")
    var reset=document.getElementById("reset")

    time=0;

    function startTimer(){

        time++
        appendSecond.innerHTML=time

    }
    start.onclick=setInterval(startTimer,1000)

