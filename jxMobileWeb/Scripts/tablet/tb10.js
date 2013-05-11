$(function() {
	onTabClick(0);
	setGridData( getCarInfor());
});

var tabIndex = 0;
function onTabClick(index) {
	if (index != -1) {
		tabIndex = index;
	}
	if (tabIndex == 0) {
		$("#area-kanute").css("display", "block");
		$("#area-confirm").css("display", "none");
	} else {
		$("#area-kanute").css("display", "none");
		$("#area-confirm").css("display", "block");
	}
}

function setupPopup(title) {
	$("div:jqmData(role='popup') h3").html(title);
	$("div:jqmData(role='popup') input[type='text']").val("");
}


		var count = 1;
		var count1 = 1;
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
				if(detail.data1 == 'タイヤ'){
					if(count == 1){
						text += "<div class='tb10-grid-cell cmn-grid-cell-l tb10-gc1'>" + detail.data1 + "</div>";
					}
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc1'>" + detail.data2 + "</div>";
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc1'>" + detail.data3 + "</div>";
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc1'><input type='date' value='" + detail.data4 + "'/></div>";
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc'><input type='checkbox' class='ui-checkbox1' /></div></div>";
					count++;
				}else if(detail.data1 == 'ワイパー'){
					if(count1 == 1){
						text += "<div class='tb10-grid-cell1 cmn-grid-cell-l cmn-grid-border-r tb10-gc1'>" + detail.data1 + "</div>";
					}
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc1'>" + detail.data2 + "</div>";
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc1'>" + detail.data3 + "</div>";
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc1'><input type='date' value='" + detail.data4 + "' /></div>";
					text += "<div class='tb10-grid-cell1-noborder cmn-grid-border-r cmn-grid-border-b cmn-grid-cell-l tb10-gc'><input type='checkbox' class='ui-checkbox1' /></div></div>";
					count1++;
				}
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb10ListData").empty();
			$("#tb10ListData").append(insert);

		}
	}
}

function getCarInfor(){
	var dummyData = 
	[
		{
			"data1":"タイヤ"
			,"data2":"タイヤ"
			,"data3":""
			,"data4":"2014-09-14"
		}
		,{
			"data1":"タイヤ"
			,"data2":"お礼"
			,"data3":""
			,"data4":""
		}
		,{
			"data1":"タイヤ"
			,"data2":"増し締め"
			,"data3":""
			,"data4":""
		}
		,{
			"data1":"タイヤ"
			,"data2":"ローテ"
			,"data3":""
			,"data4":""
		}
		,{
			"data1":"ワイパー"
			,"data2":"ワイパー"
			,"data3":"2013/3/21"
			,"data4":"2014-3-21"
		}
		,{
			"data1":"ワイパー"
			,"data2":"お礼"
			,"data3":""
			,"data4":""
		}
	];
	
	return dummyData;
}