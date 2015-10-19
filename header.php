<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Smash VITians</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	
<!-- 

	<link href='https://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>

-->


<?php if($flag_score){

?> 

<div class="info">
	<p>Welcome <?php echo getClientName(); ?></p>
	<p>The highest score is : <?php echo $clientScore ;?></p>
	<p>Today's Highest Score is : <?php  echo $topScore;?></p>

</div>

<div class="chooseTarget box">
	
<h3>Choose your target</h3>


<div class="options">
	
	<div class="one"><h5>Random Batch Mates</h5><div class="random"></div></div>
	<div class="two"><h5>A known VITian</h5><div class="random"></div></div>

</div>
</div>

<div class="inputBatch box">
	
<h3>Enter the batch code()</h3>

<input type="text">
<input type="submit" name='batch'>
	
</div>

<div class="inputReg box">

		<h3>Enter the registration code</h3>
		<input type="text">
		<input type="submit" name='regno'>
	
</div>




<div class="gameCanvas box">
	<!-- global input would be changed here... -->
<div class="actor"></div>

</div>

<div class="shareCanvas box">
	



	
<h3>Your score is 256</h3>


<div class="options">
	
	<div class="one"><h5>Play Again</h5><div class="random"></div></div>
	<div class="two"><h5>Share on Facebook</h5><div class="random"></div></div>

</div>



</div>














			


	<?php } 


	else if($form) {

?>

<?php 

include 'form.php';



		}?>






<?php include 'fb.php'; ?>

