<?php include './php/function.php'; ?>
<!DOCTYPE html>  <!--Copyright (C) 2013 makkysnote.org All Rights Reserved. -->
<html>
<?php head("キーワード検索"); ?>

<body><div class="lsbackground"></div>
<?php navigation(); ?>
<div class="container">

<h1>複数キーワード検索</h1>

<FORM ACTION="result-keyword-multi" METHOD="POST">

	<select name="C" size="1">
		<?php select_list(0); ?>
	</select>
	<INPUT TYPE="text" SIZE="60" NAME="keyword" placeholder="1番目のキーワードを入力">
	<br><br>

	<select name="C2" size="1"> 
		<?php select_list(0); ?>
	</select>
	<INPUT TYPE="text" SIZE="60" NAME="keyword2">
	<select name="SET1" size="1">
		<?php select_list(1); ?>
	</select>
	<br><br>

	<select name="C3" size="1">
		<?php select_list(0); ?>
	</select>
	<INPUT TYPE="text" SIZE="60" NAME="keyword3">
	<select name="SET2" size="1">
		<?php select_list(1); ?>
	</select>
	<br><br>

	<div class="buttons">
		<button TYPE="submit" class="btn">Search</button>
		<button TYPE="reset" class="btn btn-danger">Reset</button>
	</div> 
	<br><br>
	
<p>表示する項目を選択できます</p>
<table width="600px">
<tr>
	<td>
		<input type="checkbox" name="a" value="1" checked>登録番号<br>
		<input type="checkbox" name="b" value="1">資料区分<br>
		<input type="checkbox" name="c" value="1">貸出区分<br>
		<input type="checkbox" name="d" value="1">請求記号<br>
	</td>
	<td>
		<input type="checkbox" name="e" value="1">受入日<br>
		<input type="checkbox" name="f" value="1">ISBN<br>
		<input type="checkbox" name="g" value="1"checked>書名<br>
		<input type="checkbox" name="h" value="1">書名(ｶﾅ)<br>
	</td>
	<td>
		<input type="checkbox" name="i" value="1"checked>著者<br>
		<input type="checkbox" name="j" value="1">著者(ｶﾅ)<br>
		<input type="checkbox" name="k" value="1">内容<br>
		<input type="checkbox" name="m" value="1">件名<br>
	</td>
	<td>
		<input type="checkbox" name="l" value="1"checked>出版年<br>
		<input type="checkbox" name="n" value="1">出版社<br>
		<input type="checkbox" name="o" value="1">ページ数<br>
		<input type="checkbox" name="p" value="1"checked>大きさ<br>
	</td>
	<td>
		<input type="checkbox" name="q" value="1">金額<br>
		<input type="checkbox" name="r" value="1">受入先名称<br>
		<input type="checkbox" name="s" value="1">費目名称<br>
		<input type="checkbox" name="t" value="1">所在情報<br>
	</td>
	<td>
		<input type="checkbox" name="u" value="1">備考(寄贈者)<br>
	</td>
</tr>
</table>

</FORM>

</div>

<?php foot(); ?>
</body>
</html>