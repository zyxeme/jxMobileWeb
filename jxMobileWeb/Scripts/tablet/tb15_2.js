$(function() {
	setCarInfoGrid(getCarInfo());
	setGradeInfoGrid(getGradeInfo());
	setRecommendInfoGrid(getRecommendInfo());
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
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColYear tb15_2-gc1'>"+ detail.year +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColModel tb15_2-gc1'>"+ detail.model +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColEngine tb15_2-gc1'>"+ detail.engine +"</div>"
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_2CarInfoListData").empty();
			$("#tb15_2CarInfoListData").append(insert);
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
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColGrade tb15_2-gc1'>"+ detail.grade +"</div>"
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_2GradeInfoListData").empty();
			$("#tb15_2GradeInfoListData").append(insert);
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
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColSize'>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColSize tb15_2-gc2'>"+ detail.Size+"</div>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColSize tb15_2-gc3'>";
			text += "<a href='#' data-rel='popup' data-position-to='window' data-inline='true' data-transition='pop'>他の推奨</a></div></div>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_2-gridColNote'>"+ detail.Note +"</div>";
			text += "</div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_2RecommendInfoListData").empty();
			$("#tb15_2RecommendInfoListData").append(insert);
		}
	}
}

//////////////dummy data//////////////
function getCarInfo(){
	var dummyData = 
	[
		{
			"year":"平成14年08月～平成16年11月"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
		}
	];
	
	return dummyData;
}

function getGradeInfo(){
	var dummyData = 
	[
		{
			"grade":"Ｓ３００"
		}
	];
	
	return dummyData;
}

function getRecommendInfo(){
	var dummyData = 
	[
		{
			"Size":"155/80R13"
			,"Note":""
		}		
	];
	
	return dummyData;
}