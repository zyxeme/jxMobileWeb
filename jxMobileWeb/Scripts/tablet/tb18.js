$(function() {
	setGridData( getCarInfor());
});

function setGridData(data){

	if(data != null && data != "undefine" && data != ""){
		
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb18-gridCol1'>"+ detail.year +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb18-gridCol2'>"+ detail.grade +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb18-gridCol3'>"+ detail.model +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb18-gridCol4'>"+ detail.engine +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb18-gridCol5'>"+ detail.recommend +"</div>"
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb03ListData").empty();
			$("#tb03ListData").append(insert);
			
			$(".cmn-detail-row").click(function(){
				
				if(!$(this).hasClass("cmn-detail-select")){
					$(".cmn-detail-row").removeClass("cmn-detail-select");
					$(this).addClass("cmn-detail-select");
				}else{
					$(this).removeClass("cmn-detail-select");
				}
				
			});
		}
	}
}

function getCarInfor(){
	var dummyData = 
	[
		{
			"year":"平成14年08月～平成16年11月"
			,"grade":"Ｓ３００"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
			,"recommend":"○"	
		}
		,{
			"year":"平成14年08月～平成16年11月"
			,"grade":"Ｓ３００"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
			,"recommend":"○"	
		}
		,{
			"year":"平成14年08月～平成16年11月"
			,"grade":"Ｓ３００"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
			,"recommend":"○"	
		}
		,{
			"year":"平成14年08月～平成16年11月"
			,"grade":"Ｓ３００"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
			,"recommend":"○"	
		},{
			"year":"平成14年08月～平成16年11月"
			,"grade":"Ｓ３００"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
			,"recommend":"○"	
		},{
			"year":"平成14年08月～平成16年11月"
			,"grade":"Ｓ３００"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
			,"recommend":"○"	
		},{
			"year":"平成14年08月～平成16年11月"
			,"grade":"Ｓ３００"
			,"model":"TA-JZS160"
			,"engine":"2JZ-GE"
			,"recommend":"○"	
		}
	];
	
	return dummyData;
}