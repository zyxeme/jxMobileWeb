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
		var carno = row.find(".sp08-gc2").text();
		
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
			var carInf = detail.carType.split(" ");
			var carInfImp = carInf[0]+" "+carInf[1]+" "+carInf[2]+" "+carInf[3]
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
						//時間表示
						+"<div class='cmn-grid-cell cmn-grid-cell-l sp08-gc2'>"+ detail.carNo +"</div>"
						//詳細内容
						+"<div class='sp08-grid-cell cmn-grid-cell-l sp08-gc1'>" 
							//第一行
							+"<div class='sp08-gc5'>"
							+"<div class='sp08-g5'>"+carInf[0]+"</div>"
							+"<div class='sp08-g6'>"+carInf[1]+"</div>"
							+"<div class='sp08-g7'>"+carInf[2]+"</div>"
							+"<div class='sp08-g8'>"+carInf[3]+"</div>"
							+"</div>"
							+"<div class='sp08-gc5'>"
							//第二行左
							+"<div class='sp08-gc4 sp08-gc9'>"+carInf[4] +"</div>" 
							//第二行右
							+"<div>"+detail.customerName +"</div>" 
							+"</div>" 
						+"</div>"

						+"</div>";
			insert += text;
		}
		
		if(insert != null && insert != "undefine" && insert != ""){
			$("#sp08ListData").empty();
			$("#sp08ListData").append(insert);
			$(".cmn-detail-row").click(function(){
			if(!$(this).hasClass("cmn-detail-select")){
				$(".cmn-detail-row").removeClass("cmn-detail-select");
				$(this).addClass("cmn-detail-select");
			}else{
				$(this).removeClass("cmn-detail-select");
			}
			window.location.href="SP_09.html";
				
			});
		}
	}
}

function getCarInfor(){
	var dummyData = 
	[
		{
			"carNo":"12:36"
			,"carType":"品川 　300 さ 8562 プリウス"
			,"customerName":"201303210010"
		}
		,{
			"carNo":"12:23"
			,"carType":"練馬 　300 さ 4512 GT-R"
			,"customerName":"201303210011"
		}
		,{
			"carNo":"12:20"
			,"carType":"品川 　300 れ 8722 Fit"
			,"customerName":"201303210005"
		}
		,{
			"carNo":"12:19"
			,"carType":"多摩 　500 か 4284 Fit"
			,"customerName":"201303210007"
		}
		,{
			"carNo":"12:11"
			,"carType":"足立 　500 あ 8014 パジェロMini"
			,"customerName":"201303210002"
		}
		,{
			"carNo":"12:01"
			,"carType":"品川 　500 あ 1620 GT-R"
			,"customerName":"201303210002"
		}
	];
	
	return dummyData;
}