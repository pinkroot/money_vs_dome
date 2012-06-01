function submitFunc() {
  var money = $("#money").val();
  var one_yen_diameter = 2; // 2cm
  var one_yen_space = 1 * 1 * 3.14;
  var money_size = money * one_yen_space; // cm^2
  money_size = money_size / 10000; // m^2
  
  var dome_size = 46755; // m^2
  
  var compare = money_size / dome_size;
  
  compare = Math.round(compare * 1000000) / 1000000;

	var str = "私の所持金を1円玉に両替すると、東京ドーム" + compare + "個分の面積になります。";
	
	$("#str").html(str + "<a href=\"https://twitter.com/intent/tweet?text=" + str + " http://shun-ichiro.com/vs_dome/ @pinkroot\" target=\"_blank\">" + "<img src=\"./img/tweet.gif\" alt=\"ツイートする\">" + "</a>");

}

// http://d.hatena.ne.jp/kokoromo/20090113/1231828845 より
function zentohan(obj){
	if(typeof(obj.value)!="string")return false;
	var han= '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@-.,:';
	var zen= '１２３４５６７８９０ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ＠－．，：';
	var word = obj.value;
	for(i=0;i<zen.length;i++){
		var regex = new RegExp(zen[i],"gm");
		word = word.replace(regex,han[i]);
	}
	obj.value = word;
}