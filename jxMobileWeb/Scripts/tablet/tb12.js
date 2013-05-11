$(function() {
	onTabClick(0);
	
	$("#popupCalculator .ui-btn").click(function() {
		onCalculatorInput($(this).text());
	});
});

var tabIndex = 0;
function onTabClick(index) {
	if (index != -1) {
		tabIndex = index;
	}
	if (tabIndex == 0) {
		$("#area-customer").css("display", "block");
		$("#area-car").css("display", "none");
	} else {
		$("#area-customer").css("display", "none");
		$("#area-car").css("display", "block");
	}
}

function callCalc(id) {
	var num = $('#' + id).text().replace(',','').replace(',','').replace(',','');
	if (num == "" || num == null || num == "undefine") {
		$("#numDisp").empty().html(0);
	} else {
		$("#numDisp").empty().html(parseInt(num));
	}
	$('#ctrlId').val(id);
	$('#calcCaller').click();
}

function onCalculatorInput(n) {
	var curNum = $("#numDisp").html();
	n = "" + n;
	switch (n) {
		case "OK":
			var ctrlId = $("#ctrlId").val();
			$("#" + ctrlId).empty().html(formatNumber(parseInt(curNum)));
			return;
		case "ESC":
			return;
		case "BS":
			curNum = curNum.substr(0, curNum.length - 1);
			if (curNum == "") curNum = 0;
			break;
		case "C":
			curNum = 0;
			break;
		case "0":
		case "00":
			if (curNum == "0") {
				return;
			}
			curNum += n;
			break;
		case ".":
			if (curNum.indexOf(".") > 0) {
				return;
			}
			curNum += n;
			break;
		default:
			if (curNum == "0") {
				curNum = n;
			} else {
				curNum += n;
			}
			break;
	}
	
	$("#numDisp").empty().html(curNum);
}

function formatNumber(n) {
	var s = "" + n;
	var res = "";
	while (s.length > 3) {
		res = "," + s.substr(s.length-3, 3) + res;
		s = s.substr(0, s.length-3);
	}
	res = s + res;
	return res;
}


//////////////dummydata////////////////
var dummyData = {
	"distance": 12300
};