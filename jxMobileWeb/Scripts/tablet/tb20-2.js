
var OriginalData = ""||{};
var tyrewidth="all",
	flattening="all",
	rim="all";
	
$(function() {
	getOriginalData();
	setGridData(changeInfor(OriginalData));
	
	$("#sort").change(function(){
		var sortType = $(this).val();
		sortInfor(sortType);
		setGridData(changeInfor(OriginalData));
	});
	
	$("#tyrewidth").change(function(){
		tyrewidth = $(this).val();
		selectData();
	});
	
	$("#flattening").change(function(){
		flattening = $(this).val();
		selectData();
	});
	
	$("#rim").change(function(){
		rim = $(this).val();
		selectData();
	});
});

function selectData(){
	var data = new Array();
	for(var i=0;i<OriginalData.length;i++){
		if(OriginalData[i].rim == rim || rim=="all"){
			if(OriginalData[i].width == tyrewidth || tyrewidth=="all"){
				if(OriginalData[i].flattening == flattening || flattening=="all"){
					data.push(OriginalData[i]);
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
						+"<div  class='tb20-float-l'>"
						+"<h3>"+detail.tyreName+"</h3>"
						+"<p><b>"+detail.subMark+"</b></p>"
						+"<p>サ　イ　ズ ：　"+detail.width+"</p>"
						+"<p>１本　価格：　<b>"+detail.singlePrice+"</b></p>"
						+"<p>セット価格：　<b>"+detail.setPrice+"</b></p>"
						+"</div><div class='tb20-detail-r'>"
						+"<p>転がり抵抗　　 ：　<b>"+detail.antiskid+"</b></p>"
						+"<p>ウェットグリップ：　<b>"+detail.wetgrip+"</b></p>"
						+"<p>耐久性　　　　　：　<b>"+detail.durability+"</b></p>"
						+"<p>静粛性　　　　　：　<b>"+detail.quiet+"</b></p>"
					    +"</div></div></a>"
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
			"imgSrc":"../images/TB03/mediaResource4.jpg"
			,"tyreName":"ブリンジスドン1"
			,"subMark":"ECOPIA EP001S1"
			,"width":"195"
			,"flattening":"65"
			,"rim":"15"
			,"singlePrice":"7875"
			,"setPrice":"26040"
			,"antiskid":"AAA"
			,"wetgrip":"a"
			,"quiet":""
			,"durability":""
		}
		,{
			"imgSrc":"../images/TB03/mediaResource4.jpg"
			,"tyreName":"ブリンジスドン2"
			,"subMark":"ECOPIA EP001S2"
			,"width":"175"
			,"flattening":"55"
			,"rim":"20"
			,"singlePrice":"7875"
			,"setPrice":"26040"
			,"antiskid":"AAA"
			,"wetgrip":"a"
			,"quiet":""
			,"durability":""
		}
		,{
			"imgSrc":"../images/TB03/mediaResource4.jpg"
			,"tyreName":"ブリンジスドン3"
			,"subMark":"ECOPIA EP001S3"
			,"width":"160"
			,"flattening":"45"
			,"rim":"25"
			,"singlePrice":"7875"
			,"setPrice":"26040"
			,"antiskid":"AAA"
			,"wetgrip":"a"
			,"quiet":""
			,"durability":""
		}
	];
	
	OriginalData = dummyData;
	
	return dummyData;
}

function changeInfor(originalData){
	var data = clone(originalData);
	
	for(var i =0;i<data.length;i++){
		var detail = data[i];
		detail.singlePrice = chanslatePrice(detail.singlePrice);
		detail.setPrice = chanslatePrice(detail.setPrice);
		detail.width = detail.width + "/" + detail.flattening + "R" + detail.rim;
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
			return parseInt(a.singlePrice)>parseInt(b.singlePrice)?1:-1
		});
	}else if(sortType == 1){
		OriginalData.sort(function(a,b){
			return parseInt(a.singlePrice)<parseInt(b.singlePrice)?1:-1
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
