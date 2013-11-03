var editorPositionBookmark;

jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		alert("here");
		res.execCommand('insertHTML',false, '<span id="caret">&nbsp;</span>');
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);
		var caret = editor.dom.select('span#caret');
		

	});

});