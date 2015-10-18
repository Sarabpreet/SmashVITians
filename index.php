<?php 



//if there is a post variable, dont show form.php else show. 
//if there is session variable, dont set session variable else set variable
// if(isset($_POST['regno']) && isset($_POST['name']))

if(isset($_COOKIE['score'])) {

	//if cookie is present...
						$clientScore=$_COOKIE['score']; //prints high score, for the day in client side.
						$topScore=getTopScore();		//prints high score, for the day in server side.
						
}

else {

			if(isset($_POST['regno'])) {
			setcookie('score','0',time()+3600,1);//sets score as 0 
			//if there is a variable called regno in request.
			//if register number isnt present


							if(isset($_COOKIE['score'])) {


														$clientScore=$_COOKIE['score']; //prints high score, for the day in client side.
														$topScore=getTopScore();		//prints high score, for the day in server side.
														echo $clientScore."<br>".$topScore;
							}
					
			}
			else {

				include 'form.php';
			}

			
}


function getTopScore (){
//functions that fetches data to get highest score in a minute.


return 4;

}
include 'header.php';
include 'footer.php';
 ?>

