<?php 

if(isset($_GET['name']) && isset($_GET['score'])) {



$name=$_GET['name'];
$score=$_GET['score'];
$victim=$_GET['victim'];


			if(isset($_COOKIE['name']) && isset($_COOKIE['score'])) {



											if($score>$_COOKIE['score']) {
											setcookie('score',$score,time()+3600,1);//sets score as 0 
											include 'sql/insert.php';

											}
											else {

												include 'sql/insert.php';
											}


			}

			else {




									setcookie('name',$name,time()+3600,1);//sets score as 0 
									setcookie('score',$score,time()+3600,1);//sets score as 0 
									include 'sql/insert.php';


			}
									





}

else {

// echo "no value is being passed";

echo 'EROR 404';


}


 ?>