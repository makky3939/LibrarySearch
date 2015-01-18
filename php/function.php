<?php

function head($title){

	if(!$title){
		$title = "<title>LibrarySearch</title>";
	}else{
		$title = "<title>".$title." | LibrarySearch</title>";
	}

echo '<head>
	<meta charset="utf-8">
	'.$title.'
	<meta name="viewport" content="width=device-width" />
	<link rel="icon" type="image/png" href="img/favicon.ico" />
	<link rel="apple-touch-icon-precomposed" href="img/webclip.png" />
	<meta name="author" content="小林 正樹">
	<meta name="description" content="キーワードによる検索だけでなく、図書館内のStreetViewを使って検索が出来るWebサービスです">
	<meta name="keywords" content="水戸工業高等学校,情報技術科,パノラマ撮影,StreetView,小林,正樹,Google,StreetViewを用いた図書情報システム,第２回,立命館,全国高校生ソフトウェア創作コンテスト,ICT,Challenge+R,2012,最優秀賞,第64回生徒研究発表会">
	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<link href="css/bootstrap.css" rel="stylesheet">
	<link href="css/bootstrap-responsive.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
</head>';

}

function foot(){

echo 
'<script type="text/javascript" src="./js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>';

}

function navigation(){

echo 
'<script src="./js/analytics.js"></script>
<div class="navbar navbar-fixed-top">
	<div class="navbar-inner">
	<div class="container">
		<a class="brand hidden-desktop" href="index">Library<span class="lsGreen">S</span>earch</a>
		<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">  
                <span class="icon-bar"></span>  
                <span class="icon-bar"></span>  
                <span class="icon-bar"></span>  
		</a>   
		<div class="nav-collapse collapse">
			<ul class="nav">
				<li><a href="index">Home</a></li>
					<li class="divider-vertical"></li>
				<li><a href="keyword.php">キーワード</a></li>
				<li><a href="keyword-multi.php">複数キーワード</a></li>
				<li><a href="streetview.php">StreetView</a></li>
					<li class="divider-vertical"></li>
				<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">その他 <b class="caret"></b></a>
                <ul class="dropdown-menu">
					<li class="divider"></li>
					<li><a href="http://makky.io/">開発者</a></li>
					<!--<li><a href="about_web">このWebサービスについて</a></li>-->
					<li><a href="terms.php">利用規約</a></li>
					<li><a href="http://blog.makky.io/contact/">お問い合わせ</a></li>
					<li class="divider"></li>
					<!--<li class="nav-header">Nav header</li>-->
				</ul>
				</li>
            </ul>
			<form class="navbar-form pull-right" action="result-keyword.php" method="POST"><div class="input-append">
				<input class="span2" type="text" NAME="result-keyword" placeholder="本のタイトルを入力">
				<button type="submit" class="btn">Search</button>
            </div></form>
		</div>
	</div>
	</div>
</div>
';

}

function query_out($data, $col){

	if($col == 'COL 7'){
		print('<td><a href="detail.php?id='.$data["COL 6"].'">');
		print($data[$col]);
		print("</a></td>");
	}else {
		print('<td>'.$data[$col]."</td>");
	}
	
}

function keyword_check($keyword){

	if(!$keyword){
		exit('<div class="alert alert-error">キーワードを入力してもう一度試してみて下さい。</div><form class="span6 offset3 form-search" action="result-keyword" method="POST"><input class="input-block-level" type="text" NAME="keyword" placeholder="本のタイトルを入力"><button type="submit" class="btn span3 offset1 margin-top10px">Sarch</button></form>');
	}else{
		$keyword_like = "%${keyword}%";
	}
	$keyword_like = htmlspecialchars($keyword_like, ENT_QUOTES, 'UTF-8');
	$keyword_like= $keyword_like;
	return $keyword_like;

}

function stmt_check($stmt, $pdo){

	if(!$stmt){
		$info = $pdo->errorInfo();
		//exit($info[2]);
		//exit("問題が発生しました.");
		exit('<div class="alert alert-error">別のキーワードを入力してもう一度試してみて下さい。</div><form class="span6 offset3 form-search" action="result-keyword" method="POST"><input class="input-block-level" type="text" NAME="keyword" placeholder="本のタイトルを入力"><button type="submit" class="btn span3 offset1 margin-top10px">Sarch</button></form>');
	}
	
}

function table_out($tag){

	if($tag == "head"){
		echo '<table class="table table-hover">';
	}else if($tag == "foot"){
		echo "</table>";
	}

}

function select_list($num){

if($num == 0){

echo '
<option value="1">登録番号</option>
	<option value="2">資料区分</option>
	<option value="3">貸出区分</option>
	<option value="4">請求記号</option>
	<option value="5">受入日</option>
	<option value="6">ISBN</option>
	<option value="7" selected>書名</option>
	<option value="8">書名(ｶﾅ)</option>
	<option value="9">著者</option>
	<option value="10">著者(ｶﾅ)</option>
	<option value="11">内容</option>
	<option value="12">件名</option>
	<option value="13">出版年</option>
	<option value="14">出版社</option>
	<option value="15">ページ数</option>
	<option value="16">大きさ</option>
	<option value="17">金額</option>
	<option value="18">受入先名称</option>
	<option value="19">費用名称</option>
	<option value="20">所在情報</option>
	<option value="21">備考(寄贈者)</option>
';

}else{

echo '
		<option value="0">AND</option>
		<option value="1">OR</option>
';

/*echo '
		<option value="0">AND</option>
		<option value="1">OR</option>
		<option value="2">NOT</option>
';*/

}

}



function rfc3986_urlencode($str)
{
  return str_replace('%7E', '~', rawurlencode($str));
}

function checkbox_check($checkbox){

	if($checkbox != 1){
		$checkbox = 0;
	}else{
		$checkbox = 1;
	}
	
	$checkbox = htmlspecialchars($checkbox, ENT_QUOTES, 'UTF-8');
	$checkbox = addslashes($checkbox);
	return $checkbox;
	
}

function columnoption_check($columnoption){

	if($columnoption){

		switch ($columnoption){
			case "0":
				$columnoption = "AND";
				break;
				
			case "1":
				$columnoption = "OR";
				break;
				
			/*case "2":
				$columnoption = "NOT";
				break;*/
				
			default:
				$columnoption = "AND";
		}
		
	}else{
	
		$columnoption = "AND";
		
	}
	
	$columnoption = htmlspecialchars($columnoption, ENT_QUOTES, 'UTF-8');
	$columnoption = addslashes($columnoption);
	return $columnoption;
	
}

function column_check($col){


	
		$col = (int)$col;
	
		if($col >= 1 && $col <= 21){
		
			$col = (string)$col;
		
			$col = "COL ".$col;
		
		}else{
		
			$col = "COL 7";
		
		}

	$col = htmlspecialchars($col, ENT_QUOTES, 'UTF-8');
	$col = addslashes($col);
	return $col;
	
}

?>

