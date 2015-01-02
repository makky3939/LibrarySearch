<?php include './php/function.php'; ?>
<!DOCTYPE html>  <!--Copyright (C) 2013 makkysnote.org All Rights Reserved. -->
<html>
<?php head("キーワード検索"); ?>

<body><div class="lsbackground"></div>
<?php navigation(); ?>
<div class="container">
	
<h1>キーワード検索</h1>

	<form class="span6 offset3 form-search" action="result-keyword.php" method="POST">
		<input class="input-block-level" type="text" NAME="keyword" placeholder="本のタイトルを入力">
		<button type="submit" class="btn span3 offset1 margin-top10px">Sarch</button>
	</form>
	
</div>

<?php foot(); ?>
</body>
</html>