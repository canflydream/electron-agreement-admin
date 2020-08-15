CKEDITOR.plugins.add('extendClick', {
    init: function(a){
        a.addCommand('extendClick', new CKEDITOR.dialogCommand('insertData'));
        a.ui.addButton('extendClick', {
            label: "选择元数据",
            command: 'extendClick',
            icon: this.path + 'images/insertData.png',
            click:function(r){
                showData(r);
            }
        });
        // CKEDITOR.dialog.add('extendClick', this.path + 'dialogs/click.js');
    }
});