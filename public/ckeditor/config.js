/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function(config) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.language = 'zh-cn';
    config.toolbarGroups = [
        { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'forms', groups: [ 'forms' ] },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'tools', groups: [ 'tools' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'about', groups: [ 'about' ] }
    ];

    config.removeButtons = 'Save,Cut,Copy,Paste,PasteText,PasteFromWord,SelectAll,Scayt,CopyFormatting,RemoveFormat,CreateDiv,Language,BidiRtl,BidiLtr,Flash,Smiley,SpecialChar,PageBreak,Iframe,HiddenField,ShowBlocks,About,NewPage,Preview,Print,Form,ImageButton,Button,Select,Checkbox,Radio,Textarea,Anchor,Blockquote,Source,Templates';
    config.allowedContent = true;

    config.pasteFromWordRemoveFontStyles = false;
    config.pasteFromWordRemoveStyles = false;
//是否强制复制来的内容去除格式
    config.forcePasteAsPlainText =false;
	config.extraPlugins += (config.extraPlugins ? ',extendClick' : 'extendClick');
};
