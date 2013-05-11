$(function() {
	setCarInfoGrid(getCarInfo());
	setGradeInfoGrid(getGradeInfo());
	setRecommendInfoGrid(dummyData);
	
	$("#tb15_1RecommendInfoListData .tb15_1-gc1").click(function() {
		var rowid = $(this).parent().data("rowid");
		var count = dummyData[rowid].OilAmount;
		if (count >= 0) {
			$("#rowid").val(rowid);
			$("#colid").val(COL_COUNT);
			$("#numDisp").empty().html(count);
		}
	});
	
	$("#popupCalculator .ui-btn").click(function() {
		onCalculatorInput($(this).text());
	});
	
});

function setCarInfoGrid(data){

	if(data != null && data != "undefine" && data != ""){
		
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gridColYear tb15_1-gc1'>"+ detail.year +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gridColModel tb15_1-gc1'>"+ detail.model +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gridColEngine tb15_1-gc1'>"+ detail.engine +"</div>"
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_1CarInfoListData").empty();
			$("#tb15_1CarInfoListData").append(insert);
		}
	}
}

function setGradeInfoGrid(data){

	if(data != null && data != "undefine" && data != ""){
		
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gridColGrade tb15_1-gc1'>"+ detail.grade +"</div>"
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_1GradeInfoListData").empty();
			$("#tb15_1GradeInfoListData").append(insert);
		}
	}
}

function setRecommendInfoGrid(data){
	if(data != null && data != "undefine" && data != ""){
		var insert = "";
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"' data-rowid='" + i + "'>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gc1'>"+ detail.Viscosity +"</div>";

			if (detail.OilAmount >= 0) {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gc1'><a href='#popupCalculator' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>"+ detail.OilAmount +"L</a></div>";
			} else {
				text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gc1'></div>";
			}
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gc1'>"+ detail.Fuel +"</div>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_1-gc1'>"+ detail.Standard +"</div>";
			text += "</div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_1RecommendInfoListData").empty();
			$("#tb15_1RecommendInfoListData").append(insert);
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

function setData(row, col, val) {
	var oriCount = dummyData[row].OilAmount;
	switch (col) {
		case COL_COUNT:
			var vf = parseFloat(val);
			dummyData[row].OilAmount = vf;
			break;
		default:
			return;
	}
	var thisrow = $("#tb15_1RecommendInfoListData>div").eq(row);
	$(".tb15_1-gc1 a", thisrow).text(dummyData[row].OilAmount + "L");
}


//////////////dummy data//////////////
var COL_COUNT = 2;

function getCarInfo(){
	var carInfoData = 
	[
		{
			"year":"平成14年08月～平成16年11月"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
		}
	];
	
	return carInfoData;
}

function getGradeInfo(){
	var gradeInfoData = 
	[
		{
			"grade":"Ｓ３００"
		}
	];
	
	return gradeInfoData;
}

var dummyData = 
[
	{
		"Viscosity":"10W-30"
		,"OilAmount":2.6
		,"Fuel":"ガソリン"
		,"Standard":"SJ"
	}
	,{
		"Viscosity":"10W-12"
		,"OilAmount":2.2
		,"Fuel":"ガソリン"
		,"Standard":"SJ"
	}
];
