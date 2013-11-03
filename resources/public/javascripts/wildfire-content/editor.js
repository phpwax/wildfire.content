var auto_save_bookmark;
jQuery(document).ready(function($) {

	jQuery(window).bind("autosave.start", function(e, res){
		auto_save_bookmark = res.selection.getBookmark();
	});

	jQuery(window).bind("autosave.completed", function(e, res){
		var editor = tinyMCE.activeEditor;
		editor.setContent(res.model.row.content);
		editor.selection.moveToBookmark(auto_save_bookmark);
	});

});