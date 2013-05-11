$(function() {
	displayCondition(0);
	setGridData( getCarInfor());
	
	
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
			var carInf = detail.customerName.split(" ");
			var carInfImp = carInf[0]+"　"+carInf[1]+"　"+carInf[2]+"　"+carInf[3]
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
						//時間
						+"<div class='cmn-grid-cell cmn-grid-cell-l sp07-gc2'>"+ detail.carNo +"</div>"
						//ﾚｰﾝ
						+"<div class='cmn-grid-cell cmn-grid-cell-l sp07-gc1'>"+ detail.carType +"</div>"
						//車両
						+"<div class='sp07-grid-cell cmn-grid-cell-l sp07-gc3'>"
						//四div
						+"<div class='sp07-gc4'>"
						+"<div class='sp07-gc5'>"+carInf[0]+"</div>"
						+"<div class='sp07-gc6'>"+carInf[1]+"</div>"
						+"<div class='sp07-gc7'>"+carInf[2]+"</div>"
						+"<div class='sp07-gc8'>"+carInf[3]+"</div>"
						+"</div>"
						
						+"<div class='sp07-gc4'>"+carInf[4]+"</div>"
						+"</div>"
						
						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb03ListData").empty();
			$("#tb03ListData").append(insert);
			
		}
	}
}

function getCarInfor(){
	var dummyData = 
	[
		{
			"carNo":"12:36"
			,"carType":"１"
			,"customerName":"品川 300 さ 8562 ブリウス"
		}
		,{
			"carNo":"12:23"
			,"carType":"２"
			,"customerName":"練馬 300 さ 4512 GT-R"
		}
		,{
			"carNo":"12:20"
			,"carType":"３"
			,"customerName":"品川 300 れ 8722 RX-8"
		}
		,{
			"carNo":"12:19"
			,"carType":"４"
			,"customerName":"多摩 500 あ 4284 Fit"
		}
		,{
			"carNo":"12:19"
			,"carType":"５"
			,"customerName":"習志野 330 あ 1111 ノート"
		}
		,{
			"carNo":"12:11"
			,"carType":"７"
			,"customerName":"足立 500 あ 8014 パジェローMini"
		}
		,{
			"carNo":"12:01"
			,"carType":"１"
			,"customerName":"品川 500 あ 1620 Move ハリアー"
		}
		,{
			"carNo":"11:30"
			,"carType":"２"
			,"customerName":"品川 300 り 9999 ハリアー"
		}
		,{
			"carNo":"11:25"
			,"carType":"３"
			,"customerName":"練馬 300 す 　3 MiniCooper"
		}
	];
	
	return dummyData;
}