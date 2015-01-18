<?php include './php/function.php'; ?>
<!DOCTYPE html>  <!--Copyright (C) 2013 makkysnote.org All Rights Reserved. -->
<html>
<?php head("検索結果"); ?>

<body><div class="lsbackground"></div>
<?php navigation(); ?>
<div class="container">

<?php include './php/db_Access.php'; ?>

<?php

$keyword = $_POST[keyword];
$COL_num = "COL 7";
$count = 0;

	$keyword_like = keyword_check($keyword);
	$keyword = htmlspecialchars($keyword, ENT_QUOTES, 'UTF-8');

	$stmt = $pdo->query('SELECT * FROM book WHERE `'.$COL_num.'` LIKE "'.$keyword_like.'"');
	
	stmt_check($stmt,$pdo);
	$count = $stmt->rowCount();

?>

<?php

echo "<p>".$keyword."で検索した結果".$count."件</p>";

table_out("head");

echo '<tr class="t_top">
<th class="t_top">請求記号</th>
<th class="t_top">書名</th>
<th class="t_top">著者名</th>
<th class="t_top">出版社</th>
</tr>';

while ($data = $stmt->fetch(PDO::FETCH_ASSOC)) {
	echo "<tr>";
		query_out($data,"COL 4");
		query_out($data,"COL 7");
		query_out($data,"COL 9");
		query_out($data,"COL 14");
	echo "</tr>";
}

table_out("foot");

$pdo = null;

?>
</div>
<?php foot(); ?>
</body>
</html>
