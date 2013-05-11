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
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc2'>"+ detail.time +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc1'>"+ detail.rate +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l'>" + "<div class='cmn-align-left tb06-grid-cell-carno1'>" + detail.carNo1 + "</div>" + "<div class='cmn-align-left tb06-grid-cell-carno2'>" + detail.carNo2 + "</div>" + "<div class='cmn-align-left tb06-grid-cell-carno3'>" + detail.carNo3 + "</div>" + "<div class='cmn-align-left tb06-grid-cell-carno3'>" + detail.carNo4 + "</div>" +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'>"+ detail.carType +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l'>" + detail.customerName +"</div>";
			if(detail.type == 1){
				text +=  "<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'><div class='tb06-gc4 cmn-readonly cmn-align-center tb06-background-black'>"+ detail.pn +"</div></div>";
			}else if(detail.type == 2){
				text +=  "<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'><div class='tb06-gc4 cmn-readonly cmn-align-center tb06-background-red'>"+ detail.pn +"</div></div>";
			}else if(detail.type == 3){
				text +=  "<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'><div class='tb06-gc4 cmn-readonly cmn-align-center tb06-background-green'>"+ detail.pn +"</div></div>";
			}else if(detail.type == 4){
				text +=  "<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'><div class='tb06-gc4 cmn-readonly cmn-align-center tb06-background-yellow'>"+ detail.pn +"</div></div>";
			}else if(detail.type == 5){
				text +=  "<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'><div class='tb06-gc4 cmn-readonly cmn-align-center tb06-background-blue'>"+ detail.pn +"</div></div>";
			}else if(detail.type == 6){
				text +=  "<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'><div class='tb06-gc4 cmn-readonly cmn-align-center tb06-background-orange'>"+ detail.pn +"</div></div>";
			}else{
				text +=  "<div class='cmn-grid-cell cmn-grid-cell-l tb06-gc3'><div class='tb06-gc4 cmn-readonly cmn-align-center'>"+ detail.pn +"</div></div>";
			}
			text += "</div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb06ListData").empty();
			$("#tb06ListData").append(insert);
			
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
			"time":"18:10"
			,"rate":"2"
			,"carNo1":"品川"
			,"carNo2":"302"
			,"carNo3":"か"
			,"carNo4":"1122(A)"
			,"carType":"デミオ"
			,"customerName":"品沢　百合子様"
			,"pn":"★タイヤ"
			,"type":"1"
		}
		,{
			"time":"18:12"
			,"rate":"3"
			,"carNo1":"品川"
			,"carNo2":"505"
			,"carNo3":"め"
			,"carNo4":"7914"
			,"carType":""
			,"customerName":""
			,"pn":"新規"
			,"type":"2"
		}
		,{
			"time":"17:12"
			,"rate":"4"
			,"carNo1":"品川"
			,"carNo2":"308"
			,"carNo3":"め"
			,"carNo4":"1122(A)"
			,"carType":"クラウン"
			,"customerName":"加藤 恵一 様"
			,"pn":"オイル３"
			,"type":"3"
		}
		,{
			"time":"16:55"
			,"rate":"5"
			,"carNo1":"品川"
			,"carNo2":"513"
			,"carNo3":"に"
			,"carNo4":"3238(F)"
			,"carType":"ワゴンＲ"
			,"customerName":"桜井 和哉 様"
			,"pn":"タイヤ２"
			,"type":"4"
		}
		,{
			"time":"19:12"
			,"rate":"5"
			,"carNo1":"八王子子"
			,"carNo2":"500"
			,"carNo3":"は"
			,"carNo4":"7425(F)"
			,"carType":"フィット"
			,"customerName":"武田 次郎 様"
			,"pn":"その他"
			,"type":"6"
		}
		,{
			"time":"17:22"
			,"rate":"7"
			,"carNo1":"練馬"
			,"carNo2":"508"
			,"carNo3":"さ"
			,"carNo4":"1196(F)"
			,"carType":"マーチ"
			,"customerName":"中山 美代子 様"
			,"pn":"洗車"
			,"type":"5"
		}
	];
	
	return dummyData;
}