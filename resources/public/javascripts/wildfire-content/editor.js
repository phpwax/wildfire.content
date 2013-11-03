jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		var bookmark = editor.selection.getBookmark(2, true);
		editor.setContent(res.model.row.content);
		editor.selection.moveToBookmark(bookmark);
	});

});