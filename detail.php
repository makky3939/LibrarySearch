<?php include './php/function.php'; ?>
<!DOCTYPE html>  <!--Copyright (C) 2013 makkysnote.org All Rights Reserved. -->
<html>
<?php head("詳細情報"); ?>

<body><div class="lsbackground"></div>
<?php navigation(); ?>
<div class="container">
<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>
<script src="./js/streetview.js" type="text/javascript"></script>
	
<?php include './php/db_Access.php'; ?>

<?php

$keyword = $_GET[id];
$COL_num = "COL 6";
$count = 0;

	$keyword = mb_substr($keyword, 0, 10);
	$keyword_like = keyword_check($keyword);
	$keyword = htmlspecialchars($keyword, ENT_QUOTES, 'UTF-8');
	
?>

<?php 

$access_key_id = 'AKIAJUPL3E3NWQCAA3BQ'; 
$secret_access_key = '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'; 

$baseurl = 'http://ecs.amazonaws.jp/onca/xml'; 
$params = array(); 
$params['Service']           = 'AWSECommerceService'; 
$params['AWSAccessKeyId'] = $access_key_id; 
$params['AssociateTag'] = 'makky-22'; 
$params['ResponseGroup'] = 'Images'; 
$params['Operation']        = 'ItemSearch'; 
$params['SearchIndex']    = 'Books'; 
$params['Timestamp']      = gmdate('Y-m-d\TH:i:s\Z'); 
$params['Keywords']       = $keyword;

ksort($params);
$string = ''; 

foreach ($params as $k => $v) {
  $string .= '&'.rfc3986_urlencode($k).'='.rfc3986_urlencode($v);
}

$string = substr($string, 1);

$parsed_url = parse_url($baseurl);
$str2sign = "GET\n{$parsed_url['host']}\n{$parsed_url['path']}\n{$string}";
$signature = base64_encode(hash_hmac('sha256', $str2sign, $secret_access_key, true));

$url = $baseurl.'?'.$string.'&Signature='.rfc3986_urlencode($signature);

$xml = simplexml_load_file($url);
?>

<?php
	
	$stmt = $pdo->query('SELECT * FROM tab3 WHERE `'.$COL_num.'` LIKE "'.$keyword_like.'"');
	
	stmt_check($stmt,$pdo);
	$count = $stmt->rowCount();
	
	$data = $stmt->fetch(PDO::FETCH_ASSOC);
	
	keyword_check($data);

?>

<?php

$tnp =substr($data["COL 4"], 0, 1);

if($tnp == 9){
	print('<script type="text/javascript">var panocode = "k_1";</script>');}

if($tnp == 8){
	print('<script type="text/javascript">var panocode = "j_1";</script>');}

if($tnp == 7){
	print('<script type="text/javascript">var panocode = "h_1";</script>');}
	
if($tnp == 6){
	print('<script type="text/javascript">var panocode = "j_2";</script>');}

if($tnp == 5){
	print('<script type="text/javascript">var panocode = "k_2";</script>');}

if($tnp == 4){
	print('<script type="text/javascript">var panocode = "j_4";</script>');}

if($tnp == 3){
	print('<script type="text/javascript">var panocode = "j_5";</script>');}

if($tnp == 2){
	print('<script type="text/javascript">var panocode = "g_6";</script>');}

if($tnp == 1){
	print('<script type="text/javascript">var panocode = "k_6";</script>');}

if($tnp == 0){
	print('<script type="text/javascript">var panocode = "j_6";</script>');}


	
print("<p>".$data["COL 7"]."についての情報を表示します</p>");

print('<div class="span4">');
foreach ($xml->Items->Item as $value) {
echo '<img src="' .$value->LargeImage->URL. '" width=100% height=auto />';
}
print('</div>');



print('<div class="span7">');


print("<blockquote>".$data["COL 4"]);print('</br>');
print($data["COL 6"]);print('</br>');

print('<h1>'.$data["COL 7"].'</h1>');
print('<small><cite title="Source Title">'.$data["COL 8"].'</cite></small>');










print('<dl">');
print('<dt>登録番号</dt><dd>'.$data["COL 1"].'</dd>');
print('<dt>資料区分</dt><dd>'.$data["COL 2"].'</dd>');
print('<dt>貸出区分</dt><dd>'.$data["COL 3"].'</dd>');




print('<dt>著者</dt><dd>'.$data["COL 9"].'</dd>');
print('<dt>著者かな</dt><dd>'.$data["COL 10"].'</dd>');



print('<dt>出版社</dt><dd>'.$data["COL 14"].'('.$data["COL 13"].')</dd>');
print('<dt>ページ数</dt><dd>'.$data["COL 15"].'</dd>');
print('<dt>大きさ</dt><dd>'.$data["COL 16"].'</dd>');



print('<dt>所在</dt><dd>'.$data["COL 20"].'</dd>');




print('</dl>');
print('</blockquote>');


print('</div>');
print('');

print('<div class="span12"><h2>StreetView</h2>');
print('	<div id="view"　></div>');
print('</div>');

$pdo = null;

?>
</div>
<?php foot(); ?>
</body>
</html>