$(function() {
	setGridData(dummyData);
});

function setGridData(){
	if(dummyData != null && dummyData != "undefine" && dummyData != ""){
		var insert = "";
		for(var i=0; i < dummyData.length;i++){
			var detail = dummyData[i];
			var text =  "<div class=' cmn-detail-row data-rowid='" + i + "'>";
			text += "<input type='hidden' value='" + detail.id + "'>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb11-gc1'>"+ detail.name +"</div>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb11-gc2'>"+ detail.capacity +"</div>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb11-gc3'>"+ detail.price +"</div>";
			text += "<div class='cmn-grid-cell cmn-grid-cell-l tb11-gc4'>"+ detail.amount +"</div>";
			text += "</div>";
			insert += text;
		}

		if(insert != null && insert != "undefine" && insert != ""){
			$("#tb11ListData").empty();
			$("#tb11ListData").append(insert);
			setRowColor();
		}
	}
}

function setRowColor() {
	$("#tb11ListData .cmn-detail-select").removeClass("cmn-detail-select");
	$("#tb11ListData .cmn-detail-odd").removeClass("cmn-detail-odd");
	$("#tb11ListData>div:not(.cmn-hidden):odd").addClass("cmn-detail-odd");
}

//////////////////////canvas/////////////////////////////

var drawer = {
   isDrawing: false,
   touchstart: function(coors){
      context.beginPath();
      context.moveTo(coors.x, coors.y);
      this.isDrawing = true;
   },
   touchmove: function(coors){
      if (this.isDrawing) {
         context.lineTo(coors.x, coors.y);
         context.stroke();
      }
   },
   touchend: function(coors){
      if (this.isDrawing) {
         this.touchmove(coors);
         this.isDrawing = false;
      }
   }
};

// create a function to pass touch events and coordinates to drawer
function draw(event){
   // get the touch coordinates
   var coors = {
      x: event.targetTouches[0].pageX,
      y: event.targetTouches[0].pageY
   };
   // pass the coordinates to the appropriate handler
   drawer[event.type](coors);
}

var canvas;
var context;
function initCanvas() {
	canvas = document.getElementById('signCanvas');
	context = canvas.getContext('2d');

	context.lineWidth = 4;
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);
		
	// attach the touchstart, touchmove, touchend event listeners.
	canvas.addEventListener('touchstart',draw, false);
	canvas.addEventListener('touchmove',draw, false);
	canvas.addEventListener('touchend',draw, false);
	document.body.addEventListener('touchmove',function(event){
		event.preventDefault();
	},false);
}

//////////////////////dummy data////////////////////////
var ROW_ID_SUM = "sum";

var dummyData = 
[
	{
		"id":"001"
		,"name":"カストロールＧＴＸ"
		,"capacity":"3.4L"
		,"price":"456 円"
		,"amount":"1,550 円"
	}
	,{
		"id":"002"
		,"name":"エンジンオイル作業"
		,"capacity":""
		,"price":""
		,"amount":""
	}
	,{
		"id":"003"
		,"name":"ブリジストン ECOPIA EX10（セット）"
		,"capacity":"1セット"
		,"price":"34,800 円"
		,"amount":"34,800 円"
	}
	,{
		"id":"004"
		,"name":"タイヤ交換作業料"
		,"capacity":""
		,"price":""
		,"amount":"2,000 円"
	}
	,{
		"id":"sum"
		,"name":"合計"
		,"capacity":""
		,"price":""
		,"amount":"38,350 円"
	}
];
