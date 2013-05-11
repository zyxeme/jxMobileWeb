var i = -1;

$(function() {
    setGridData(getCarInfor());
});


function setGridData(data){
   
  
   for(var i=0; i < data.length;i++){
       var colorDiv="";
       var insert="";
	   var detail = data[i];
	   var count1 = detail.count;
	   
	   if(count1%2 !=0){
	  
	        count1=parseInt(count1)+1;
	        
	       count1 = count1/2;
	       if(count1%2 != 0){
	          
	          colorDiv="backclo";
	         
	       }
	   }else{
	       count1 = count1/2;
	       if(count1%2 != 0){
	          
	          colorDiv="backclo";
	         
	       }
	     	
	   }
       
       if(detail.flag=="0"){
       	    var text="<div class='cmn-grid-cell cmn-grid-cell-l sp05-mulrows12 "+colorDiv+"  backclo1'><div class='font3'><a href='#popupMemo2' data-rel='popup' data-position-to='window'  data-transition='pop'><div class='font34'>"+detail.date1+"</div><div class='font33 sp05-att'>"+detail.type1+"</div></a></div></div>"
       }else if(detail.flag=="1"){
            var text="<div class='cmn-grid-cell cmn-grid-cell-l sp05-mulrows12 backclo"+colorDiv+"'><div class='font3'><div class='font34'>"+detail.date1+"</div><div class='font33 sp05-att'>"+detail.type1+"</div></div></div>"
       
       }
       insert += text;
	   if(insert != null && insert != "undefine" && insert != ""){
		    $("#sp05List"+detail.count).empty();
			$("#sp05List"+detail.count).append(insert);	
   		}
   }
  


  
  
}

var arr = new Array();

var tabIndex = 0;

function onPopupMemoLogin(){
   i++;
   var select1 = $("#select1").val();
   var select2 = $("#select2").val();
   var str = select1;
   var flag=true;
   for(var m=0;m<arr.length;m++){
      if(arr[m]==str){
        flag=false;
      }
    }
    arr.push(str);
    if(flag==false){
       alert("提案商品:（"+select1+"）が重複しています。");
    }
    if(flag||i==0){
       tabIndex++;
       var insert = "";
       if(select2 == "1"){
                colorDiv = "sp03-color1";
            }else if(select2 == "2"){
			    colorDiv = "sp03-color2";
			
			}else if(select2 == "3"){
			    colorDiv = "sp03-color3";
			
			}else if(select2 == "5"){
			    colorDiv = "sp03-color5";
			
			}else if(select2 == "6"){
			    colorDiv = "sp03-color6";
			
			}else if(select2 == "7"){
			    colorDiv = "sp03-color7";
			
			}else if(select2 == "8"){
			    colorDiv = "sp03-color8";
			
			}
   			 
               var text = "<div class='cmn-grid-cell sp05-main "+colorDiv+"' id='"+tabIndex+"'>"
						+"<div class='sp05-font'>"
						+ select1
						+"</div>"
						+"<div class='sp05-font1'>"
						+select2
						+"</div>" 
						+"<div class='sp05-font2'>"
                        +"<p class='cmn-align-center sp05-11 '>"
                        +"<a href='javascript:doClear("+tabIndex+")' data-cancel  data-role='button' data-inline='true'>削除</a>"
                        +"</p>"
                        +"</div>"
						+"</div>"

   insert += text;
   
   if(insert != null && insert != "undefine" && insert != ""){
			$("#sp05ListData1").append(insert);
		}
	}
}

function doClear(id){
    
    id="sd"+id;
    alert(id);
    $("#id").empty();
    alert(111);
}



function getCarInfor(){
    var dummyData = 
	[
		{
			"date1":"12/12/12(A)","type1":"要注意(摩)","count":"1","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"要注意(摩)","count":"2","flag":"0"
		}
		,{
            "date1":"12/12/13(A)","type1":"要注意(摩)","count":"3","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"要注意(摩)","count":"4","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"5","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"6","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"7","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"8","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"9","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"10","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"11","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"12","flag":"0"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"13","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"14","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"15","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"16","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"17","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"18","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"19","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"20","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"21","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"22","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"23","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"24","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"25","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"26","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"27","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"28","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"29","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"30","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"31","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"32","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"33","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"34","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"35","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"36","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"37","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"38","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"39","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"40","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"41","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"42","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"43","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"44","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"45","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"46","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"47","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"48","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"49","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"50","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"51","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"52","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"53","flag":"1"
		}
		,{
			"date1":"12/12/1(A)","type1":"ＯＫ","count":"54","flag":"1"
		}
		
	];
	
	return dummyData;
}