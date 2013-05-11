$(function() {
	setGridData( getCarInfor());
	
	$(".cmn-navi-tab").click(function(){
		setGridData( getCarInfor());
	});
	
	$("#search").click(function(){
		var input = $("carNo").val();
		searchCar(input);
	});
	
});

function setupPopup(title) {
	$("div:jqmData(role='popup') h3").html(title);
	$("div:jqmData(role='popup') input[type='text']").val("");
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
	    var colorDiv = "";
	    var colorDiv1 = "";
	    var colorDiv2 = "";
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			
			if(detail.color == "1"){
			    colorDiv = "sp03-color1";
			
			}else if(detail.color == "2"){
			    colorDiv = "sp03-color2";
			
			}else if(detail.color == "3"){
			    colorDiv = "sp03-color3";
			
			}else if(detail.color == "5"){
			    colorDiv = "sp03-color5";
			
			}else if(detail.color == "6"){
			    colorDiv = "sp03-color6";
			
			}else if(detail.color == "7"){
			    colorDiv = "sp03-color7";
			
			}else if(detail.color == "8"){
			    colorDiv = "sp03-color8";
			
			}
			
			var exp = detail.carCall;
			if(exp != null && exp != "undefine" && exp != ""){
			    colorDiv1 = "cmn-grid-cell sp03-gc2 "; 
			   
			}else{
			    detail.customerName="";
			    detail.carCall="";
			    detail.carType="";
			    detail.nameKana="";
			}
	        
	        var exp1 = detail.nameKana;
	        if(exp1 != null && exp1 != "undefine" && exp1 != ""){
	            colorDiv2 = "cmn-grid-cell sp03-gc1";
	        
	        }else{
	            colorDiv2 = "sp03-gc3";
	        }		
       
       
       
       
            var exp = detail.nameKana;
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
			            +"<div class=' sp03-gc7  cmn-grid-cell-l'>"
			            +"<div class='cmn-grid-cell sp03-mulrows1'>"
						
						
						
						+"<div class='sp03-customerName'>"
						+"<div class='sp03-customerName1'>"+detail.customerName1+"</div>"
						+"<div class='sp03-customerName2'>"+detail.customerName2+"</div>"
						+"<div class='sp03-customerName3'>"+detail.customerName3+"</div>"
						+"<div class='sp03-customerName4'>"+detail.customerName4+"</div>"
						+"<div class='sp03-carType'>"+ detail.carType +"</div>"
						+"</div>"
						
						+"<div class='"+colorDiv1 +""+  colorDiv +"'>"
						+"<div class='sp03-font'>"+detail.carCall+"</div>"
						+"</div>"
						
						+"<div class='"+colorDiv2 +"'>"
						+"<div class='sp03-font'>"+detail.nameKana+"</div>"
						+"</div>"
						
						+"</div>"
						+"</div>"
						+"</div>"
					
			insert += text;
			
			colorDiv = "";
			colorDiv1="";
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
			"carNo":"1"
			,"customerName1":"品川"
			,"customerName2":"300"
			,"customerName3":"さ"
			,"customerName4":"8562(A)"
			,"carType":"プリウス"
			,"carCall":"★ その他"
			,"nameKana":"3"
			,"color":"1"
		}
		,{
			"carNo":"2"
			,"customerName1":"足立"
			,"customerName2":"500"
			,"customerName3":"す"
			,"customerName4":"8562(F)"
			,"carType":"マーチ"
			,"carCall":"★お礼"
			,"nameKana":"0"
			,"color":"2"
		}
		,{
			"carNo":"3"
			,"customerName1":"足立"
			,"customerName2":"500"
			,"customerName3":"さ"
			,"customerName4":"8562(F)"
			,"carType":"N BOX"
			,"carCall":"車検3"
			,"nameKana":"2"
			,"color":"3"
		}
		,{
			"carNo":"5"
			,"customerName1":"八王子"
			,"customerName2":"500"
			,"customerName3":"ぬ"
			,"customerName4":"8562(F)"
			,"carType":"バラードスポーツＣバラードスポーツＣバラードスポーツＣバラードスポーツＣバラードスポーツＣ"
			,"carCall":"ﾊﾞｯﾃﾘｰ1"
			,"nameKana":"6"
			,"color":"5"
		}
		,{
			"carNo":"6"
			,"customerName1":"多摩"
			,"customerName2":"500"
			,"customerName3":"さ"
			,"customerName4":"8562(C)"
			,"carType":"マーチ"
			,"carCall":"★ｵｲﾙ"
			,"nameKana":"2"
			,"color":"6"
		}
		,{
			"carNo":"7"
			,"customerName1":"練馬"
			,"customerName2":"300"
			,"customerName3":"あ"
			,"customerName4":"8562(B)"
			,"carType":"プリウス"
			,"carCall":"ﾀｲﾔ3"
			,"nameKana":"8"
			,"color":"7"
		}
		
	];
	
	return dummyData;
}