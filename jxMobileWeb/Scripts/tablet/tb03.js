$(function() {
	displayCondition(0);
	setGridData( getCarInfor());
	
	$(".cmn-navi-tab").click(function(){
		var tab = $(this).attr("data-tab");
		displayCondition(tab);
		setGridData( getCarInfor());
	});
	
	$("#carSearch").click(function(){
		var input = $("carNo").val();
		searchCar(input);
	});
	
	$("#carteSearch").click(function(){
		var input = $("carteNo").val();
		searchCar(input);
	});
	
});

function setupPopup(title) {
	$("div:jqmData(role='popup') h3").html(title);
	$("div:jqmData(role='popup') input[type='text']").val("");
}

function displayCondition(tab){
	$("[data-condition]").hide();
	$("[data-condition="+tab+"]").show();
}

function searchCar(carNo){
	var grildData = $(".cmn-detail-row");
	
	for(var i=0; i< grildData.length; i++){
		var row  = $(grildData[i]);
		var carno = row.find(".tb03-gc2").text();
		
		console.log(carno);
		
		if(carno.indexOf(carNo)<0){
			row.hide();
		}else{
			row.show();
		}
	}
}

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
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb03-gc2'>"+ detail.carNo +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb03-gc1'>"+ detail.carType +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l'>"+ detail.customerName +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l'>"+ detail.nameKana +"</div>"
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
			"carNo":"品川　301 か 1122(A)"
			,"carType":"デミオ"
			,"customerName":"品沢　百合子様"
			,"nameKana":"シナザワ　ユリコ"
		}
		,{
			"carNo":"品川　302 か 1122(A)"
			,"carType":"デミオ"
			,"customerName":"品沢　百合子様"
			,"nameKana":"シナザワ　ユリコ"
		}
		,{
			"carNo":"品川　303 か 1122(A)"
			,"carType":"デミオ"
			,"customerName":"品沢　百合子様"
			,"nameKana":"シナザワ　ユリコ"
		}
		,{
			"carNo":"品川　304 か 1122(A)"
			,"carType":"デミオ"
			,"customerName":"品沢　百合子様"
			,"nameKana":"シナザワ　ユリコ"
		}
	];
	
	return dummyData;
}