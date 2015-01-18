<?php include './php/function.php'; ?>
<!DOCTYPE html>  <!--Copyright (C) 2013 makkysnote.org All Rights Reserved. -->
<html>
<?php head("Streetview検索"); ?>

<body><div class="lsbackground"></div>
<?php navigation(); ?>
<div class="container">
<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
<script src="./js/streetview.js" type="text/javascript"></script>

<h1>Streetview検索</h1>

<div id="view">　</div>
	<form class="span6 offset3 form-search" action="result-streetview.php" method="POST">
	<input id="m" class="invisible" type="text" NAME="key">
		
		<button type="submit" class="btn span3 offset1 margin-top10px">この付近を検索</button>
	</form>
</div>

<?php foot(); ?>
</body>
</html>