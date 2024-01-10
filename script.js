const day1=document.getElementById("days");
const hour1=document.getElementById("hours");
const minute1=document.getElementById("minutes");
const sec1=document.getElementById("seconds");




const newYear='1 Jan 2025';

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate= new Date();

    const totalSeconds=(newYearDate-currentDate)/1000;

    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;


    day1.innerHTML=days;
    hour1.innerHTML=hours;
    minute1.innerHTML=minutes;
    sec1.innerHTML=seconds;
    // console.log(days,hours,minutes,secondsff);
}

countdown();

setInterval(countdown,1000);