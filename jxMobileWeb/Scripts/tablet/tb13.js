
var OriginalData = ""||{};
var normalTotal = 0;
var realTotal = 0;
var washCar = "ss";
var customerStatus = {"0":"お手洗い洗車","1":"ダイヤ","3":"ATF"};
var typeList = {"0":"手洗い洗車","1":"メンテナンス洗車","2":"洗車オプション","3":"コーディング","4":"ガラスコーディング","5":"セルフ洗車"};
	
$(function() {
	getOriginalData();
	setGridData(changeInfor(OriginalData));
	
	$(".tb13-detail-li").click(function(){
		var hasSelect = $(this).data("hasSelect");
		if(hasSelect){
			countCost(this,1);
			$(this).find(".tb13-thumb").append("<div> </div>");
		}else{
			countCost(this,0);
			$(this).find(".tb13-thumb").append("<img src='../images/tb13/check.jpg' />");
		}
	});
	
	var i=0
	$(".tb13-button1").each(function(){
		$(this).data("washType","washType"+i);
		$(this).click(function(){
			var to = $("#scrollTarget").offset().top;
			var target = $(this).data("washType");
			var from = $("#"+target).offset().top;
			var srcoll = $(".tb13-scroll").offset().top;
			
			var top =0;
			if((from-to)>=0){
				top =srcoll - ( from-to);
			}else{
				top =srcoll + ( to-from);
			}
			$(".tb13-scroll").animate({top:top+"px"});
		});
		i++;
	});
	
	
	$("#left").click(function(){
		var offset = $(".tb13-buttons").offset();
		$(".tb13-buttons").animate({left:(offset.left+50)+"px"});
	});
	
	$("#right").click(function(){
		var offset = $(".tb13-buttons").offset();
		$(".tb13-buttons").animate({left:(offset.left-50)+"px"});
	});
	
	
	$("[name='washCarType']").click(function(){
		washCar = $(this).val();
		setGridData(changeInfor(OriginalData));
		
		$(".tb13-detail-li").click(function(){
			var hasSelect = $(this).data("hasSelect");
			if(hasSelect){
				countCost(this,1);
				$(this).find(".tb13-thumb").append("<div> </div>");
			}else{
				countCost(this,0);
				$(this).find(".tb13-thumb").append("<img src='../images/tb13/check.jpg' />");
			}
		});
	});
});

function markColor(target,kbn,order,hasVip){
	if(kbn == 1){
		$(target).find(".tb13-normal-price").removeClass("cmn-bg-orange");
		$(target).find(".tb13-vip-price").removeClass("cmn-bg-orange");
	}else if(kbn ==0){
		for(var i=0;i<OriginalData.customerStatus.length;i++){
			if(OriginalData.customerStatus[i]==order){
				if(hasVip){
					$(target).find(".tb13-vip-price").addClass("cmn-bg-orange");
					return;
				}
			}
		}
		$(target).find(".tb13-normal-price").addClass("cmn-bg-orange");
	}
}

function countCost(target,kbn){
	var serialNo= $(target).attr("data-serialNo");
	for(var i=0; i < OriginalData.list.length;i++){
		var li = OriginalData.list[i];
		for(var j =0 ;j<li.detail.length;j++){
			 var subDetail = li.detail[j];
			if(subDetail.serialNo== serialNo){
				if(kbn ==0){
					$(target).data("hasSelect",true);
					addCost(subDetail,OriginalData.customerStatus,kbn,target);
				}else if(kbn ==1){
					$(target).data("hasSelect",false);
					addCost(subDetail,OriginalData.customerStatus,kbn,target);
				}
				break;
			}
		}
	}
	$(target).find(".tb13-thumb").empty();
}

function addCost(detail,customerStatus,kbn,target){
	var sign = 1;
	if(kbn==1){
		sign = -1;
	}
	normalTotal += sign*parseInt(detail.normalPrice[washCar]);
	
	var flg=false;
	for(var i=0; i<customerStatus.length;i++){
		var status = customerStatus[i];
		if(detail.orderStatus == status){
			if(detail.vipPrice[washCar]){
				realTotal  += sign*parseInt(detail.vipPrice[washCar]);
				markColor(target,kbn,detail.orderStatus,true);
				flg = true;
				break;
			}
		}
	}
	
	if(!flg){
		markColor(target,kbn,detail.orderStatus,false);
		realTotal += sign*parseInt(detail.normalPrice[washCar]);
	}
	
	var total = chanslatePrice(realTotal);
	$(".total").html(total==""?"￥0":total);
	
	var toku = chanslatePrice(normalTotal -realTotal );
	if(toku==""){
		$(".tb13-ad").html("<h2>　</h2>");
	}else{
		$(".tb13-ad").html("<h2><label class='red'>会員価格</label>だと<label class='red'>"+toku+"</label>お得です！</h2>");
	}
}

function setGridData(data){

	if( data != "undefine"){
		
		var statusText = "";
		for(var i=0;i<data.customerStatus.length;i++){
			statusText += customerStatus[data.customerStatus[i]] + "　";
		}
		
		$("#status").html(statusText);
		
		var insert = "<ul data-role='listview' data-inset='true' data-divider-theme='d'>";
		var colorAttr;
		if(data.memberStatus == "1"){
			colorAttr = "gray";
		}else if(data.memberStatus == "2"){
			colorAttr = "red";
		}
		
		for(var i=0; i < data.list.length;i++){
			var li = data.list[i];
			var  text = " <li data-role='list-divider' id='washType"+li.washType+"'> "+ typeList[li.washType]+"</li>";
			for(var j =0 ;j<li.detail.length;j++){
				 var detail = li.detail[j];
				 text += " <li class='tb13-detail-li' data-serialNo= '"+detail.serialNo+"'>"
					    +"<a href='#'>"
					    +"<div class='tb13-thumb'><div > </div></div>"
					    +"<div class='cmn-grid-cell-noborder  tb13-gc01'><b>"+detail.caseName+"</b></div>"
					    +"<div class='cmn-grid-cell-noborder  tb13-gc02'>"+ detail.despriction +"</div>"
					    +"<div class='cmn-grid-cell-noborder tb13-gc3'><b>"+detail.useTime+"</b></div>"
					    +"<div class='cmn-grid-cell-noborder tb13-gc02'>"+detail.caseDetail+"</div>"
					    +"<div class='cmn-grid-cell-noborder tb13-normal-price'><b>"+detail.normalPrice+"</b></div>"
					    +"<div class='cmn-grid-cell-noborder tb13-vip-price "+colorAttr+" '><b>"+detail.vipPrice+"</b></div>"
					    +"</a>"
					    +"</li>";
			}
			insert += text;
		}
		
		insert += "</ul>";
		if(insert != "undefine"){
			$(".tb13-list").empty();
			$(".tb13-list").append(insert);
			$.mobile.pageContainer.trigger("create");
		}
	}
}


function changeInfor(originalData){
	var data = clone(originalData);
	
	
	for(var i =0;i<data.list.length;i++){
		var detail = data.list[i];
		
		for(var j=0;j<detail.detail.length;j++){
			var temp = detail.detail[j]
			temp.normalPrice = selectPrice(temp.normalPrice);
			temp.vipPrice = selectPrice(temp.vipPrice);
			temp.specialPrice = selectPrice(temp.specialPrice);
			temp.useTime = temp.useTime +"分";
		}
		
	}
	
	return data;
}

function selectPrice(list){
	var price = list[washCar];
	price = chanslatePrice(price);
	
	if(price == 0){
		return "";
	}
	
	return price ;
}

function chanslatePrice(price){
	if(price =="" || price == undefined){
		return "";
	}
	var temp = price;
	price = "";
	if(typeof(temp)=="number"){
		temp = temp.toString();
	}

	var len = temp.length;

	for(var j=temp.length;j>0;j-=3){
		var val = temp.substring(j-3<0?0:j-3,j);
		price = price==""? val:(val + "," + price);
	}
	price ="￥" + price;
	return price;
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



function getOriginalData(){
	var dummyData = 
	{
		"customerStatus":[0,1,3]
		,"memberStatus":"2"
		,"list":
		[
			{"washType":"0"
			,"detail":[
						{
							"serialNo":"11"
							,"caseName":"泡FK-2手洗い洗11"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"0"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
						,{
							"serialNo":"12"
							,"caseName":"泡FK-2手洗い洗22"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"1"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":""
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						},{
							"serialNo":"13"
							,"caseName":"泡FK-2手洗い洗33"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"orderStatus":"1"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
					]
			}
			,{"washType":"1"
			,"detail":[
						{
							"serialNo":"21"
							,"caseName":"泡FK-2手洗い洗44"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"3"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
						,{
							"serialNo":"22"
							,"caseName":"泡FK-2手洗い洗55"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"2"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":""
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
					]
			}
			,{
				"washType":"2"
				,"detail":[
						{
							"serialNo":"31"
							,"caseName":"泡FK-2手洗い洗66"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"5"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
						,{
							"serialNo":"32"
							,"caseName":"泡FK-2手洗い洗77"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"4"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":""
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
				]
			},
			{
				"washType":"3"
				,"detail":[
						{
							"serialNo":"41"
							,"caseName":"泡FK-2手洗い洗888"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"1"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
						,{
							"serialNo":"42"
							,"caseName":"泡FK-2手洗い洗99"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"2"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
				]
			}
			,{
				"washType":"4"
				,"detail":[
						{
							"serialNo":"41"
							,"caseName":"泡FK-2手洗い洗888"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"1"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
						,{
							"serialNo":"42"
							,"caseName":"泡FK-2手洗い洗99"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"2"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
				]
			}
			,{
				"washType":"5"
				,"detail":[
						{
							"serialNo":"51"
							,"caseName":"泡FK-2手洗い洗00"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"4"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
						,{
							"serialNo":"52"
							,"caseName":"泡FK-2手洗い洗111"
							,"despriction":"泡とムートンでやさしく<br>手洗い水はじき抜群の仕上がり"
							,"useTime":"12"
							,"caseDetail":"●高圧水洗浄●高発泡剤<br>●ムートン手洗い●FK-2泡剤１１１１１"
							,"orderStatus":"3"
							,"normalPrice":{"ss":"22222","s":"333333","m":"444444","l":"555555","xl":"666666","ll":"7777777"}
							,"vipPrice":{"ss":"11111","s":"22222","m":"333333","l":"444444","xl":"555555","ll":"666666"}
							,"specialPrice":{"ss":"5555","s":"11111","m":"22222","l":"333333","xl":"444444","ll":"555555"}
						}
				]
				
			}
		]
	};
	
	OriginalData = dummyData;
	
	return dummyData;
}


(function( $ ){  var  $scrollTo = $.scrollTo = function( target, duration, settings ){  $(window).scrollTo( target, duration, settings ); }; $scrollTo.defaults = {  axis:'y',  duration:1 }; $scrollTo.window = function( scope ){  return $(window).scrollable(); }; $.fn.scrollable = function(){  return this.map(function(){   var win = this.parentWindow || this.defaultView,    elem = this.nodeName == '#document' ? win.frameElement || win : this,    doc = elem.contentDocument || (elem.contentWindow || elem).document,    isWin = elem.setInterval;   return elem.nodeName == 'IFRAME' || isWin ? doc.body    : isWin ? doc.documentElement    : this;  }); }; $.fn.scrollTo = function( target, duration, settings ){  if( typeof duration == 'object' ){   settings = duration;   duration = 0;  }  if( typeof settings == 'function' )   settings = { onAfter:settings };     settings = $.extend( {}, $scrollTo.defaults, settings );  duration = duration || settings.speed || settings.duration;  settings.queue = settings.queue && settings.axis.length > 1;    if( settings.queue )   duration /= 2;  settings.offset = both( settings.offset );  settings.over = both( settings.over );  return this.scrollable().each(function(){   var elem = this,    $elem = $(elem),    targ = target, toff, attr = {},    win = $elem.is('html,body');   switch( typeof targ ){    case 'number':    case 'string':     if( /^([+-]=)?\d+(px)?$/.test(targ) ){      targ = both( targ );      break;     }     targ = $(targ,this);    case 'object':     if( targ.is || targ.style )      toff = (targ = $(targ)).offset();   }   $.each( settings.axis.split(''), function( i, axis ){    var Pos = axis == 'x' ? 'Left' : 'Top',     pos = Pos.toLowerCase(),     key = 'scroll' + Pos,     old = elem[key],     Dim = axis == 'x' ? 'Width' : 'Height',     dim = Dim.toLowerCase();    if( toff ){     attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );     if( settings.margin ){      attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;      attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;     }          attr[key] += settings.offset[pos] || 0;          if( settings.over[pos] )      attr[key] += targ[dim]() * settings.over[pos];    }else     attr[key] = targ[pos];    if( /^\d+$/.test(attr[key]) )     attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max(Dim) );    if( !i && settings.queue ){     if( old != attr[key] )      animate( settings.onAfterFirst );     delete attr[key];    }   });      animate( settings.onAfter );      function animate( callback ){    $elem.animate( attr, duration, settings.easing, callback && function(){     callback.call(this, target, settings);    });   };   function max( Dim ){    var attr ='scroll'+Dim,     doc = elem.ownerDocument;        return win      ? Math.max( doc.documentElement[attr], doc.body[attr]  )      : elem[attr];   };  }).end(); }; function both( val ){  return typeof val == 'object' ? val : { top:val, left:val }; };})( jQuery );