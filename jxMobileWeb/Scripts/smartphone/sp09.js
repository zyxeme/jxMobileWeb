$(function() {
	callMemo();
	$("[data-radio]").click(function(){
		addRadioEvent(this);
	});
	
});


function addRadioEvent(radio){
		var id = $(radio)[0].id;
		var target;
		if(id.indexOf("radio-fl-1-ok")==0){
			target = id.replace("radio-fl-1-ok","");
			$("#radioOk"+target).show();
			$("#radioAttention"+target).hide();
		}else if(id.indexOf("radio-fl-1-attention")==0){
			target = id.replace("radio-fl-1-attention","");
			$("#radioOk"+target).hide();
			$("#radioAttention"+target).show();
		}
}

var tabIndex = 0;

function callMemo() {
	var row = "<div>"
	          +"<fieldset data-role='controlgroup' data-type='horizontal' data-mini='true'>"
	          +"<input type='radio' name='radio-fl-1"+tabIndex+"' id='radio-fl-1-ok"+tabIndex+"' data-radio='tabIndex' value='0' checked='checked' >"
	          +"<label for='radio-fl-1-ok"+tabIndex+"'>"+"洗車"+"</label>"
	          +"<input type='radio' name='radio-fl-1"+tabIndex+"' id='radio-fl-1-attention"+tabIndex+"' data-radio='tabIndex' value='1'  >"
	          +"<label for='radio-fl-1-attention"+tabIndex+"'>"+"カーケア"+"</label>"
	          +"</fieldset>"
              +"</div>"
              //洗車場合
              +"<div class='radio-fl-1-ok' id='radioOk"+tabIndex+"'>"
              +"<div data-role='fieldcontain' >"
			  +"<select>"
			  +"<option>"+"ご提案商品"+"</option>"
			  +"<option value='1'>"+"虫脂取り"+"</option>"
			  +"<option value='2'>"+"タールピッチ除去"+"</option>"
			  +"<option value='3'>"+"ホイールクリーニング"+"</option>"
			  +"<option value='4'>"+"下回り洗車"+"</option>"
			  +"<option value='5'>"+"鉄粉除去"+"</option>"
			  +"<option value='6'>"+"下地処理"+"</option>"
			  +"</select>"
			  +"</div>"
			  
              +"<div data-role='fieldcontain'  class='radio-fl-1-ok"+tabIndex+"'>"
              +"<a data-role='button' data-inline='true' class='sp09-gc10'>"+"ご提案時期"+"</a>"
			  +"</div>"
			  +"</div>"
			  
			  
			  //カーケア場合
			  +"<div class='radio-fl-1-attention' id='radioAttention"+tabIndex+"'>"
			  +"<div data-role='fieldcontain'>"
			  +"<select>"
			  +"<option>"+"ご提案商品"+"</option>"
			  +"<option value='1'>"+"タイヤ"+"</option>"
			  +"<option value='2'>"+"ワイパー"+"</option>"
			  +"<option value='3'>"+"ヘッドライト"+"</option>"
			  +"<option value='4'>"+"ストップランプ"+"</option>"
			  +"<option value='5'>"+"ウインカーATF/CVTF"+"</option>"
			  +"<option value='6'>"+"バッテリー"+"</option>"
			  +"<option value='7'>"+"ラジエター液"+"</option>"
			  +"<option value='8'>"+"ブレーキフルード"+"</option>"
			  +"<option value='9'>"+"パワステオイル"+"</option>"
			  +"<option value='10'>"+"エンジンオイル"+"</option>"
			  +"</select>"
			  +"</div>"
              
              +"<div data-role='fieldcontain' id='sp09-select' class='sp09-gc5 radio-fl-1-attention"+tabIndex+"'>"
			  +"<select >"
			  +"<option>"+"ご提案時期"+"</option>"
			  +"<option  value='1'>"+"1ヶ月後"+"</option>"
			  +"<option  value='2'>"+"2ヶ月後"+"</option>"
			  +"<option  value='3'>"+"3ヶ月後"+"</option>"
			  +"<option  value='4'>"+"4ヶ月後"+"</option>"
			  +"<option  value='5'>"+"5ヶ月後"+"</option>"
			  +"<option  value='6'>"+"6ヶ月後"+"</option>"
			  +"<option  value='7'>"+"7ヶ月後"+"</option>"
			  +"<option  value='8'>"+"8ヶ月後"+"</option>"
			  +"<option  value='9'>"+"9ヶ月後"+"</option>"
			  +"<option  value='10'>"+"10ヶ月後"+"</option>"
			  +"<option  value='11'>"+"11ヶ月後"+"</option>"
			  +"<option  value='12'>"+"12ヶ月後"+"</option>"
			  +"</select>"
			  +"</div>"
			  +"</div>"

	$("#onClickButton").append(row);
	$.mobile.pageContainer.trigger("create");
	tabIndex++;
	
	$("[data-radio]").click(function(){
		addRadioEvent(this);
	});
}
function chan(){
	var val = $("#sctId").val();
	if(val != 0){
		var text = $("#sctId").find("option:selected").text();
		$("#textarea-1").text("").val(text);
	}else{
		$("#textarea-1").text("").val(""); 
	}
}