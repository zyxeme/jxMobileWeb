$(function() {
	setGridData(dummyData);
	calcSum();
	setServiceArea();

	$("#tb09ListData .tb09-gc4").click(function() {
		var rowid = $(this).parent().data("rowid");
		var count = dummyData[rowid].count;
		if (count >= 0) {
			$("#rowid").val(rowid);
			$("#colid").val(COL_COUNT);
			$("#numDisp").empty().html(count);
		}
	});

	$("#tb09ListData .tb09-gc5").click(function() {
		var rowid = $(this).parent().data("rowid");
		var price = dummyData[rowid].price;
		if (price >= 0) {
			$("#rowid").val(rowid);
			$("#colid").val(COL_PRICE);
			$("#numDisp").empty().html(price);
		}
	});

	$("#tb09ListData .tb09-gc6").click(function() {
		var rowid = $(this).parent().data("rowid");
		var amount = dummyData[rowid].amount;
		if (amount >= 0) {
			$("#rowid").val(rowid);
			$("#colid").val(COL_AMOUNT);
			$("#numDisp").empty().html(amount);
		}
	});

	$(".tb09-service-area input[type=checkbox]").click(function() {
		onServiceChange(this);
	});

	$("#popupCalculator .ui-btn").click(function() {
		onCalculatorInput($(this).text());
	});
});

function setGridData(){
	if(dummyData != null && dummyData != "undefine" && dummyData != ""){
		var insert = "";
		for(var i=0; i < dummyData.length;i++){
			var detail = dummyData[i];
			var attr = "";
			if (detail.isShow == false) {
				attr += "cmn-hidden ";
			} 
			var text =  "<div class=' cmn-detail-row "+ attr +"' data-rowid='" + i + "'>";
			text += "<input type='hidden' value='" + detail.id + "'>";
			if (detail.nameHasLink) {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc1'><a href='#todo' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>"+ detail.name +"</a></div>";
			} else {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc1'>"+ detail.name +"</div>";
			}
			if (detail.size != null && detail.size != "undefine" && detail.size != "") {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc2'><a href='#todo' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>"+ detail.size +"</a></div>";
			} else {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc2'></div>";
			}
			
			if (detail.stdTime >= 0) {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc3'>"+ detail.stdTime + "分" +"</div>";
			} else {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc3'></div>";
			}
			if (detail.count >= 0) {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc4'><a href='#popupCalculator' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>"+ detail.count + detail.unit +"</a></div>";
			} else {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc4'></div>";
			}
			if (detail.price >= 0) {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc5'><a href='#popupCalculator' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>￥"+ formatNumber(detail.price) +"</a></div>";
			} else {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc5'></div>";
			}
			if (detail.amount >= 0) {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc6'><a href='#popupCalculator' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>￥"+ formatNumber(detail.amount) +"</a></div>";
			} else {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb09-gc6'><a href='#popupCalculator' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>無料</a></div>";
			}
			text += "</div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb09ListData").empty();
			$("#tb09ListData").append(insert);
			setRowColor();
			
			$(".cmn-detail-row").click(function(){
				if(!$(this).hasClass("cmn-detail-select")){
					$(".cmn-detail-select").removeClass("cmn-detail-select");
					$(this).addClass("cmn-detail-select");
				}else{
					$(this).removeClass("cmn-detail-select");
				}
			});
		}
	}
}

function onCalculatorInput(n) {
	var curNum = $("#numDisp").html();
	var row = parseInt($("#rowid").val());
	var col = parseInt($("#colid").val());
	n = "" + n;
	switch (n) {
		case "OK":
			setData(row, col, curNum);
			return;
		case "ESC":
			return;
		case "BS":
			curNum = curNum.substr(0, curNum.length - 1);
			if (curNum == "") curNum = 0;
			break;
		case "C":
			curNum = 0;
			break;
		case "0":
		case "00":
			if (curNum == "0") {
				return;
			}
			curNum += n;
			break;
		case ".":
			if (curNum.indexOf(".") > 0) {
				return;
			}
			curNum += n;
			break;
		default:
			if (curNum == "0") {
				curNum = n;
			} else {
				curNum += n;
			}
			break;
	}
	
	$("#numDisp").empty().html(curNum);
}

function formatNumber(n) {
	var s = "" + n;
	var res = "";
	while (s.length > 3) {
		res = "," + s.substr(s.length-3, 3) + res;
		s = s.substr(0, s.length-3);
	}
	res = s + res;
	return res;
}

function setData(row, col, val) {
	var oriCount = dummyData[row].count;
	var oriPrice = dummyData[row].price;
	var oriAmount = dummyData[row].amount;
	switch (col) {
		case COL_COUNT:
			var vf = parseFloat(val);
			dummyData[row].count = vf;
			dummyData[row].amount = parseInt(vf * oriPrice);
			break;
		case COL_PRICE:
			var vi = parseInt(val);
			dummyData[row].price = vi;
			dummyData[row].amount = parseInt(vi * oriCount);
			break;
		case COL_AMOUNT:
			dummyData[row].amount = parseInt(val);
			break;
		default:
			return;
	}
	var thisrow = $("#tb09ListData>div").eq(row);
	$(".tb09-gc4 a", thisrow).text(dummyData[row].count + dummyData[row].unit);
	if (parseInt(dummyData[row].count * dummyData[row].price) != dummyData[row].amount) {
		$(".tb09-gc5 a", thisrow).text("*");
	} else {
		$(".tb09-gc5 a", thisrow).text("￥" + formatNumber(dummyData[row].price));
	}
	$(".tb09-gc6 a", thisrow).text("￥" + formatNumber(dummyData[row].amount));
	calcSum();
}

function setRowColor() {
	$("#tb09ListData .cmn-detail-select").removeClass("cmn-detail-select");
	$("#tb09ListData .cmn-detail-odd").removeClass("cmn-detail-odd");
	$("#tb09ListData>div:not(.cmn-hidden):odd").addClass("cmn-detail-odd");
}

function calcSum() {
	var sumTime = 0;
	var sumAmount = 0;
	for(var i=0; i<dummyData.length;i++){
		var detail = dummyData[i];
		if (detail.isShow) {
			if (detail.stdTime > 0) sumTime += detail.stdTime;
			if (detail.amount > 0) sumAmount += detail.amount;
		}
	}
	$("#sumTime").val(sumTime);
	$("#sumAmount").val("￥" + formatNumber(sumAmount));
}

function setServiceArea() {
	for(var i=0; i<dummyData.length;i++){
		var detail = dummyData[i];
		switch (detail.id) {
			case CHECK_ID_1:
				if (detail.isShow) {
					$(".tb09-service-area #" + CHECK_ID_1).click();
				}
				break;
			case CHECK_ID_2:
				if (detail.isShow) {
					$(".tb09-service-area #" + CHECK_ID_2).click();
				}
				break;
			case CHECK_ID_3:
				if (detail.isShow) {
					$(".tb09-service-area #" + CHECK_ID_3).click();
				}
				break;
			case CHECK_ID_4:
				if (detail.isShow) {
					$(".tb09-service-area #" + CHECK_ID_4).click();
				}
				break;
		}
	}
}

function deleteRow() {
	var row = $("#tb09ListData>div.cmn-detail-select");
	if (row == null || row == "undefine" || row.length == 0) {
		//todo: alert msg?
		return;
	}
	$(row).addClass("cmn-hidden");
	var id = $("input[type=hidden]", row).val();
	switch (id) {
		case CHECK_ID_1:
			$(".tb09-service-area #" + CHECK_ID_1).click();
			break;
		case CHECK_ID_2:
			$(".tb09-service-area #" + CHECK_ID_2).click();
			break;
		case CHECK_ID_3:
			$(".tb09-service-area #" + CHECK_ID_3).click();
			break;
		case CHECK_ID_4:
			$(".tb09-service-area #" + CHECK_ID_4).click();
			break;
		default:
			calcSum();
			setRowColor();
			break;
	}
}

function onServiceChange(obj) {
	var id = $(obj).attr("id");
	for(var i=0; i<dummyData.length;i++){
		if (id == dummyData[i].id) {
			//unchecked -> checked
			if ($("span.ui-icon-checkbox-on", $(obj).parent()).length == 0) {
				$("#tb09ListData input[type=hidden][value='" + id + "']").parent().removeClass("cmn-hidden");
				dummyData[i].isShow = true;
			} else {
				$("#tb09ListData input[type=hidden][value='" + id + "']").parent().addClass("cmn-hidden");
				dummyData[i].isShow = false;
			}
		}
	}
	calcSum();
	setRowColor();
}

//////////////////////dummy data////////////////////////

var COL_COUNT = 4;
var COL_PRICE = 6;
var COL_AMOUNT = 7;

var CHECK_ID_1 = "s001";
var CHECK_ID_2 = "s002";
var CHECK_ID_3 = "s003";
var CHECK_ID_4 = "s004";

var dummyData = 
[
	{
		"id":"001"
		,"name":"ＳＵＳＴＩＮＡ"
		,"nameHasLink":false
		,"size":"0W-20"
		,"stdTime":-1
		,"count":3.9
		,"unit":"L"
		,"price":2100
		,"amount":8190
		,"isShow":true
	}
	,{
		"id":"002"
		,"name":"オイル交換作業"
		,"nameHasLink":false
		,"size":""
		,"stdTime":15
		,"count":-1
		,"unit":""
		,"price":-1
		,"amount":-1
		,"isShow":true
	}
	,{
		"id":"003"
		,"name":"オイルオイルフィルター"
		,"nameHasLink":true
		,"size":"EO-48"
		,"stdTime":-1
		,"count":1
		,"unit":"個"
		,"price":1260
		,"amount":1260
		,"isShow":true
	}
	,{
		"id":"s001"
		,"name":"オイルフィルター交換"
		,"nameHasLink":false
		,"size":""
		,"stdTime":5
		,"count":-1
		,"unit":""
		,"price":-1
		,"amount":-1
		,"isShow":true
	}
	,{
		"id":"s002"
		,"name":"エンジン内部洗浄"
		,"nameHasLink":false
		,"size":""
		,"stdTime":10
		,"count":3.9
		,"unit":""
		,"price":2100
		,"amount":1260
		,"isShow":true
	}
	,{
		"id":"004"
		,"name":"ブリヂストン　ECOPIA"
		,"nameHasLink":false
		,"size":"205/55R16"
		,"stdTime":-1
		,"count":1
		,"unit":"セット"
		,"price":12800
		,"amount":12800
		,"isShow":true
	}
	,{
		"id":"005"
		,"name":"タイヤ交換"
		,"nameHasLink":false
		,"size":""
		,"stdTime":20
		,"count":1
		,"unit":"セット"
		,"price":12800
		,"amount":12800
		,"isShow":true
	}
	,{
		"id":"s003"
		,"name":"タイヤ廃棄料"
		,"nameHasLink":false
		,"size":""
		,"stdTime":-1
		,"count":1
		,"unit":"セット"
		,"price":420
		,"amount":420
		,"isShow":true
	}
	,{
		"id":"s004"
		,"name":"バッテリー廃棄料"
		,"nameHasLink":false
		,"size":""
		,"stdTime":-1
		,"count":1
		,"unit":"セット"
		,"price":520
		,"amount":520
		,"isShow":false
	}
];
