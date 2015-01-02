<?php include './php/function.php'; ?>
<!DOCTYPE html>  <!--Copyright (C) 2013 makkysnote.org All Rights Reserved. -->
<html>
<?php head("Streetview検索"); ?>

<body><div class="lsbackground"></div>
<?php navigation(); ?>
<div class="container">

<?php include './php/db_Access.php'; ?>

<?php

$keyword = $_POST[key];
$COL_num = "COL 4";
$count = 0;

if($keyword == "a_1"){$keyword = 98;}

if($keyword == "b_2"){$keyword = 96;}
if($keyword == "b_4"){$keyword = 97;}

if($keyword == "c_1"){$keyword = 10;}
if($keyword == "c_2"){$keyword = 11;}
if($keyword == "c_3"){$keyword = 12;}
if($keyword == "c_4"){$keyword = 13;}

if($keyword == "d_1"){$keyword = 20;}
if($keyword == "d_2"){$keyword = 21;}
if($keyword == "d_3"){$keyword = 22;}
if($keyword == "d_4"){$keyword = 23;}

if($keyword == "e_1"){$keyword = 30;}
if($keyword == "e_2"){$keyword = 31;}
if($keyword == "e_3"){$keyword = 32;}
if($keyword == "e_4"){$keyword = 33;}

if($keyword == "f_1"){$keyword = 40;}
if($keyword == "f_2"){$keyword = 41;}
if($keyword == "f_3"){$keyword = 42;}
if($keyword == "f_4"){$keyword = 43;}

if($keyword == "g_1"){$keyword = 50;}
if($keyword == "g_2"){$keyword = 51;}
if($keyword == "g_3"){$keyword = 52;}
if($keyword == "g_4"){$keyword = 53;}
if($keyword == "g_5"){$keyword = 54;}
if($keyword == "g_6"){$keyword = 55;}

if($keyword == "h_1"){$keyword = 60;}
if($keyword == "h_2"){$keyword = 61;}
if($keyword == "h_3"){$keyword = 62;}
if($keyword == "h_4"){$keyword = 63;}
if($keyword == "h_5"){$keyword = 64;}
if($keyword == "h_6"){$keyword = 65;}

if($keyword == "i_1"){$keyword = 70;}
if($keyword == "i_2"){$keyword = 71;}
if($keyword == "i_3"){$keyword = 72;}
if($keyword == "i_4"){$keyword = 73;}
if($keyword == "i_5"){$keyword = 74;}
if($keyword == "i_6"){$keyword = 75;}

if($keyword == "j_1"){$keyword = 80;}
if($keyword == "j_2"){$keyword = 81;}
if($keyword == "j_3"){$keyword = 82;}
if($keyword == "j_4"){$keyword = 83;}
if($keyword == "j_5"){$keyword = 84;}
if($keyword == "j_6"){$keyword = 85;}

if($keyword == "k_1"){$keyword = 90;}
if($keyword == "k_2"){$keyword = 91;}
if($keyword == "k_3"){$keyword = 92;}
if($keyword == "k_4"){$keyword = 93;}
if($keyword == "k_5"){$keyword = 94;}
if($keyword == "k_6"){$keyword = 95;}

if($keyword == "m_2"){$keyword = 60;}
if($keyword == "m_3"){$keyword = 61;}
if($keyword == "n_3"){$keyword = 62;}
if($keyword == "l_3"){$keyword = 63;}
if($keyword == "l_2"){$keyword = 64;}

	$keyword_like = keyword_check($keyword);
	$keyword = htmlspecialchars($keyword, ENT_QUOTES, 'UTF-8');

	$stmt = $pdo->query('SELECT * FROM tab3 WHERE `'.$COL_num.'` LIKE "'.$keyword_like.'"');
	
	stmt_check($stmt,$pdo);
	$count = $stmt->rowCount();
?>

<?php

echo "<p>検索した結果".$count."件</p>";

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