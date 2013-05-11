$(function() {
	onTabClick(0);
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

function setupPopup(title) {
	$("div:jqmData(role='popup') h3").html(title);
	$("div:jqmData(role='popup') input[type='text']").val("");
}