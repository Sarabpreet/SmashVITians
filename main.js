// var one=document.querySelector('.one');
// one.addEventListener('click',next);
// var two=document.querySelector('.two');
// two.addEventListener('click',two);

// global variables
var rn=document.querySelector('.regName');
var inf=document.querySelector('.info');
var ct=document.querySelector('.chooseTarget');
var ib=document.querySelector('.inputBatch');
var gb=document.querySelector('.getBatch');
var ir=document.querySelector('.inputReg');
var gir=document.querySelector('.getInputReg');
var gc=document.querySelector('.gameCanvas');
var sc=document.querySelector('.shareCanvas');
var box=document.querySelectorAll('.box');

for (var i = 0; i < box.length; i++) {
	box[i].style.display='none';
};

// first canvas
box[0].style.display='block';
box[0].querySelector('.one').addEventListener('click',one);
box[0].querySelector('.two').addEventListener('click',two);
box[1].querySelector('.getBatch').addEventListener('click',getBatchCode);
document.querySelector('.getInputReg').addEventListener('click',getRegCode);

//second canvas 

function one() {
		box[0].style.display='none';
		box[1].style.display='block';
}
function two() {
		box[0].style.display='none';
		box[2].style.display='block';
}
function getBatchCode(){

var batchNo=box[1].querySelector('#batchCode').value;
alert(batchNo);
		box[1].style.display='none';
		box[3].style.display='block';
		timefunk();
}

function getRegCode(){

var RegNo=box[2].querySelector('#regCode').value;
alert(RegNo);
		box[2].style.display='none';
		box[3].style.display='block';
		timefunk();
}


function timefunk(){


setInterval(a,600);
count=0;
function a(){
	count=count+1;
	if(count<=3) {

			box[3].innerHTML="<h1 class='big'>"+count+"</h1>";

	}
	if(count==4) {

	box[3].innerHTML="<h1 class='big'> GO GO GO </h1>";

	}
	if(count>=4 && count >=6){

	box[3].innerHTML="";

	}
	else {

		console.log('err');

	}
}

}






