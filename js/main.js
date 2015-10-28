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

//second canvas 











// functions 



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

}

function game() {

			
			right.innerHTML='Score: 0' ; 
			console.log("game");
			tick2=setInterval(changePostion,600);
			count=0;

}


function score(){

	Scount++;
	right.innerHTML='Score: '+Scount; 

}

function share(){

gc.style.display='none';
sc.style.display='block';
sc.querySelector('h3').innerHTML="Your Score is "+Scount;
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

alert('you have sucessfully posted score on facebook wall');
sc.style.display='none';
Scount=0;
count=0;
box[0].style.display='block';


});



}





function changePostion () {
			count++;
			var Scount  
			console.log('working');
					if(count<60) {
						left.innerHTML='Time:'+count;  
					
						if(batchNo!=='0') {



								var random=getRandomInt(10,99);
								var batchnum=batchNo;
								console.log(batchNo);
								var regnum = batchnum+"00"+random;
								var finalurl='https://academics.vit.ac.in/student/view_photo_2.asp?rgno='+regnum;


						}

						else if(RegNo!=='0'){

								
								var batchnum=RegNo;
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
alert(batchNo);
		box[1].style.display='none';
		box[3].style.display='block';
		timefunk();
}

function getRegCode(){

RegNo=box[2].querySelector('#regCode').value;
alert(RegNo);
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






