$(function() {
	setGridData(getCarInfor());
});

function setGridData(data){

	if(data != null && data != "undefine" && data != ""){
		
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var startTime = detail.hnoTime.substr(0, 2) + detail.hnoTime.substr(3, 2);
			var endTime = detail.endTime.substr(0, 2) + detail.endTime.substr(3, 2);
			if( startTime > endTime){
				var text =  "<div class=' cmn-detail-row tb08-color-red'>" 
			}else{
				var text =  "<div class=' cmn-detail-row'>" 
			}
			text += "<input type='hidden' value='" + detail.hno + "'>";
			text +=          "<div class='cmn-grid-cell cmn-grid-cell-l tb08-gc1'>"+ detail.hno + "</div>"
							+"<div class='cmn-grid-cell cmn-grid-cell-l tb08-gc1 tb08-line-height'>"+ detail.date + "<br/>" + detail.hnoTime +"</div>"
							+"<div class='cmn-grid-cell cmn-grid-cell-l tb08-gc1'>"+ detail.endTime + "</div>"
							+"<div class='cmn-grid-cell cmn-grid-cell-l tb08-gc2'>" + "<div class='cmn-align-left tb08-grid-cell-carno1'>" + detail.carNo1 + "</div>" + "<div class='cmn-align-left tb08-grid-cell-carno2'>" + detail.carNo2 + "</div>" + "<div class='cmn-align-left tb08-grid-cell-carno3'>" + detail.carNo3 + "</div>" + "<div class='cmn-align-left tb08-grid-cell-carno3'>" + detail.carNo4 + "</div>" +"</div>"
							+"<div class='cmn-grid-cell cmn-grid-cell-l tb08-gc2 tb08-align-l'>" + detail.carType +"</div>"
							+"<div class='cmn-grid-cell cmn-grid-cell-l tb08-gc3 tb08-align-l'>" + detail.customerName +"</div>"
							+"<div class='cmn-grid-cell cmn-grid-cell-l tb08-gc3 tb08-align-l'>" + detail.customerNameKana +"</div></div>";
			if(detail.isShow == true){
				insert += text;
			}
		}
	}

	$("#tb08ListData").empty();
	if(insert != null && insert != "undefine" && insert != ""){
		$("#tb08ListData").append(insert);
		setRowColor();

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

function getCarInfor(){
	var dummyData = 
	[
		{
			"hno":"0006"
			,"date":"3/21"
			,"hnoTime":"14:47"
			,"endTime":"13:17"
			,"carNo1":"品川"
			,"carNo2":"302"
			,"carNo3":"か"
			,"carNo4":"8562"
			,"carType":"プリウス"
			,"customerName":"山田 太郎 様"
			,"customerNameKana":"ヤマダ　タロウ"
			,"isShow":true
		}
		,{
			"hno":"0005"
			,"date":"3/21"
			,"hnoTime":"12:36"
			,"endTime":"12:56"
			,"carNo1":"品川"
			,"carNo2":"308"
			,"carNo3":"め"
			,"carNo4":"1122"
			,"carType":"クラウン"
			,"customerName":"加藤 恵一 様"
			,"customerNameKana":"カトウ　ケイイチ"
			,"isShow":true
		}
		,{
			"hno":"0004"
			,"date":"3/21"
			,"hnoTime":"11:24"
			,"endTime":"11:54"
			,"carNo1":"練馬"
			,"carNo2":"508"
			,"carNo3":"さ"
			,"carNo4":"1196"
			,"carType":"マーチ"
			,"customerName":"中山 美代子 様"
			,"customerNameKana":"ナカヤマ　ミヨコ"
			,"isShow":true
		}
		,{
			"hno":"0003"
			,"date":"3/21"
			,"hnoTime":"13:59"
			,"endTime":"12:59"
			,"carNo1":"八王子"
			,"carNo2":"500"
			,"carNo3":"は"
			,"carNo4":"7425"
			,"carType":"フィット"
			,"customerName":"武田 次郎 様"
			,"customerNameKana":"タケダ　ジロウ"
			,"isShow":true
		}
	];
	
	return dummyData;
}

// 検索条件
function getSearchData(){
	var searchDateF = $("#searchDateF").val();
	var searchDateT = $("#searchDateT").val();
	var searchCarNo1 = $("#carSelect1").find("option:selected").text();
	var searchCarNo2 = $("#searchCarNo2").val();
	var searchCarNo3 = $("#carSelect2").find("option:selected").text();
	var searchCarNo4 = $("#searchCarNo4").val();
	var searchCustomerNameKana= $("#customerNameKana").val();
	var searchHno = $("#hno").val();
	var searchData =    {"searchDateF":searchDateF
						,"searchDateT":searchDateT
						,"searchCarNo1":searchCarNo1
						,"searchCarNo2":searchCarNo2
						,"searchCarNo3":searchCarNo3
						,"searchCarNo4":searchCarNo4
						,"customerNameKana":searchCustomerNameKana
						,"hno":searchHno
						};
	return searchData;
}

function setRowColor() {
	$("#tb08ListData .cmn-detail-select").removeClass("cmn-detail-select");
	$("#tb08ListData .cmn-detail-odd").removeClass("cmn-detail-odd");
	$("#tb08ListData>div:not(.cmn-hidden):odd").addClass("cmn-detail-odd");
}

function compareDate(date1, date2, flg){
	if(date2 == "" || date2 == null){
		return true;
	}
	var cdate1 = new Date();
	var cdate2 = new Date();
	cdate1.setMonth(date1.substr(0, 1) - 1);
	cdate1.setDate(date1.substr(2, 2));
	cdate2.setFullYear(date2.substr(0, 4));
	cdate2.setMonth(date2.substr(5, 2) - 1);
	cdate2.setDate(date2.substr(8, 2));

	if(flg = "1"){
		if(cdate1 > cdate2){
			return true;
		}else{
			return false;
		}
	}else{
		if(cdate1 > cdate2){
			return false;
		}else{
			return true;
		}
	}

}

var showData = getCarInfor();

function onSearch(){
	var searchData = getSearchData();
	if(    searchData.searchDateF == ""
		&& searchData.searchDateT == ""
		&& searchData.searchCarNo1 == "選択..."
		&& searchData.searchCarNo2 == ""
		&& searchData.searchCarNo3 == "選択..."
		&& searchData.searchCarNo4 == ""
		&& searchData.customerName == ""
		&& searchData.customerNameKana == ""
	){
		refreshGridData(getCarInfor());
		setRowColor();
	}else{
		showData = getCarInfor();
		if(showData != null && showData != "undefine" && showData != ""){
			for(var i=0; i < showData.length;i++){
				var detail = showData[i];
				if( compareDate(detail.date, searchData.searchDateF, "1")
				&& compareDate(detail.date, searchData.searchDateT, "2")
				&& detail.carNo1 == (searchData.searchCarNo1 == "選択..." ? detail.carNo1:searchData.searchCarNo1)
				&& detail.carNo2 == (searchData.searchCarNo2 == "" ? detail.carNo2:searchData.searchCarNo2)
				&& detail.carNo3 == (searchData.searchCarNo3 == "選択..." ? detail.carNo3:searchData.searchCarNo3)
				&& detail.carNo4 == (searchData.searchCarNo4 == "" ? detail.carNo4:searchData.searchCarNo4)
				&& detail.customerNameKana == (searchData.customerNameKana == "" ? detail.customerNameKana:searchData.customerNameKana)
				&& detail.hno == (searchData.hno == "" ? detail.hno:searchData.hno)){
					showData[i].isShow = true;
				}else{
					showData[i].isShow = false;
				}
			}
		}
		refreshGridData(showData);
		setRowColor();
	}

}

function refreshGridData(data) {
	$(data).each(function(){
		//get row
		var id = this.hno;
		var row = $("#tb08ListData input[type='hidden'][value='" + id + "']").parent();
		if (this.isShow) {
			$(row).removeClass("cmn-hidden");
		} else {
			$(row).addClass("cmn-hidden");
		}
	});
}

