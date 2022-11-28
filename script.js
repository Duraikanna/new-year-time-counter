const day=document.querySelector('#days');
const horus=document.querySelector('#horus');
const min=document.querySelector('#min');
const sec=document.querySelector('#secounds');

function updatetime(){
const currentyear=new Date().getFullYear();
const newyear=new Date(`january 1 ${currentyear+1} 00:00:00`);
const currentdate=new Date();
const diff=newyear-currentdate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60)
day.innerHTML=d;
horus.innerHTML=h<10?"0"+h:h;
min.innerHTML=m<10?"0"+m:m;
sec.innerHTML=s;
}
setInterval(updatetime,1000);
