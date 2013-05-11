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
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_3-gridColYear tb15_3-gc1'>"+ detail.year +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_3-gridColModel tb15_3-gc1'>"+ detail.model +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_3-gridColEngine tb15_3-gc1'>"+ detail.engine +"</div>"
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_3CarInfoListData").empty();
			$("#tb15_3CarInfoListData").append(insert);
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
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb15_3-gridColGrade tb15_3-gc1'>"+ detail.grade +"</div>"
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_3GradeInfoListData").empty();
			$("#tb15_3GradeInfoListData").append(insert);
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
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_3-gridColModelR tb15_3-gc1'>"+ detail.Model+"</div>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb15_3-gridColNote tb15_3-gc1'>"+ detail.Note +"</div>";
			text += "</div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb15_3RecommendInfoListData").empty();
			$("#tb15_3RecommendInfoListData").append(insert);
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
			"Model":"34B19R"
			,"Note":""
		}		
	];
	
	return dummyData;
}