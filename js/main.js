// var one=document.querySelector('.one');
// one.addEventListener('click',next);
// var two=document.querySelector('.two');
// two.addEventListener('click',two);
// global variables
var rn=document.querySelector('.regName');
var inf=document.querySelector('.info');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
var ct=document.querySelector('.chooseTarget');
var ib=document.querySelector('.inputBatch');
var gb=document.querySelector('.getBatch');
var ir=document.querySelector('.inputReg');
var gir=document.querySelector('.getInputReg');
var gc=document.querySelector('.gameCanvas');
var sc=document.querySelector('.shareCanvas');
var box=document.querySelectorAll('.box');
var count=0;
var tick2;
var Scount=0;
var RegNo='0';
var batchNo='0';
var invalid;
var name=inf.querySelector('.left span').innerHTML;
var pscore=inf.querySelector('.right span').innerHTML;
var batchnum;
for (var i = 0; i < box.length; i++) {
box[i].style.display='none';
};
// first canvas
box[0].style.display='block';
box[0].querySelector('.one').addEventListener('click',one);
box[0].querySelector('.two').addEventListener('click',two);
box[1].querySelector('.getBatch').addEventListener('click',getBatchCode);
document.querySelector('.getInputReg').addEventListener('click',getRegCode);
var hero=box[3].querySelector('.hero');
hero.style.display='none';
var Scount=0;
function appendHero(){
sc.style.display='none';
gc.style.display='block';
gc.innerHTML='<div class="hero"></div>';
hero=box[3].querySelector('.hero');
hero.style.top=getRandomInt(-40,390)+'px';
hero.style.left=getRandomInt(-40,840)+'px';
game();
console.log('hi');
hero.addEventListener("click",score);
hero.className="hero";
}
function game() {

right.innerHTML='Score: 0' ;
console.log("game");
tick2=setInterval(changePostion,600);
count=0;
}
function score(){
hero.className="hero ani";
Scount++;
right.innerHTML='Score: '+Scount;
}
function share(){
			gc.style.display='none';
			sc.style.display='block';
			sc.querySelector('h3').innerHTML="Your Score is "+Scount;
			if(Scount>=pscore) {
			postScore(name,Scount,batchnum);
			}
			else {
			postScore(name,pscore);
			}
			sc.querySelector('.one').addEventListener('click',function(){
			// appendHero();
			// Scount=0;
			// count=0;
			sc.style.display='none';
			Scount=0;
			count=0;
			box[0].style.display='block';
			});
			sc.querySelector('.two').addEventListener('click',function(){
			sc.style.display='none';
			Scount=0;
			count=0;
			box[0].style.display='block';

			// reseting 
				batchNo=0;
				RegNo=0;

			});
}
function changePostion () {
hero.className="hero";
count++;
var Scount
console.log('working');
if(count<60) {
left.innerHTML='Time:'+count;

if(batchNo!=='0') {
var random=getRandomInt(10,99);
batchnum=batchNo;
console.log(batchNo);
var regnum = batchnum+"00"+random;
var finalurl='https://academics.vit.ac.in/student/view_photo_2.asp?rgno='+regnum;
}
else if(RegNo!=='0'){

batchnum=RegNo;
console.log(RegNo);
var regnum = batchnum+random;
var finalurl='https://academics.vit.ac.in/student/view_photo_2.asp?rgno='+RegNo;
}
else {
invalid=True;
}
hero=box[3].querySelector('.hero');
hero.style.top=getRandomInt(-40,390)+'px';
hero.style.left=getRandomInt(-40,840)+'px';
hero.style.background='url('+finalurl+')';
hero.style.backgroundSize='cover';
}
if(count==61) {
left.innerHTML='Time: 60';
window.clearInterval(tick2);
share();
// send it to the server.

//get the confirmation
//print
}
else {

}
}
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;

}
function one() {
box[0].style.display='none';
box[1].style.display='block';
}
function two() {
box[0].style.display='none';
box[2].style.display='block';
}
function getBatchCode(){
batchNo=box[1].querySelector('#batchCode').value;
box[1].style.display='none';
box[3].style.display='block';
timefunk();
}
function getRegCode(){
RegNo=box[2].querySelector('#regCode').value;
box[2].style.display='none';
box[3].style.display='block';
timefunk();
}
function timefunk(){
var tick=setInterval(a,600);
count=0;
function a(){
count=count+1;
if(count<=3) {
box[3].innerHTML="<h1 class='big'>"+count+"</h1>";
}
if(count>=4 && count<=6) {
box[3].innerHTML="<h1 class='big'> GO GO GO </h1>";
}
if(count==7){
box[3].innerHTML="";
window.clearInterval(tick);
count=0;
console.log("ticker cleared");
appendHero();
}
else {

}
}
}
function postScore(user,score,batchnum) {

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (xhttp.readyState == 4 && xhttp.status == 200) {
// obj = JSON.parse(xhttp.responseText);
// 	 var doc=document.querySelector('#demo');
// 	 doc.innerHTML=xhttp.responseText;
// // o=obj;
// // recieveObject(o);

}
}
xhttp.open("GET","what.php?score="+score+"&"+"name="+user+"&"+"victim="+batchnum,true);
xhttp.send();
console.log("sent");
}