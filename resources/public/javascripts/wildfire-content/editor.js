var editorPositionBookmark;

jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		res.execCommand('insertHTML',false, '<span id="caret">&nbsp;</span>');
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);
		var caret = ed.dom.select('span#caret');
		console.log(caret);

	});

});