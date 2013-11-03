var editorPositionBookmark;

jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		editorPositionBookmark = res.selection.getBookmark();
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);
		editor.selection.moveToBookmark(editorPositionBookmark);

	});

});