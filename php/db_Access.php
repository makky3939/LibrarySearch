<?php
$database_info = array("name" => "LAA0199859-zjzlds", "host" => "mysql570.phy.lolipop.jp", "account" => "LAA0199859", "pass" => "ioZpYKF7");
//var_dump($database_info);
try{
	$pdo = new PDO('mysql:dbname='.$database_info["name"].'; host='.$database_info["host"].'', ''.$database_info["account"].'', ''.$database_info["pass"].'');
}catch(PDOException $e){
	//exit('データベースに接続できませんでした。' . $e->getMessage());
	exit("データベースに接続できませんでした.");
}

$stmt = $pdo->query('SET NAMES utf8');
if (!$stmt) {
	$info = $pdo->errorInfo();
	//exit($info[2]);
	exit("問題が発生しました.");
}
?>