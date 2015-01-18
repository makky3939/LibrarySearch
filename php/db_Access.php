<?php
$database_info = array("name" => "library_search", "host" => "localhost", "account" => "library_search", "pass" => "library_search");
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