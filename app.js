const day = document.getElementById("day");
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec =document.getElementById("sec");

const currentYear = new Date().getMonth();
console.log(currentYear);
const newYear = new Date(`28 Feb 2025 ${currentYear +1} 19:00:00`);
console.log(newYear);


function coutdownTimer(){
const todayDate = Date.now();
console.log(todayDate)

const gap = newYear - todayDate;
console.log(gap);

const d =Math.floor(gap /1000 / 60 / 60 / 24);
const h =Math.floor((gap /1000 / 60 / 60 ) % 24);
const m =Math.floor((gap /1000 / 60 )% 60);
const s =Math.floor((gap /1000 )%60 );

console.log(d);
console.log(h);
console.log(m);
console.log(s);

day.innerHTML = d < 10 ? "0" + d : d;
hrs.innerHTML = h < 10 ? "0" + h : h;
min.innerHTML = m < 10 ? "0" + m : m; 
sec.innerHTML = s < 10 ? "0" + s : s ;


} 
setInterval(coutdownTimer,1000);
