$(function() {
    setListData(getOriginalData());
    $.mobile.pageContainer.trigger("create");
});

function setListData(data) {

    if (data != null && data != "undefine" && data != "") {
        var insert = "";

        for (var i = 0; i < data.length; i++) {
            var detail = data[i];
            var text = "<div class='cmn-grid cmn-area tb19-mainbodyArealeft'>" 
            + "<div class='cmn-grid-cell-noborder tb19-mainbodyAreaTop'>" + detail.title + "</div>" 
            + "<div class='cmn-grid cmn-area tb19-carPicInfo'>" 
            + "<img align='absmiddle' style='width: 100%;height: 100%;' src='" + detail.imgSrc + "'>" 
            + "</div>";
            if (i % 2 == 0) {
                text += "<div class='cmn-grid-cell-noborder tb19-carInfoDetailArea1'>";
            } else {
                text += "<div class='cmn-grid-cell-noborder tb19-carInfoDetailArea2'>";
            }
            text += "<div class='cmn-grid-cell-noborder tb19-carInfoTextD1'>" + detail.maker + "</div>" 
            	+ "<div class='cmn-grid-cell-noborder tb19-carInfoTextD1'>" + detail.partName + "</div>" 
            	+ "<div class='cmn-grid-cell-noborder tb19-carInfoTextD2'>" 
            	+ "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubleft'>" 
            	+ "        粘度" + "    </div>" 
            	+ "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubright'>" 
            	+ "        ：" + detail.itemInfo1 
            	+ "    </div>" 
            	+ "</div>" 
            	+ "<div class='cmn-grid-cell-noborder tb19-carInfoTextD2'>" 
            	+ "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubleft'>" 
            	+ "        規格" 
            	+ "    </div>" 
            	+ "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubright'>" 
            	+ "        ：" + detail.itemInfo2 
            	+ "    </div>" 
            	+ "</div>"
            if (i % 2 == 0) {
                text += "<div class='cmn-grid-cell-noborder cmn-grid-border-b tb19-carInfoTextD2 tb19-carInfoborder-b1'>";
            } else {
                text += "<div class='cmn-grid-cell-noborder cmn-grid-border-b tb19-carInfoTextD2 tb19-carInfoborder-b2'>";
            }
            text += "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubleft'>" 
            	+ "        タイプ" 
            	+ "    </div>" 
            	+ "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubright'>" 
            	+ "        ：" + detail.itemInfo3 
            	+ "    </div>" 
            	+ "</div>" 
            	+ "<div class='cmn-grid-cell-noborder tb19-carInfoTextD3'>" 
            	+ "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubleft'>" 
            	+ "        単価" 
            	+ "    </div>" 
            	+ "    <div class='cmn-grid-cell-noborder tb19-carInfoTextSubright'>" 
            	+ "        ：" + detail.price 
            	+ "    </div>" 
            	+ "</div>" 
            	+ "</div>" 
            	+ "<p class='cmn-align-center'>" 
            	+ "    <a href='#' data-role='button' data-inline='true' data-iconpos='right'" 
            	+ "    data-icon='arrow-r' class='tb19-buttonSearch'>" 
            	+ "        選択" 
            	+ "    </a>" 
            	+ "</p>" 
            	+ "</div>"

            insert += text;
        }

        if (insert != null && insert != "undefine" && insert != "") {
            $("#tb19ListData").empty();
            $("#tb19ListData").append(insert);
        }
    }
}

function getOriginalData() {
    var dummyData = [{
        "title": "ハイグレード",
        "imgSrc": "../images/TB19/mediaResource1.jpg",
        "maker": "SUSUTINA",
        "partName": "サスティナ5W-3D",
        "itemInfo1": "5W-3Q",
        "itemInfo2": "IL5AC GF-5",
        "itemInfo3": "化学合成油",
        "price": "￥2,100/L"
    },
    {
        "title": "スタンダード",
        "imgSrc": "../images/TB03/mediaResource2.jpg",
        "maker": "ＢＰ",
        "partName": "バービス",
        "itemInfo1": "5W-3Q",
        "itemInfo2": "SN GF-5",
        "itemInfo3": "化学合成油",
        "price": "￥1,165/L"
    },
    {
        "title": "ハイグレード",
        "imgSrc": "../images/TB03/mediaResource3.jpg",
        "maker": "カストロール",
        "partName": "ＧＴＸ",
        "itemInfo1": "5W-3Q",
        "itemInfo2": "SM",
        "itemInfo3": "化学合成油",
        "price": "￥1,312/L"
    }];

    return dummyData;
}