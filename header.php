<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Smash VITians</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/font-awesome.css">
	</head>
	<body>
		
		
		<link href='https://fonts.googleapis.com/css?family=Press+Start+2P' rel='stylesheet' type='text/css'>
		<?php if($flag_score){
		?>
		<div class="info">
			<!-- 	<p>Welcome <?php echo getClientName(); ?></p> -->
			<p class="left">Name: <?php echo '<span>'.getClientName().'</span>';?> </p>
			<p class="right">Highest Score: <?php  echo '<span>'.$clientScore.'</span>';?></p>
		</div>
		<div class="chooseTarget box trans">
			
			<h3>Smash? sure!! Who?</h3>
			<div class="options">
				
				<div class="one"><i class="fa fa-users"></i>
					<h5>Random Batch Mates</h5><div class="random"></div></div>
					<div class="two"><i class="fa fa-user"></i><h5>A known VITian</h5><div class="random"></div></div>
				</div>
			</div>
			<div class="inputBatch box trans">
				
				<h3>Victim's batch code </h3>
				<input type="text" id='batchCode'>
				<p class="small">The batch code only; for example, 14MCA for MCA 2014 Batch*.</p>
				<div class="getBatch btn">Go</div>
				
			</div>
			<div class="inputReg box trans">
				<h3>Enter victim's registration code</h3>
				<input type="text" id='regCode'>
				<p class="small">The full registration code: for example, 14MCA0020*.</p>
				<div class="getInputReg btn">Go</div>
			</div>
			<div class="gameCanvas box trans">
				<!-- global input would be changed here... -->
				<div class="hero"></div>
			</div>
			<div class="shareCanvas box trans">
				
				
				<h3>Your score is 256</h3>
				<div class="options">
					
					<div class="one"><i class="fa fa-repeat"></i><h5>Play Again</h5><div class="random"></div></div>
					<div class="two"><i class="fa fa-share"></i><h5>Share Score</h5><div class="random"></div></div>
				</div>
			</div>

			<div class="infoMeta"> <a href="sql/retrive.php">High Score</a> | <a href="clearcookie.php">Change Name</a> </div>
			
			<?php }
			else if(isset($form)) {
				if($form){
				
			?>
			<?php
			include 'form.php';
					}}
					else {
			include 'form.php';
			}?>
			<?php include 'fb.php'; ?>