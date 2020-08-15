CKEDITOR.plugins.add('insertData', {
    lang:['zh-cn'],
    requires: ['dialog'],
    init: function(a){
        a.addCommand('insertData', new CKEDITOR.dialogCommand('insertData'));
        a.ui.addButton('insertData', {
            label: "插入数据",
            command: 'insertData',
            icon: this.path + 'images/insertData.png'
        });
        CKEDITOR.dialog.add('insertData', this.path + 'dialogs/click.js');
    }
});