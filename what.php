<?php 

if(isset($_GET['name']) && isset($_GET['score'])) {



$name=$_GET['name'];
$score=$_GET['score'];

									setcookie('name',$name,time()+3600,1);//sets score as 0 
									setcookie('score',$score,time()+3600,1);//sets score as 0 

}

else {

// echo "no value is being passed";

}


 ?>