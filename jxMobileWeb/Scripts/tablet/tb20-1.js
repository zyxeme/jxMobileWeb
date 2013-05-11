
var OriginalData = ""||{};
$(function() {
	getOriginalData();
	setGridData(changeInfor(OriginalData));
	
	$("#sort").change(function(){
		var sortType = $(this).val();
		sortInfor(sortType);
		setGridData(changeInfor(OriginalData));
	});
	
	$("#viscosity").change(function(){
		var viscosity = $(this).val();
		var data = new Array();
		for(var i=0;i<OriginalData.length;i++){
			if(OriginalData[i].viscosity == viscosity || viscosity=="all"){
				data.push(OriginalData[i]);
			}
		}
		setGridData(changeInfor(data));
	});
});

function setupPopup(title) {
	$("div:jqmData(role='popup') h3").html(title);
	$("div:jqmData(role='popup') input[type='text']").val("");
}

function setGridData(data){

	if( data != "undefine"){
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var  text =  "<li>"
					    +" <a href='#' data-kind="+detail.kind+">"
						+"<div class='tb20-thumb'><img align='absmiddle' src='"+detail.imgSrc+"'></div>"
						+"<div class='tb20-thumb-info'><h3>"+detail.oilName+"</h3>"
						+"<p><b>"+detail.subMark+"</b></p>"
						+"<p>粘　度：　"+detail.viscosity+"</p>"
						+"<p>規　格：　<b>"+detail.standard+"</b></p>"
						+"<p>タイプ：　<b>"+detail.type+"</b></p>"
						+"<p>単　価：　<b>"+detail.price+"</b></p></div>"
					    +"</a>"
					    +"</li>";

			insert += text;
		}
		
		if(insert != "undefine"){
			$("#detialList").empty();
			$("#detialList").append(insert);
			$("#detialList").listview('refresh');
		}
	}
}

function getOriginalData(){
	var dummyData = 
	[
		{
			"imgSrc":"../images/TB03/mediaResource1.jpg"
			,"oilName":"FINE"
			,"subMark":"ファインOW-20"
			,"viscosity":"OW-20"
			,"standard":"ILSAC GF-5"
			,"type":"0"
			,"price":"1680"
			,"kind":"0"
		}
		,{
			"imgSrc":"../images/TB03/mediaResource2.jpg"
			,"oilName":"トヨタキヤッスル"
			,"subMark":"トヨタOW-40"
			,"viscosity":"OW-60"
			,"standard":"SN GF-1"
			,"type":"1"
			,"price":"6732"
			,"kind":"0"
		}
		,{
			"imgSrc":"../images/TB03/mediaResource3.jpg"
			,"oilName":"マグナテック"
			,"subMark":"マグナテックOW-40"
			,"viscosity":"OW-40"
			,"standard":"SN GF-1"
			,"type":"2"
			,"price":"8036"
			,"kind":"1"
		}
		,{
			"imgSrc":"../images/TB03/mediaResource1.jpg"
			,"oilName":"ウルトライLEO"
			,"subMark":"ウルトライOW-40"
			,"viscosity":"OW-20"
			,"standard":"SN GF-1"
			,"type":"2"
			,"price":"11556"
			,"kind":"1"
		}
	];
	
	OriginalData = dummyData;
	
	return dummyData;
}

function changeInfor(originalData){
	var data = clone(originalData);
	var typeList = 
	[
		{"code":"0","name":"部分合成油"}
		,{"code":"1","name":"化学合成油"}
		,{"code":"2","name":"鉱物油"}
	];
	
	for(var i =0;i<data.length;i++){
		var detail = data[i];
		for(var j=0;j<typeList.length;j++){
			 var type = typeList[j];
			if(detail.type == type.code){
				detail.type = type.name;
				break;
			}
		}
		
		var price = detail.price;
		detail.price = "";
		var len = price.length;
		for(var j=price.length;j>0;j-=3){
			var val = price.substring(j-3<0?0:j-3,j);
			detail.price = detail.price==""? val:(val + "," + detail.price);
		}
		detail.price ="￥" + detail.price;
	}
	
	return data;
}


function sortInfor(sortType){
	if(sortType == 0){
		OriginalData.sort(function(a,b){
			return parseInt(a.price)>parseInt(b.price)?1:-1
		});
	}else if(sortType == 1){
		OriginalData.sort(function(a,b){
			return parseInt(a.price)<parseInt(b.price)?1:-1
		});
	}
}

function clone(para){
    var rePara = null;
    var type = Object.prototype.toString.call(para);
    if(type.indexOf("Object") > -1){
        rePara = {};
        for(var key in para){
            if(para.hasOwnProperty(key)){
                rePara[key] = clone(para[key]);
            }
        }
    }else if(type.indexOf("Array") > 0){
        rePara = [];
        for(var i=0;i<para.length;i++){
           rePara[rePara.length] =  clone(para[i]);
        }
    }else{
        rePara = para;
    }
    return rePara;
}
