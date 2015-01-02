<?php include './php/function.php'; ?>
<!DOCTYPE html>  <!--Copyright (C) 2013 makkysnote.org All Rights Reserved. -->
<html>
<?php head("検索結果"); ?>

<body><div class="lsbackground"></div>
<?php navigation(); ?>
<div class="container">

<?php include './php/db_Access.php'; ?>

<?php

$a = checkbox_check($_POST[a]);
$b = checkbox_check($_POST[b]);
$c = checkbox_check($_POST[c]);
$d = checkbox_check($_POST[d]);
$e = checkbox_check($_POST[e]);
$f = checkbox_check($_POST[f]);
$g = checkbox_check($_POST[g]);
$h = checkbox_check($_POST[h]);
$i = checkbox_check($_POST[i]);
$j = checkbox_check($_POST[j]);
$k = checkbox_check($_POST[k]);
$m = checkbox_check($_POST[m]);
$l = checkbox_check($_POST[l]);
$n = checkbox_check($_POST[n]);
$o = checkbox_check($_POST[o]);
$p = checkbox_check($_POST[p]);
$q = checkbox_check($_POST[q]);
$r = checkbox_check($_POST[r]);
$s = checkbox_check($_POST[s]);
$t = checkbox_check($_POST[t]);
$u = checkbox_check($_POST[u]);

$SET1 = columnoption_check($_POST[SET1]);
$SET2 = columnoption_check($_POST[SET2]);

$C = column_check($_POST[C]);
$C2 = column_check($_POST[C2]);
$C3 = column_check($_POST[C3]);

$keyword = $_POST[keyword];
$keyword2 = $_POST[keyword2];
$keyword3 = $_POST[keyword3];

$keyword_like = keyword_check($keyword);
$keyword_like2 = "%${keyword2}%";
$keyword_like3 = "%${keyword3}%";

$keyword = htmlspecialchars($keyword, ENT_QUOTES, 'UTF-8');
$keyword2 = htmlspecialchars($keyword2, ENT_QUOTES, 'UTF-8');
$keyword3 = htmlspecialchars($keyword3, ENT_QUOTES, 'UTF-8');
	
$count = 0;

$stmt = $pdo->query("SELECT * FROM tab3 WHERE `${C}` LIKE '${keyword_like}' ${SET1} `${C2}` LIKE '${keyword_like2}'${SET2} `${C3}` LIKE '${keyword_like3}'");
	
	stmt_check($stmt,$pdo);
	$count = $stmt->rowCount();

?>

<?php
echo "<p>検索した結果".$count."件</p>";

table_out("head");

echo "<tr>";
if($a == 1){print('<th class="t_top">　登録番号</th>');}
if($b == 1){print('<th class="t_top">　資料区分</th>');}
if($c == 1){print('<th class="t_top">　貸出区分</th>');}
if($d == 1){print('<th class="t_top">　請求記号</th>');}
if($e == 1){print('<th class="t_top">　受入日</th>');}
if($f == 1){print('<th class="t_top">　ISBN</th>');}
if($g == 1){print('<th class="t_top">　書名</th>');}
if($h == 1){print('<th class="t_top">　書名(ｶﾅ)</th>');}
if($i == 1){print('<th class="t_top">　著者</th>');}
if($j == 1){print('<th class="t_top">　著者(ｶﾅ)</th>');}
if($k == 1){print('<th class="t_top">　内容</th>');}
if($m == 1){print('<th class="t_top">　件名</th>');}
if($l == 1){print('<th class="t_top">　出版年</th>');}
if($n == 1){print('<th class="t_top">　出版社</th>');}
if($o == 1){print('<th class="t_top">　ページ数</th>');}
if($p == 1){print('<th class="t_top">　大きさ</th>');}
if($q == 1){print('<th class="t_top">　金額</th>');}
if($r == 1){print('<th class="t_top">　受入先名称</th>');}
if($s == 1){print('<th class="t_top">　費用名称</th>');}
if($t == 1){print('<th class="t_top">　所在情報</th>');}
if($u == 1){print('<th class="t_top">　備考(寄贈者)</th>');}
echo "</tr>";

while ($data = $stmt->fetch(PDO::FETCH_ASSOC)) {
echo "<tr>";
		if($a == 1){query_out($data,"COL 1");}
		if($b == 1){query_out($data,"COL 2");}
		if($c == 1){query_out($data,"COL 3");}
		if($d == 1){query_out($data,"COL 4");}
		if($e == 1){query_out($data,"COL 5");}
		if($f == 1){query_out($data,"COL 6");}
		if($g == 1){query_out($data,"COL 7");}
		if($h == 1){query_out($data,"COL 8");}
		if($i == 1){query_out($data,"COL 9");}
		if($j == 1){query_out($data,"COL 10");}
		if($k == 1){query_out($data,"COL 11");}
		if($m == 1){query_out($data,"COL 12");}
		if($l == 1){query_out($data,"COL 13");}
		if($n == 1){query_out($data,"COL 14");}
		if($o == 1){query_out($data,"COL 15");}
		if($p == 1){query_out($data,"COL 16");}
		if($q == 1){query_out($data,"COL 17");}
		if($r == 1){query_out($data,"COL 18");}
		if($s == 1){query_out($data,"COL 19");}
		if($t == 1){query_out($data,"COL 20");}
		if($u == 1){query_out($data,"COL 21");}
echo "</tr>";
}

table_out("foot");

$pdo = null;

?>
</div>
<?php foot(); ?>
</body>
</html>