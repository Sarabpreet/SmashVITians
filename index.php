<?php
$clientScore=0;
$flag_score=false;
//if there is a post variable, dont show form.php else show.
//if there is session variable, dont set session variable else set variable
// if(isset($_POST['regno']) && isset($_POST['nam
if(isset($_COOKIE['score'])) {
	//if cookie is present...
						$clientScore=getClientScore(); //prints high score, for the day in client side.
						$topScore=getTopScore();		//prints high score, for the day in server side.
						$flag_score=true;
}
else {
			if(isset($_POST['regno'])) {
										
						if(!$_POST['regno']==''){
									setcookie('name',$_POST['regno'],time()+3600,1);//sets score as 0
									setcookie('score',0,time()+3600,1);//sets score as 0
									//if there is a variable called regno in request.
									//if register number isnt present
											if(isset($_COOKIE['score'])) {
												//if cookie is present...
																	$clientScore=getClientScore(); //prints high score, for the day in client side.
																			$topScore=getTopScore();		//prints high score, for the day in server side.
																	$flag_score=true;
											}
											else {
echo '<script>  </script>';
}


}

}
else {
$form=true;
$flag_score=false;
}

}
function getClientScore (){
//functions that fetches data to get highest score in a day from client
if(isset($_COOKIE['score'])){
return $_COOKIE['score'];
}
else {
return 0;

}
}
function getClientName (){
//functions that fetches data to get highest score in a day from client
if(isset($_COOKIE['name'])){
return $_COOKIE['name'];
}
else {
return 'Random one';

}
}
function getTopScore (){
//functions that fetches data to get highest score in a minute.
return 4;
}
echo "<a href='clearcookie.php'> Clear Cookies </a>";
include 'header.php';
include 'footer.php';
?>