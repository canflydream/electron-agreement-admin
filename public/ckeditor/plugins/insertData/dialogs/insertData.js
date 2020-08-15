CKEDITOR.dialog.add('insertData', function (editor) {
    return {
        title: "插入数据节点",
        minWidth: "500px",
        minHeight: "500px",
        contents: [{
            id: "tab1",
            label: "label",
            title: "title",
            expand: true,
            width: 500,
            height: 500,
            padding: 0,
            elements: [{
                type: "html",
                style: "width:500px;height:300px",
                html: "<div>" +
                    "" +
                    "<br>" +
                    "英文：<input style='width: 50%;height: 20px;border:1px solid #3c3c3c;' type=\"text\" onkeyup=\"keyData(this.value);\"><br><br>" +
                    "描述：<input style='width: 50%;height: 20px;border:1px solid #3c3c3c;' type=\"text\" onkeyup=\"descData(this.value);\"><br><br>" +
                    "预览:<br><br>" +
                        "<span id=\"result\">" +
                            "<span class='insertDatas'>" +
                        "{{<span id=\"key1\"></span>:<span id=\"key2\"></span>}}" +
                            "</span>" +
                        "</span>" +
                    "</div>"
            }]
        }],
        onOk: function () {
            //点击确定按钮后的操作
            editor.insertHtml($("#result").html());
        }
    };
});