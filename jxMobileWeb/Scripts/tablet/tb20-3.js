
var OriginalData = ""||{};
var performance="all",
	shortSize="all",
	longSize="all",
	term="all";
	
$(function() {
	getOriginalData();
	setGridData(changeInfor(OriginalData));
	
	$("#sort").change(function(){
		var sortType = $(this).val();
		sortInfor(sortType);
		setGridData(changeInfor(OriginalData));
	});
	
	$("#performance").change(function(){
		performance = $(this).val();
		selectData();
	});
	
	$("#shortSize").change(function(){
		shortSize = $(this).val();
		selectData();
	});
	
	$("#longSize").change(function(){
		longSize = $(this).val();
		selectData();
	});
	$("[name=term]").click(function(){
		term = $(this).val();
		selectData();
	});
});

function selectData(){
	var data = new Array();
	for(var i=0;i<OriginalData.length;i++){
	
		if(OriginalData[i].performance == performance || performance=="all"){
			if(OriginalData[i].shortSize == shortSize || shortSize=="all"){
				if(OriginalData[i].longSize == longSize || longSize=="all"){
					if(OriginalData[i].term == term || term=="all"){
						data.push(OriginalData[i]);
					}
				}
			}
		}
	}
	setGridData(changeInfor(data));
}

function setupPopup(title) {
	$("div:jqmData(role='popup') h3").html(title);
	$("div:jqmData(role='popup') input[type='text']").val("");
}

function setGridData(data){

	if( data != "undefine"){
		var insert = "";
	
		for(var i=0; i < data.length;i++){
			var detail = data[i];
			var text =  "<li>"
					    +" <a href='#' data-kind="+detail.kind+">"
						+"<div class='tb20-thumb'><img align='absmiddle' src='"+detail.imgSrc+"'></div>"
						+"<div class='tb20-thumb-info'>"
						+"<h3>"+detail.tyreName+"</h3>"
						+"<p><b>"+detail.subMark+"</b></p>"
						+"<p>型　式：　"+detail.type+"</p>"
						+"<p>単　価：　<b>"+detail.price+"</b></p>"
					    +"</div></a>"
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
			"imgSrc":"../images/TB03/batery.jpg"
			,"tyreName":"Vフォース1"
			,"subMark":"B19"
			,"type":"60B24R"
			,"price":"13400"
			,"performance":"30"
			,"shortSize":"A"
			,"longSize":"14"
			,"term":"R"
		}
		,{
			"imgSrc":"../images/TB03/batery.jpg"
			,"tyreName":"Vフォース2"
			,"subMark":"B24"
			,"type":"60B24R"
			,"price":"2580"
			,"performance":"48"
			,"shortSize":"D"
			,"longSize":"14"
			,"term":"R"
		}
		,{
			"imgSrc":"../images/TB03/batery.jpg"
			,"tyreName":"Vフォース3"
			,"subMark":"B24"
			,"type":"60B24R"
			,"price":"30844"
			,"performance":"30"
			,"shortSize":"A"
			,"longSize":"14"
			,"term":"L"
		}
	];
	
	OriginalData = dummyData;
	
	return dummyData;
}

function changeInfor(originalData){
	var data = clone(originalData);
	
	for(var i =0;i<data.length;i++){
		var detail = data[i];
		detail.price = chanslatePrice(detail.price);
	}
	
	return data;
}

function chanslatePrice(price){
	var temp = price;
	price = "";
	var len = temp.length;
	for(var j=temp.length;j>0;j-=3){
		var val = temp.substring(j-3<0?0:j-3,j);
		price = price==""? val:(val + "," + price);
	}
	price ="￥" + price;
	return price;
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

