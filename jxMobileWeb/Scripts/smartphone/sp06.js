$(function() {
	$("#popupMemo-popup select").change(function() {
		var val = $(this).children('option:selected').val();
		if (val != 0) {
			var txt = $(this).children('option:selected').text();
			$("#popupMemo-popup textarea").text("").val(txt);
		};
		$("#popupMemo-popup select").childern(0).attr("selected");
	});
	
	bindRadioGroups(["radio-fl-1","radio-fl-2","radio-fl-3"], "radio-fl-res", 0);
	bindRadioGroups(["radio-fr-1","radio-fr-2","radio-fr-3"], "radio-fr-res", 1);
	bindRadioGroups(["radio-bl-1","radio-bl-2","radio-bl-3"], "radio-bl-res", 2);
	bindRadioGroups(["radio-br-1","radio-br-2","radio-br-3"], "radio-br-res", 3);
});

var RAD_VALUE_OK = 0;
var RAD_VALUE_ATTENTION = 1;
var RAD_VALS = [[false,false,false],[false,false,false],[false,false,false],[false,false,false]];

function bindRadioGroups(rad1, rad2, gid) {
	
	for (var i=0; i<rad1.length; i++) {
		$("input:radio[name='" + rad1[i] + "']").click(function () {
			var n = $(this).attr("name");
			var i = 0;
			for (; i<rad1.length; i++) {
				if (rad1[i] == n) break;
			}
			if (RAD_VALS[gid][i] == true) {
				RAD_VALS[gid][i] = false;
				$(this).prop("checked",false).checkboxradio("refresh");
			} else {
				RAD_VALS[gid][i] = true;
				$(this).prop("checked",true).checkboxradio("refresh");
			}
			var isAttention = false;
			for (var j=0; j<RAD_VALS[gid].length; j++) {
				if (RAD_VALS[gid][j]) {
					isAttention = true;
					break;
				}
			}
			if (isAttention) {
				$("input:radio[name='" + rad2 + "'][value='" + RAD_VALUE_OK + "']").prop("checked",false).checkboxradio("refresh");
				$("input:radio[name='" + rad2 + "'][value='" + RAD_VALUE_ATTENTION + "']").prop("checked",true).checkboxradio("refresh");
			}
		});
	}

	$("input:radio[name='" + rad2 + "'][value='" + RAD_VALUE_OK + "']").click(function () {
		for (var i=0; i<rad1.length; i++) {
			$("input:radio[name='" + rad1[i] + "']").prop("checked",false).checkboxradio("refresh");
			RAD_VALS[gid][i] = false;;
		}
	});
}

var memoId = "";

function callPopupMemo(id) {
	memoId = id;
	$("#popupMemo-popup select").val(0);
	$("#popupMemo-popup textarea").val($("#"+memoId).text());
}

function onPopupMemoClose() {
	$("#"+memoId).text($("#popupMemo-popup textarea").val());
}