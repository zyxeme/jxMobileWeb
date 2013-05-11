$(function() {
	onTabClick(0);
	setGridData1( getCarInfor1());
	setGridData2( getCarInfor2());
	setGridData3( getCarInfor3());
});

var tabIndex = 0;
function onTabClick(index) {
	if (index != -1) {
		tabIndex = index;
	}
	if (tabIndex == 0) {
		$("#area-info").css("display", "block");
		$("#area-order").css("display", "none");
		$("#area-safety").css("display", "none");
	} else if(tabIndex == 1) {
		$("#area-info").css("display", "none");
		$("#area-order").css("display", "block");
		$("#area-safety").css("display", "none");
	} else if(tabIndex == 2){
		$("#area-info").css("display", "none");
		$("#area-order").css("display", "none");
		$("#area-safety").css("display", "block");
	}
}

function setGridData1(data){

	if(data != null && data != "undefine" && data != ""){
		
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb07-gc1'>"+ detail.kbn +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb07-gc2'>"+ detail.date +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb07-gc1'>" + detail.classification + "</div>"
						+"<div class='tb07-grid-cell cmn-grid-cell-l tb07-gc2'>"+ detail.mileage +"</div></div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb07ListData1").empty();
			$("#tb07ListData1").append(insert);
			
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

function getCarInfor1(){
	var dummyData = 
	[
		{
			"kbn":"見積"
			,"date":"2013.02.20"
			,"classification":"タイヤ"
			,"mileage":"15,802 km"
		}
		,{
			"kbn":"精算"
			,"date":"2013.02.20"
			,"classification":"オイル"
			,"mileage":"13,787 km"
		}
		,{
			"kbn":"見積"
			,"date":"2013.02.20"
			,"classification":"オイル"
			,"mileage":"14,577 km"
		}
	];
	
	return dummyData;
}

function setGridData2(data){

	if(data != null && data != "undefine" && data != ""){
		
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			var text =  "<div class=' cmn-detail-row detail " + colorAttr +"'>" 
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb07-gc2'>"+ detail.name +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb07-gc1'>"+ detail.size +"</div>"
						+"<div class='cmn-grid-cell cmn-grid-cell-l tb07-gc1'>" + detail.amount + "</div>"
						+"<div class='tb07-grid-cell cmn-grid-cell-l tb07-gc1'>" + detail.unitprice + "</div>"
						+"<div class='tb07-grid-cell cmn-grid-cell-l tb07-gc1'>"+ detail.price +"</div></div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb07ListData2").empty();
			$("#tb07ListData2").append(insert);
			
			$(".detail").click(function(){
				
				if(!$(this).hasClass("cmn-detail-select")){
					$(".detail").removeClass("cmn-detail-select");
					$(this).addClass("cmn-detail-select");
				}else{
					$(this).removeClass("cmn-detail-select");
				}
				
			});
		}
	}
}

function getCarInfor2(){
	var dummyData = 
	[
		{
			"name":"ＳＵＳＴＩＮＡ"
			,"size":"0W-20"
			,"amount":"3.9L"
			,"unitprice":"￥995"
			,"price":"￥3880"
		}
		,{
			"name":"オイル交換作"
			,"size":"0W-20"
			,"amount":"3.9L"
			,"unitprice":""
			,"price":""
		}
		,{
			"name":"ＳＵＳＴＩＮＡ"
			,"size":"0W-20"
			,"amount":"5.9L"
			,"unitprice":"￥123"
			,"price":"￥4579"
		}
	];
	
	return dummyData;
}

function setGridData3(data){

	if(data != null && data != "undefine" && data != ""){
		
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var colorAttr = "";
			if(i%2 ==0){
				colorAttr = "cmn-detail-odd ";
			}
			if(detail.data1 == "タイヤ"){
				var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
							+"<div class='cmn-grid-cell cmn-grid-cell-l tb07-gc3 tb07-area-info1'>"
							+"<div class='tb07-grid-cell2 cmn-grid-border-r'>"+ detail.data1 +"</div>"
							+"<div class='tb07-grid-cell-noborder tb07-gc6'>"
							+"<div class='tb07-grid-cell1 cmn-grid-border-r cmn-grid-border-b'>" + detail.data2 + "</div>"
							+"<div class='tb07-grid-cell1 cmn-grid-border-r cmn-grid-border-b'>" + detail.data3 + "</div>"
							+"<div class='tb07-grid-cell1 cmn-grid-border-r cmn-grid-border-b'>" + detail.data4 + "</div>"
							+"<div class='tb07-grid-cell1 cmn-grid-border-r cmn-grid-border-b'>" + detail.data5 + "</div></div>"
							+"<div class='tb07-grid-cell-noborder tb07-gc7'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data6 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data7 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data8 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data9 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data10 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data11 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data12 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data13 + "</div></div></div>"
							+"<div class='tb07-grid-cell4 cmn-grid-cell-l'>"
							+"<div class='tb07-grid-cell-noborder2'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b tb07-red-bg'>" + detail.data14 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data15 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data16 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data17 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data18 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data19 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data20 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data21 + "</div></div></div>"
							+"<div class='tb07-grid-cell4 cmn-grid-cell-l'>"
							+"<div class='tb07-grid-cell-noborder2'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b tb07-red-bg'>" + detail.data22 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data23 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data24 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data25 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data26 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data27 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data28 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b '>" + detail.data29 + "</div></div></div></div>"
				} else if(detail.data1 == "ワイパー"){
				var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
							+"<div class='tb07-grid-cell5 cmn-grid-cell-l tb07-gc3 tb07-area-info2'>"
							+"<div class='tb07-grid-cell6 cmn-grid-border-r cmn-grid-border-b'>" + detail.data1 + "</div>"
							+"<div class='tb07-grid-cell7 tb07-gc5'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-b cmn-grid-border-r'>" + detail.data2 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-b cmn-grid-border-r'>" + detail.data3 + "</div></div></div>"
							+"<div class='tb07-grid-cell7 cmn-grid-cell-l'>"
							+"<div class='tb07-grid-cell-noborder2'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b tb07-red-bg'>" + detail.data4 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data5 + "</div></div></div>"
							+"<div class='tb07-grid-cell7 cmn-grid-cell-l'>"
							+"<div class='tb07-grid-cell-noborder2'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b tb07-red-bg'>" + detail.data6 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data7 + "</div></div></div></div>"
			} else if(detail.data1 == "ライト類"){
				var text =  "<div class=' cmn-detail-row "+ colorAttr +"'>" 
							+"<div class='tb07-grid-cell5 cmn-grid-cell-l tb07-gc3 tb07-area-info2'>"
							+"<div class='tb07-grid-cell6 cmn-grid-border-r cmn-grid-border-b'>" + detail.data1 + "</div>"
							+"<div class='tb07-grid-cell7 tb07-gc8'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-b'>" + detail.data2 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-b'>" + detail.data3 + "</div></div>"
							+"<div class='tb07-grid-cell7 tb07-gc1'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-b'>" + detail.data4 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-b'>" + detail.data5 + "</div></div></div>"
							+"<div class='tb07-grid-cell7 cmn-grid-cell-l' >"
							+"<div class='tb07-grid-cell-noborder2'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data6 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data7 + "</div></div></div>"
							+"<div class='tb07-grid-cell7 cmn-grid-cell-l'>"
							+"<div class='tb07-grid-cell-noborder2'>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data8 + "</div>"
							+"<div class='tb07-grid-cell3 cmn-grid-border-r cmn-grid-border-b'>" + detail.data9 + "</div></div></div></div>"
			}
			insert += text;
		}
			if(insert != null && insert != "undefine" && insert != ""){
				$("#tb07ListData").empty();
				$("#tb07ListData").append(insert);
			}
	}
}

function getCarInfor3(){
	var dummyData = 
	[
		{
			"data1":"タイヤ"
			,"data2":"前左"
			,"data3":"前右"
			,"data4":"後左"
			,"data5":"後右"
			,"data6":"亀･摩･損"
			,"data7":"製造周期"
			,"data8":"亀･摩･損"
			,"data9":"製造周期"
			,"data10":"亀･摩･損"
			,"data11":"製造周期"
			,"data12":"亀･摩･損"
			,"data13":"製造周期"
			,"data14":"13.02.20 要注意 (A)"
			,"data15":"2811"
			,"data16":"13.02.20 ＯＫ"
			,"data17":"2811"
			,"data18":"13.02.20 ＯＫ"
			,"data19":"2811"
			,"data20":"13.02.20 ＯＫ"
			,"data21":"2811"
			,"data22":"13.02.20 要注意 (A)"
			,"data23":"2811"
			,"data24":"13.02.20 ＯＫ"
			,"data25":"2811"
			,"data26":"13.02.20 ＯＫ"
			,"data27":"2811"
			,"data28":"13.02.20 ＯＫ"
			,"data29":"2811"
		}
		,{
			"data1":"ワイパー"
			,"data2":"フロント"
			,"data3":"リア"
			,"data4":"13.02.20 要注意 (B)"
			,"data5":"13.02.20 ＯＫ"
			,"data6":"13.02.20 要注意 (B)"
			,"data7":"13.02.20 ＯＫ"
		}
		,{
			"data1":"ライト類"
			,"data2":"ヘッドライト"
			,"data3":"ヘッドライト"
			,"data4":"左"
			,"data5":"右"
			,"data6":"13.02.20 ＯＫ"
			,"data7":"13.02.20 ＯＫ"
			,"data8":"13.02.20 ＯＫ"
			,"data9":"13.02.20 ＯＫ"
		}
	];
	
	return dummyData;
}
